"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Project 01 - Left Side */}
                <div className="flex flex-col gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold uppercase tracking-tight"
                    >
                        Project
                    </motion.h2>

                    <div className="relative pl-12 md:pl-24 mt-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full h-[400px] relative z-10"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop"
                                alt="Project 01 Detail"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition duration-700"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-bold text-white/5 z-0 leading-none"
                        >
                            01
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-16 md:-bottom-24 -left-6 md:-left-12 w-48 h-64 z-20"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
                                alt="Project 01 Model"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="mt-24 pl-12 md:pl-24">
                        <p className="text-white/60 text-xs leading-relaxed max-w-xs text-justify">
                            Designed for all skin types, the formulations aim to nourish, protect, and enhance health. Committed to sustainability and inclusivity, the brand promotes radiant, confident beauty for everyone.
                        </p>
                    </div>
                </div>

                {/* Project 02 - Right Side */}
                <div className="flex flex-col gap-8 lg:mt-32">

                    <div className="relative flex justify-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="absolute right-32 top-0 transform -rotate-90 origin-top-right text-xs tracking-widest text-white/50"
                        >
                            SUNDAY
                        </motion.div>

                        <div className="flex flex-col items-end gap-12 w-4/5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="w-full h-[500px] relative z-10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                                    alt="Project 02 Fashion"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex justify-between items-end mt-12 w-full lg:w-4/5 ml-auto">
                        <div className="flex-1 pr-8">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4"
                            >
                                Project
                            </motion.h2>
                            <p className="text-white/60 text-xs leading-relaxed text-justify">
                                Fashion designed for real moments and real people. With universally flattering styles, high-quality pieces, the brand empowers creators, influencers, and trend-setters to showcase their unique style.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[5rem] md:text-[8rem] font-bold text-white leading-none"
                        >
                            02
                        </motion.div>
                    </div>

                </div>

            </div>

            {/* Expansion: Selected Works Gallery */}
            <div className="mt-48 pt-24 border-t border-white/10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.5em] text-white/40 mb-16 text-center"
                >
                    Selected Works 2023-2025
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {[
                        '1534528741775-53994a69daeb',
                        '1517487881594-2787fef5ebf7',
                        '1542038784456-1ea8e935640e',
                        '1516035069371-29a1b244cc32',
                        '1554080353-a576cf803bda',
                        '1544005313-94ddf0286df2',
                        '1506794778202-cad84cf45f1d',
                        '1531746020798-e6953c6e8e04'
                    ].map((id, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="aspect-square relative group overflow-hidden bg-white/5"
                        >
                            <Image
                                src={`https://images.unsplash.com/photo-${id}?q=80&w=600&auto=format&fit=crop`}
                                alt={`Gallery Work ${i + 1}`}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-[10px] uppercase tracking-widest font-bold border border-white/40 px-3 py-1">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
