import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/5579996021112"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer hover:bg-[#20bd5a]"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} />
      <span className="absolute right-full mr-3 bg-white text-text text-sm font-medium px-3 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Agende agora
      </span>
    </motion.a>
  );
};