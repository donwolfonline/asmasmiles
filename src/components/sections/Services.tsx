"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        category: "Social Media Mentions",
        items: [
            { name: "Single Story Mention (Instagram/TikTok)", price: "$30 - $75" },
            { name: "Product Placement in Story", price: "$50 - $100" },
        ]
    },
    {
        category: "Photo Content",
        items: [
            { name: "Single High-quality Photo", price: "$30 - $75" },
            { name: "Photo Series (2-3 Photos)", price: "$75 - $150" },
            { name: "Simple Lifestyle Photo (Product in Use)", price: "$50" }
        ]
    },
    {
        category: "Video Content",
        items: [
            { name: "Short-form Video (Reels/TikToks - 15-30 seconds)", price: "$50 - $100" },
            { name: "Mid-length Video (Up to 1 minute)", price: "$100 - $200" },
            { name: "Basic Product Video Review (1-2 minutes)", price: "$150" }
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left side: Images and Header */}
                <div className="lg:col-span-5 flex flex-col gap-6 font-bold uppercase tracking-tight">
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[250px]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop"
                                alt="Service 1"
                                fill
                                className="object-cover grayscale"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative h-[250px]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop"
                                alt="Service 2"
                                fill
                                className="object-cover grayscale"
                            />
                        </motion.div>
                    </div>

                    <div className="mt-8 relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold uppercase leading-none"
                        >
                            Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-cursive text-5xl md:text-6xl text-white/80 absolute -bottom-8 md:-bottom-12 right-0 md:right-12"
                        >
                            Price list
                        </motion.p>
                    </div>
                </div>

                {/* Right side: Pricing list */}
                <div className="lg:col-span-7 lg:pl-16 flex flex-col justify-center mt-16 md:mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                        {services.map((serviceGroup, i) => (
                            <motion.div
                                key={serviceGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-4 text-xs"
                            >
                                <h3 className="font-bold text-sm mb-2">{serviceGroup.category}</h3>
                                {serviceGroup.items.map((item, j) => (
                                    <div key={j} className="flex flex-col text-white/60">
                                        <span className="font-semibold text-white/80 mb-1">{item.name}:</span>
                                        <span>{item.price}</span>
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Expansion: How it Works / Workflow */}
            <div className="mt-48 pt-24 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold uppercase mb-8">The Process</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            Creativity is a dialogue. My workflow is designed to ensure that your vision is translated into high-impact visuals through a structured yet flexible approach.
                        </p>
                        <div className="flex flex-col gap-8">
                            {[
                                { step: "01", title: "Curation & Mood", desc: "We define the aesthetic direction, colors, and emotional tone through discovery sessions." },
                                { step: "02", title: "Production", desc: "High-intensity execution using professional lighting and state-of-the-art camera systems." },
                                { step: "03", title: "Refinement", desc: "Precise color grading and retouching to ensure every frame meets the brand&apos;s standards." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 border-b border-white/5 pb-6">
                                    <span className="text-white/20 font-bold text-2xl">{item.step}</span>
                                    <div>
                                        <h4 className="font-bold text-sm mb-1 uppercase tracking-wider">{item.title}</h4>
                                        <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] relative"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                            alt="Working process"
                            fill
                            className="object-cover grayscale"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
