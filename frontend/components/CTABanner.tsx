"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTABanner() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-16 sm:py-20 relative">
            <div className="container-custom relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="relative glass-card p-14 sm:p-20 lg:p-24 rounded-3xl text-center overflow-hidden">
                        {/* Background depth */}
                        <div className="absolute inset-0 line-grid opacity-30" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-accent-indigo/[0.06] blur-[100px]" />

                        {/* Rocket visual — right side accent */}
                        <div className="absolute -right-8 -bottom-8 w-[280px] h-[280px] opacity-20 pointer-events-none hidden lg:block">
                            <img
                                src="/images/cta-launch.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="relative z-10">
                            <motion.h2
                                variants={fadeInUp}
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary mb-5 leading-[1.15]"
                            >
                                Ready to Build Your Next
                                <br />
                                <span className="gradient-text">Digital Breakthrough?</span>
                            </motion.h2>

                            <motion.p
                                variants={fadeInUp}
                                className="text-text-muted text-base lg:text-lg max-w-lg mx-auto mb-12 font-light leading-relaxed"
                            >
                                Let&apos;s talk about your project. No commitments, no hidden costs —
                                just an honest conversation about what&apos;s possible.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button onClick={() => scrollTo("#contact")} className="btn-primary w-full sm:w-auto">
                                    <span>Get Your Free Consultation</span>
                                    <ArrowRight size={17} />
                                </button>
                                <button onClick={() => scrollTo("#projects")} className="btn-secondary w-full sm:w-auto">
                                    See Our Portfolio
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
