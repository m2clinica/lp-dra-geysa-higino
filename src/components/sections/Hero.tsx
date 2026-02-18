import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import heroImage from '../../assets/images/dra-geysa-hero.jpg';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative pt-20 pb-16 lg:pt-28 lg:pb-32 overflow-hidden bg-background">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blob-pattern bg-no-repeat bg-right-top opacity-60 pointer-events-none" />
            <div className="absolute top-20 right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 lg:mb-6">
                            Ginecologia, Segurança e Bem-Estar
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-primary mb-4 lg:mb-6 leading-tight">
                            A Sua Saúde e Bem-Estar em <span className="italic text-accent">Primeiro Lugar.</span>
                        </h1>
                        <h2 className="text-base sm:text-lg lg:text-xl text-text/80 mb-6 lg:mb-8 font-light leading-relaxed">
                            Cuidado ginecológico humanizado e avançado para todas as fases da sua vida.
                            Você merece um atendimento único e focado na sua segurança.
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button href="#locais">Agendar Minha Consulta Agora</Button>
                        </div>
                        <p className="mt-3 text-sm text-text/60 font-medium">
                            Atendimento Particular e Convênios.
                        </p>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-tr-[60px] rounded-bl-[60px] lg:rounded-tr-[80px] lg:rounded-bl-[80px] rotate-3 transform translate-x-2 translate-y-2 -z-10" />
                            <img
                                src={heroImage}
                                alt="Dra. Geysa Higino"
                                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] h-auto rounded-tr-[60px] rounded-bl-[60px] lg:rounded-tr-[80px] lg:rounded-bl-[80px] shadow-2xl object-cover border-4 border-white"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-card flex items-center gap-2 sm:gap-3 max-w-[200px] sm:max-w-[220px]">
                                <div className="bg-secondary/30 p-1.5 sm:p-2 rounded-full text-primary">
                                    <Check size={18} className="sm:hidden" strokeWidth={3} />
                                    <Check size={20} className="hidden sm:block" strokeWidth={3} />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-text/50 tracking-wide">Especialista</p>
                                    <p className="text-xs sm:text-sm font-bold text-primary">Cirurgia Ginecológica</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
