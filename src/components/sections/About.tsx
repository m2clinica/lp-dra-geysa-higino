import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import portraitImage from '../../assets/images/dra-geysa-portrait.jpg';

export const About: React.FC = () => {
    return (
        <section id="sobre" className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-sm mx-auto"
                    >
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-secondary/30 rounded-[2rem] translate-x-4 translate-y-4" />
                        <img
                            src={portraitImage}
                            alt="Dra. Geysa Higino Portrait"
                            className="w-full h-auto rounded-[2rem] shadow-2xl relative z-10 object-cover aspect-[3/4]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2">
                            Dra. Geysa Higino
                        </h2>
                        <h3 className="text-xl text-secondary mb-8 font-medium tracking-wide">
                            CRM/SE: 6817 | RQE: 4275
                        </h3>

                        <div className="space-y-6 text-lg text-white/90 font-light leading-relaxed mb-10">
                            <p>
                                Olá! Sou especialista em cirurgia ginecológica e histeroscopia. Dedico minha
                                carreira a fornecer os melhores cuidados possíveis para a saúde da mulher.
                            </p>
                            <p>
                                Com anos de experiência, meu objetivo é oferecer um atendimento humanizado e
                                personalizado. Comigo, a sua segurança e bem-estar são prioridade absoluta.
                            </p>
                        </div>

                        <Button href="#locais" variant="white">
                            Agendar Avaliação com a Dra. Geysa
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
