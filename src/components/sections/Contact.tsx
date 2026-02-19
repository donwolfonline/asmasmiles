"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10 min-h-[60vh] flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left side: Let's Work Together */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-[6rem] lg:text-[8rem] font-bold uppercase leading-[0.85] tracking-tighter"
                    >
                        LET&apos;S <span className="font-cursive lowercase font-normal italic pr-8 text-white/80 text-5xl md:text-7xl lg:text-8xl">Work</span><br />
                        TOGETHER
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-2 mt-12 text-sm text-white/60 tracking-wider"
                    >
                        <p>www.asmasmiles.com</p>
                        <p>+123-346-7890</p>
                        <p>hello@asmasmiles.com</p>
                    </motion.div>
                </div>

                {/* Right side: Socials */}
                <div className="flex lg:justify-end gap-6 text-white/50">
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <Instagram size={20} />
                    </motion.a>
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <Twitter size={20} />
                    </motion.a>
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                        href="mailto:hello@asmasmiles.com"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                        <Mail size={20} />
                    </motion.a>
                </div>

            </div>

            {/* Expansion: FAQ Section */}
            <div className="mt-48 pt-24 border-t border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-3xl font-bold uppercase mb-16 text-center">Frequently Asked Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed">
                        <div>
                            <h4 className="font-bold mb-3 uppercase tracking-wider">What is your turnaround time?</h4>
                            <p className="text-white/50">Typically, you will receive the initial selection within 48 hours. Final retouched deliverables are sent within 7-10 business days.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3 uppercase tracking-wider">Do you travel for shoots?</h4>
                            <p className="text-white/50">Absolutely. I am available for international commissions. Travel and accommodation fees are billed separately from my session rates.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3 uppercase tracking-wider">What gear do you use?</h4>
                            <p className="text-white/50">I utilize high-resolution mirrorless systems (Sony Alpha) along with a wide range of G-Master prime lenses to ensure maximum clarity and bokeh.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-3 uppercase tracking-wider">Can I book a custom package?</h4>
                            <p className="text-white/50">Yes. If none of the listed services fit your exact needs, we can curate a custom production plan specifically for your project.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
