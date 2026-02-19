"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const strengths = [
    {
        title: "Adaptability",
        desc: "I thrive in evolving environments, quickly adjusting to trends.",
    },
    {
        title: "Creative Storytelling",
        desc: "I weave narratives that captivate and engage, making them special.",
    },
    {
        title: "Community Focused",
        desc: "I build meaningful relationships with my followers.",
    },
    {
        title: "Tech-Savvy",
        desc: "I use the latest tools and trends to produce high-quality work.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
            {/* Header section with top borders like the reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 border-t border-white/10 pt-8">
                <div className="flex flex-col">
                    <span className="text-xs tracking-widest uppercase mb-4 text-white/50">AsmaSmiles</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold uppercase"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-cursive text-4xl text-white/80 mt-2 ml-12"
                    >
                        AsmaSmiles
                    </motion.p>
                </div>
                <div className="hidden lg:block">
                    <span className="text-xs tracking-widest uppercase text-white/50">Photographer</span>
                </div>
                <div className="flex items-center justify-between lg:justify-end">
                    <span className="text-xs tracking-widest uppercase text-white/50">2025</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                {/* Left Column - Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-4 flex flex-col gap-12"
                >
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Me</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            I am a passionate photographer and content creator specializing in capturing authentic moments.
                            My work revolves around blending natural light with artistic composition to tell compelling visual stories.
                            With over 5 years of experience in the creative industry, I have developed a keen eye for detail.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Portfolio</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            This portfolio is a curated selection of my best work across various genres including portrait, abstract, and lifestyle photography.
                            Each project represents a unique journey of exploration and creativity.
                        </p>
                    </div>
                </motion.div>

                {/* Middle Column - Images */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="col-span-2 relative h-[300px] mb-4"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop"
                            alt="Photography process"
                            fill
                            className="object-cover grayscale"
                        />
                    </motion.div>
                    <div className="col-span-1 border border-white/10 hidden md:block"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-span-2 md:col-span-1 relative h-[250px]"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
                            alt="Camera gear"
                            fill
                            className="object-cover grayscale"
                        />
                    </motion.div>
                </div>

                {/* Right Column - Checklist */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-4 bg-[#0a0a0a] p-8 md:p-10 !pt-2 border border-white/5"
                >
                    <div className="flex border-b border-white/10 pb-4 mb-8">
                        <div className="flex-1"></div>
                        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">My Strengths</h3>
                    </div>

                    <div className="flex flex-col gap-6">
                        {strengths.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                viewport={{ once: true }}
                                className="flex gap-4"
                            >
                                <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-white/80" />
                                <div>
                                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>

            {/* Expansion: Journey and Vision */}
            <div className="mt-32 pt-24 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold uppercase mb-8">My Journey</h3>
                    <div className="space-y-6 text-white/60 text-sm leading-relaxed">
                        <p>
                            It all started with an old film camera I found in my grandfather&apos;s attic. The way light hit the dust in that room became my first obsession. Since then, I&apos;ve traveled across 15 countries, capturing the raw, unscripted beauty of humanity.
                        </p>
                        <p>
                            My transition into professional content creation was a natural evolution. I realized that
                            photographs aren&apos;t just still images—they are the building blocks of brands and personal legacies.
                        </p>
                        <p>
                            Today, I combine technical precision with an emotional narrative to help my clients see themselves, and their work, in a new light.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white text-black p-12 flex flex-col justify-center"
                >
                    <h3 className="text-3xl font-bold uppercase mb-6 italic font-cursive">The Vision</h3>
                    <p className="text-xl leading-snug font-medium italic">
                        &quot;To stop time not just for the sake of the record, but to preserve the feeling of the soul in that very second.&quot;
                    </p>
                    <div className="mt-8 pt-8 border-t border-black/10">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold">AsmaSmiles — Est. 2019</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
