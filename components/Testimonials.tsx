import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-center text-navy mb-8">O que as mães dizem?</h2>

      <div className="space-y-6">
        {/* Review 1 */}
        <div className="bg-sand-light p-6 rounded-2xl border border-sand">
          <div className="flex gap-1 text-gold mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/80 italic mb-4 leading-relaxed font-medium">
            "Meu filho confundia as letras 'b' e 'd'. Fizemos os exercícios de desenho espelhado da 3ª parte do livro — em um mês o problema desapareceu!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center font-bold text-navy text-sm">M</div>
            <div>
              <p className="font-bold text-navy text-sm">Maria</p>
              <p className="text-xs text-navy/60">Mãe de aluno da 1ª série</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-sand-light p-6 rounded-2xl border border-sand">
          <div className="flex gap-1 text-gold mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-navy/80 italic mb-4 leading-relaxed font-medium">
            "Adoramos os exercícios com Lego. É genial — aprender lógica através de blocos."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center font-bold text-terracotta text-sm">O</div>
            <div>
              <p className="font-bold text-navy text-sm">Ana</p>
              <p className="text-xs text-navy/60">Mãe da Sofia de 5 anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};