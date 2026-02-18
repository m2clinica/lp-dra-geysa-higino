import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="text-center">
                        <h2 className="font-serif text-2xl font-bold tracking-wide">DRA. GEYSA HIGINO</h2>
                        <span className="text-xs uppercase tracking-[0.2em] text-secondary opacity-80">
                            Ginecologia e Obstetrícia
                        </span>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="text-center text-sm text-white/50 space-y-1">
                        <p>COPYRIGHT © {new Date().getFullYear()} - ALL RIGHTS RESERVED.</p>
                        <p>Feito com carinho para cuidar de você.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
