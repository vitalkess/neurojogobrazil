import React from 'react';
import { XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "Não obedece na primeira vez",
      desc: "Precisa repetir o pedido 10 vezes."
    },
    {
      title: "Não consegue ficar parado",
      desc: "Não consegue sentar para estudar nem por 5 minutos."
    },
    {
      title: "Confunde letras",
      desc: "Escreve ao contrário, pula sílabas ou tem letra feia."
    },
    {
      title: "Tem explosões emocionais",
      desc: "Crises sem motivo, difícil de acalmar."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-navy mt-3">
          Você reconhece o seu filho?
        </h2>
      </div>

      <div className="space-y-4">
        {pains.map((item, index) => (
          <div key={index} className="flex gap-4 items-start p-5 rounded-2xl bg-sage-light/50 border border-sage/10 hover:border-sage/30 transition-colors">
            <XCircle className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-navy text-lg leading-tight">{item.title}</h3>
              <p className="text-navy/70 text-sm mt-2 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-cream rounded-2xl border border-gold/20 text-center relative overflow-hidden">
        <p className="text-navy font-medium leading-relaxed relative z-10">
          Não é <span className=”text-terracotta font-extrabold”>culpa da criança</span>.
          <br/>O cérebro dela simplesmente precisa do “combustível” e treino adequados.
        </p>
      </div>
    </section>
  );
};