import React from 'react';
import { Check } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-sage-light max-w-lg mx-auto relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <h2 className="text-2xl font-extrabold text-navy mb-8 relative z-10">
        Apenas 15 minutos por dia:
      </h2>

      <div className="space-y-4 relative z-10">
        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className="font-bold text-navy text-lg">A letra vai melhorar</h3>
            <p className="text-navy/70 mt-1">Graças aos exercícios de interação inter-hemisférica.</p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className=”font-bold text-navy text-lg”>As crises vão desaparecer</h3>
            <p className=”text-navy/70 mt-1”>Exercícios respiratórios (ex.: “Apagar a vela”).</p>
          </div>
        </div>

        <div className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center shrink-0 text-sage mt-1">
            <Check size={18} strokeWidth={3} />
          </div>
          <div>
            <h3 className=”font-bold text-navy text-lg”>O desempenho escolar vai melhorar</h3>
            <p className=”text-navy/70 mt-1”>Um cérebro desenvolvido absorve novas informações mais rápido.</p>
          </div>
        </div>
      </div>
    </section>
  );
};