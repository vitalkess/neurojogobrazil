import React from 'react';
import { Move, BrainCircuit, Activity, Wind, Gift } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto border-t border-gold/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-navy">O que tem dentro?</h2>
      </div>

      <div className="space-y-6">
        
        {/* Part 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-terracotta/10">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center text-terracotta shrink-0">
              <Move size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 1. Neurojogos para atenção e energia</h3>
                <span className="text-sm font-bold text-terracotta">(52 jogos motores)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>O que fazemos:</strong> Jogos motores para “reiniciar” o cérebro e aliviar a tensão.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0"></div>
              <span><strong>Exercícios favoritos:</strong> “Orelha-Nariz”, “Silêncio-Sussurro-Grito”, “Quatro elementos”.</span>
            </li>
          </ul>
          <div className="bg-terracotta/5 p-3 rounded-lg text-sm text-terracotta font-semibold border border-terracotta/10">
            Resultado: A criança aprende a ouvir comandos na primeira vez e controlar o próprio corpo.
          </div>
        </div>

        {/* Part 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sand/30 rounded-xl flex items-center justify-center text-navy shrink-0">
              <BrainCircuit size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 2. Desenvolvimento cognitivo</h3>
                <span className="text-sm font-bold text-navy/60">(29 jogos lógicos)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>O que fazemos:</strong> Tarefas de pensamento espacial, concentração e memória.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0"></div>
              <span><strong>Jogos favoritos:</strong> “Número proibido”, “O Besouro” (orientação em grade), “O que mudou na mesa?”.</span>
            </li>
          </ul>
          <div className="bg-sand/20 p-3 rounded-lg text-sm text-navy font-semibold border border-gold/20">
            Resultado: A criança memoriza poemas e conteúdo escolar com mais facilidade e se torna mais atenta.
          </div>
        </div>

        {/* Part 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-sage/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center text-sage shrink-0">
              <Activity size={24} strokeWidth={2.5} />
            </div>
             <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 3. Alongamento e Corpo</h3>
                <span className="text-sm font-bold text-sage">(10 técnicas de relaxamento)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>O que fazemos:</strong> Posições especiais para aliviar tensões musculares.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 shrink-0"></div>
              <span><strong>Exercícios favoritos:</strong> “Cobra”, “Medusa”, “Árvore”.</span>
            </li>
          </ul>
          <div className="bg-sage-light p-3 rounded-lg text-sm text-sage font-semibold border border-sage/20">
            Resultado: Acalma o sistema nervoso após ficar sentado na cadeira ou no celular.
          </div>
        </div>

        {/* Part 4 - Breathing */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Wind size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-navy leading-tight">Parte 4. Exercícios respiratórios (Antiestresse)</h3>
                <span className="text-sm font-bold text-navy/60">(26 práticas respiratórias)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>O que fazemos:</strong> Técnicas para oxigenar o cérebro e controlar as emoções.</span>
            </li>
             <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Exercícios favoritos:</strong> “Vela”, “Balão”, “Respiração pelo nariz”.</span>
            </li>
          </ul>
           <div className="bg-navy/5 p-3 rounded-lg text-sm text-navy font-semibold border border-navy/10">
            Resultado: Ajuda a criança a se acalmar rapidamente durante crises ou antes de dormir.
          </div>
        </div>

        {/* Bonus */}
        <div className="bg-gradient-to-br from-white to-sand-light rounded-2xl p-6 shadow-md border-2 border-gold/40 relative overflow-hidden">
             {/* Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full -mr-4 -mt-4 z-0"></div>

          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-navy shrink-0">
              <Gift size={24} strokeWidth={2.5} />
            </div>
            <div>
                 <h3 className="text-xl font-bold text-navy leading-tight">BÔNUS: Cadernos de exercícios</h3>
                 <span className="text-sm font-bold text-navy/60">(50+ páginas de atividades)</span>
            </div>
          </div>
          <ul className="space-y-3 text-navy/80 mb-4 pl-1 relative z-10">
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Grafomotricidade:</strong> “Desenho com as duas mãos” (sincroniza os hemisférios!).</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Lego-codificação:</strong> Esquemas prontos para desenvolver a lógica com blocos.</span>
            </li>
            <li className="flex gap-3 text-sm items-start">
               <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 shrink-0"></div>
              <span><strong>Desenho espelhado</strong> e pixel-art (“Quadradinhos engraçados”).</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};