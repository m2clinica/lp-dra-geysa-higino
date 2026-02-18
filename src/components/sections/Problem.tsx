import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { UterusIcon } from '../icons/UterusIcon';

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
                            <span className="font-semibold text-primary/80 italic whitespace-nowrap">
                                "sentir dor é normal"
                            </span>
                            .
                        </p>
                        <p>
                            A Organização Mundial da Saúde alerta: esses podem ser sintomas de condições de saúde
                            muito mais sérias. A boa notícia? Estudos mostram que a{' '}
                            <strong className="font-semibold text-primary">
                                prevenção e o acompanhamento adequado podem reduzir o risco de doenças em até 60%
                            </strong>
                            .
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
