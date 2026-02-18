import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SERVICES } from '../../data/constants';

export const Services: React.FC = () => {
    return (
        <section id="tratamentos" className="py-24 bg-background relative">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
                        Tratamentos e Cuidados Personalizados
                    </h2>
                    <p className="text-text/80 text-lg font-light">
                        Técnicas avançadas em cirurgia ginecológica e histeroscopia em um ambiente acolhedor,
                        focado em confiança e empatia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-[12px] p-8 shadow-card border border-gray-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                            <ul className="space-y-3">
                                {service.items.map((item) => (
                                    <li key={item} className="flex items-start text-sm text-text/70 leading-snug">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 mr-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button href="#locais" variant="secondary">
                        Conhecer Todos os Tratamentos
                    </Button>
                </div>
            </div>
        </section>
    );
};
