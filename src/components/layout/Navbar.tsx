"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b gap-4 border-white/10 uppercase text-xs tracking-widest">
                <div className="flex-1">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 justify-center text-white/70">
                    Photographer & Creator
                </div>

                <div className="flex-1 flex justify-end items-center gap-8">
                    <span className="hidden md:inline-block">2025</span>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1 hover:text-white/70 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <Menu size={24} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center text-4xl uppercase tracking-widest gap-8"
                    >
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-white/50 transition-colors">About</Link>
                        <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white/50 transition-colors">Projects</Link>
                        <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-white/50 transition-colors">Services</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white/50 transition-colors">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
