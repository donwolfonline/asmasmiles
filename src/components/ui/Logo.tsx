"use client";

import { motion } from "framer-motion";

export default function Logo() {
    return (
        <div className="flex items-center gap-3">
            {/* Minimalism Aperture Icon */}
            <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                className="w-8 h-8 relative"
            >
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full stroke-white stroke-[2.5]"
                >
                    <circle cx="50" cy="50" r="45" />
                    <path d="M50 5L75 95" className="opacity-40" />
                    <path d="M95 50L5 75" className="opacity-40" />
                    <path d="M50 95L25 5" className="opacity-40" />
                    <path d="M5 50L95 25" className="opacity-40" />
                    {/* Aperture blades */}
                    <path d="M50 5L85 35L75 65L50 95L25 65L15 35L50 5Z" fill="white" fillOpacity="0.1" />
                    <circle cx="50" cy="50" r="10" fill="white" />
                </svg>
            </motion.div>

            {/* Brand Typography */}
            <span className="text-xl font-bold tracking-[0.2em] uppercase">
                Asma<span className="font-cursive lowercase font-normal italic tracking-normal ml-0.5 text-white/80">Smiles</span>
            </span>
        </div>
    );
}
