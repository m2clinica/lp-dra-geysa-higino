import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const UterusIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Corpo do Útero */}
    <path d="M12 22c-1.5 0-4-4-4-9 0-3.5 1.8-6 4-6s4 2.5 4 6c0 5-2.5 9-4 9z" />
    
    {/* Trompa Esquerda */}
    <path d="M8.5 10C7 7.5 4 7.5 2.5 10.5" />
    
    {/* Trompa Direita */}
    <path d="M15.5 10C17 7.5 20 7.5 21.5 10.5" />
    
    {/* Ovário Esquerdo */}
    <ellipse cx="3" cy="13" rx="2.5" ry="3.5" transform="rotate(-15 3 13)" />
    
    {/* Ovário Direito */}
    <ellipse cx="21" cy="13" rx="2.5" ry="3.5" transform="rotate(15 21 13)" />
  </svg>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 text-primary mb-8">
            <UterusIcon size={40} />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-8">
            Você não precisa sofrer em silêncio.
          </h2>

          <div className="space-y-6 text-lg text-text/80 leading-relaxed font-light">
            <p>
              Muitas mulheres ignoram dores pélvicas e ciclos irregulares por acreditarem que <br />
              <span className="font-semibold text-primary/80 italic whitespace-nowrap">"sentir dor é normal"</span>.
            </p>
            <p>
              A Organização Mundial da Saúde alerta: esses podem ser sintomas de condições de saúde muito mais sérias. 
              A boa notícia? Estudos mostram que a <strong className="font-semibold text-primary">prevenção e o acompanhamento adequado podem reduzir o risco de doenças em até 60%</strong>.
            </p>
          </div>

          <div className="mt-12">
            <a 
              href="#locais"
              className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary/20 pb-1 hover:border-primary hover:text-[#4A3256] transition-all group"
            >
              Quero Priorizar Minha Saúde
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};