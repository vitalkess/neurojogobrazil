import crypto from 'crypto';

export const config = { api: { bodyParser: false } };

// ─── Конфіг (з env змінних) ───────────────────────────────────────
const WEBHOOK_SECRET   = process.env.STRIPE_WEBHOOK_SECRET;
const SP_CLIENT_ID     = process.env.SP_CLIENT_ID;
const SP_CLIENT_SECRET = process.env.SP_CLIENT_SECRET;
const SP_LIST_BUYERS   = '665383'; // neurojogo.com - Покупки
const TG_BOT           = process.env.TG_BOT;
const TG_CHAT          = process.env.TG_CHAT;
const FB_PIXEL_ID      = process.env.FB_PIXEL_ID;
const FB_CAPI_TOKEN    = process.env.FB_CAPI_TOKEN;

// ─── Верифікація підпису Stripe ───────────────────────────────────
function verifySignature(rawBody, sigHeader, secret) {
  const parts = Object.fromEntries(sigHeader.split(',').map(p => p.split('=')));
  const timestamp = parts['t'];
  const v1 = parts['v1'];
  if (!timestamp || !v1) return false;

  // Захист від replay-атак (5 хвилин)
  if (Math.floor(Date.now() / 1000) - parseInt(timestamp) > 300) return false;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`, 'utf8')
    .digest('hex');

  try {
    return crypto.timingSafeEqual(Buffer.from(v1, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}

// ─── SendPulse ────────────────────────────────────────────────────
async function addToSendPulse(email) {
  try {
    const tokenRes = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ grant_type: 'client_credentials', client_id: SP_CLIENT_ID, client_secret: SP_CLIENT_SECRET }),
    });
    const { access_token } = await tokenRes.json();
    await fetch(`https://api.sendpulse.com/addressbooks/${SP_LIST_BUYERS}/emails`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${access_token}` },
      body: JSON.stringify({ emails: [{ email }] }),
    });
    console.log(`✅ SendPulse: ${email}`);
  } catch (e) { console.error('SendPulse error:', e.message); }
}

// ─── Facebook CAPI ────────────────────────────────────────────────
async function sendFbPurchase(email, amount, currency, eventId) {
  if (!FB_CAPI_TOKEN) return;
  try {
    const hashedEmail = crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex');
    await fetch(`https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [{
          event_name: 'Purchase',
          event_id: eventId,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: 'https://www.neurojogo.com/',
          user_data: { em: [hashedEmail] },
          custom_data: { value: amount, currency },
        }],
        access_token: FB_CAPI_TOKEN,
      }),
    });
    console.log(`✅ FB CAPI: Purchase ${amount} ${currency} [event_id: ${eventId}]`);
  } catch (e) { console.error('FB CAPI error:', e.message); }
}

// ─── Telegram ─────────────────────────────────────────────────────
async function notifyTelegram(email, amount, currency) {
  try {
    await fetch(`https://api.telegram.org/bot${TG_BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TG_CHAT,
        text: `💰 <b>Оплата підтверджена!</b>\n\n📧 ${email}\n💵 ${amount} ${currency}`,
        parse_mode: 'HTML',
      }),
    });
  } catch (e) { console.error('Telegram error:', e.message); }
}

// ─── Обробка оплати ───────────────────────────────────────────────
async function handlePayment(session) {
  const email    = session.customer_details?.email || session.customer_email;
  const amount   = parseFloat(((session.amount_total || 0) / 100).toFixed(2));
  const currency = (session.currency || 'BRL').toUpperCase();
  const eventId  = session.id; // Stripe session ID — використовується для дедуплікації FB

  if (!email) return;
  console.log(`💰 Payment: ${email} ${amount} ${currency} [${eventId}]`);

  await Promise.all([
    addToSendPulse(email),
    sendFbPurchase(email, amount, currency, eventId),
    notifyTelegram(email, amount, currency),
  ]);
}

// ─── Головний обробник ────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks).toString('utf8');

  const sig = req.headers['stripe-signature'];
  if (!sig || !verifySignature(rawBody, sig, WEBHOOK_SECRET)) {
    console.error('Invalid Stripe signature');
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const event = JSON.parse(rawBody);
  console.log(`📩 Event: ${event.type}`);

  const session = event.data.object;

  // Ігноруємо не-бразильські оплати (польський сайт = PLN)
  if ((session.currency || '').toLowerCase() !== 'brl') {
    console.log(`⏭️ Skipping non-BRL payment: ${session.currency}`);
    return res.status(200).json({ received: true });
  }

  // Карта/оплата одразу
  if (event.type === 'checkout.session.completed' && session.payment_status === 'paid') {
    await handlePayment(session);
  }

  // PIX — приходить після підтвердження банком
  if (event.type === 'checkout.session.async_payment_succeeded') {
    await handlePayment(session);
  }

  res.status(200).json({ received: true });
}
