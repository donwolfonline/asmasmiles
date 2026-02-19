"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen pt-24 pb-12 px-6 lg:px-12 flex flex-col md:flex-row relative">
            {/* Left side Image */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-5/12 h-[60vh] md:h-[80vh] relative mb-12 md:mb-0"
            >
                <Image
                    src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1200&auto=format&fit=crop"
                    alt="Portrait of photographer"
                    fill
                    className="object-cover object-top grayscale"
                    priority
                />
            </motion.div>

            {/* Right side content */}
            <div className="w-full md:w-7/12 md:pl-12 lg:pl-24 flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-none tracking-tighter uppercase mb-4">
                        PORTFOLIO
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    <h2 className="font-cursive text-5xl md:text-7xl lg:text-8xl text-white/90 md:-mt-8 md:ml-24">
                        Photographer
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-24 max-w-sm text-sm text-white/70 leading-relaxed md:ml-auto"
                >
                    <p>
                        &quot;The desire to create is one of the deepest yearnings of the human soul. Capturing moments that tell a story without words.&quot;
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-16 md:mt-32 md:ml-auto"
                >
                    <Link href="/about" className="inline-block bg-white text-black font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white/80 transition-colors">
                        Explore Now
                    </Link>
                </motion.div>
            </div>

            {/* Thin decorative line at bottom */}
            <div className="absolute bottom-0 left-6 right-6 h-px bg-white/10 hidden md:block"></div>
        </section>
    );
}
