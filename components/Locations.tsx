import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';
import { LocationCardProps } from '../types';

const locations: LocationCardProps[] = [
  {
    name: "Clínica Santa Helena",
    city: "Aracaju/SE",
    phone: "(79) 99602-1112",
    delay: 0
  },
  {
    name: "Clínica HOMO",
    city: "Aracaju/SE",
    phone: "(79) 99602-1112",
    delay: 0.1
  },
  {
    name: "Clínica HARMONIA",
    city: "Umbaúba/SE",
    phone: "(79) 99602-1112",
    delay: 0.2
  }
];

export const Locations: React.FC = () => {
  return (
    <section id="locais" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
            Onde Encontrar Seu Atendimento
          </h2>
          <p className="text-text/80 text-lg font-light">
            Tire suas dúvidas com nossa equipe e agende seu horário no local mais próximo de você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locations.map((loc) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: loc.delay }}
              className="bg-white rounded-xl p-10 shadow-card border border-gray-100 flex flex-col items-center text-center hover:shadow-soft transition-all duration-300 group"
            >
              <div className="bg-primary/5 p-5 rounded-full text-primary mb-6 group-hover:bg-primary/10 transition-colors">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-2">{loc.name}</h3>
              <p className="text-text/50 text-sm mb-6 uppercase tracking-wide">{loc.city}</p>
              
              <a 
                href={`https://wa.me/55${loc.phone.replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary/80 hover:text-primary font-medium transition-colors"
              >
                <MessageCircle size={20} />
                <span>{loc.phone}</span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
           <motion.a 
              href="https://wa.me/5579996021112"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-[#20bd5a] transition-colors"
           >
              <MessageCircle size={24} />
              Falar com a Equipe no WhatsApp
           </motion.a>
        </div>

      </div>
    </section>
  );
};