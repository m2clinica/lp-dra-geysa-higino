import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../../data/constants';

export const FloatingWhatsApp: React.FC = () => {
    return (
        <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer hover:bg-[#20bd5a]"
            style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle size={28} className="sm:hidden" strokeWidth={2.5} />
            <MessageCircle size={32} className="hidden sm:block" strokeWidth={2.5} />
        </motion.a>
    );
};

