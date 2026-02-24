"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
            {/* ===== LAYERED DEPTH BACKGROUND ===== */}

            {/* Background visual layer — workspace image, very subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/hero-visual.png"
                    alt=""
                    fill
                    className="object-cover opacity-[0.05]"
                    priority
                />
                <div className="absolute inset-0 bg-bg-primary/60" />
            </div>

            {/* Base grid */}
            <div className="absolute inset-0 line-grid" />

            {/* Radial glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_60%)] pointer-events-none" />

            {/* Floating gradient blobs - reduced blur for performance */}
            <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-accent-indigo/[0.05] blur-[80px] animate-float" />
            <div className="absolute top-[15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-accent-cyan/[0.03] blur-[80px] animate-float-reverse" />
            <div className="absolute bottom-[-15%] left-[25%] w-[600px] h-[600px] rounded-full bg-accent-purple/[0.04] blur-[80px] animate-float-slow" />

            {/* Rotating geometric ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-[800px] h-[800px] opacity-[0.025] animate-rotate-slow" viewBox="0 0 800 800" fill="none">
                    <circle cx="400" cy="400" r="360" stroke="url(#hg)" strokeWidth="0.5" strokeDasharray="6 14" />
                    <circle cx="400" cy="400" r="300" stroke="url(#hg)" strokeWidth="0.3" strokeDasharray="4 18" />
                    <defs>
                        <linearGradient id="hg" x1="0" y1="0" x2="800" y2="800">
                            <stop stopColor="#6366F1" />
                            <stop offset="1" stopColor="#22D3EE" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,transparent_0%,var(--color-bg-primary)_72%)]" />

            {/* ===== CONTENT ===== */}
            <div className="container-custom relative z-10 pt-24 pb-12">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
                        <div className="badge inline-flex">
                            <Sparkles size={13} className="text-accent-indigo" />
                            <span>Building Fast, Intelligent Digital Experiences</span>
                        </div>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] sm:leading-[1.18] tracking-tight"
                        style={{ wordSpacing: '0.04em' }}
                    >
                        We Build Fast Websites
                        <br className="hidden sm:block" />
                        <span className="gradient-text">&amp; Intelligent AI Systems</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 sm:mt-10 text-base sm:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto leading-[1.75] sm:leading-[1.85] font-light"
                    >
                        Modern websites, scalable SaaS platforms, and AI-powered automation
                        — engineered for startups and businesses that refuse to settle.
                    </motion.p>

                    {/* Hero visual — AI brain centered below text */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 sm:mt-12 flex justify-center"
                    >
                        <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
                            <div className="absolute inset-0 bg-accent-indigo/[0.08] blur-[80px] rounded-full scale-75" />
                            <Image
                                src="/images/hero-3d.png"
                                alt="AI-powered digital solutions"
                                width={380}
                                height={380}
                                className="relative z-10 w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                    >
                        <button onClick={() => scrollTo("#contact")} className="btn-primary w-full sm:w-auto">
                            <span>Get a Free Consultation</span>
                            <ArrowRight size={17} />
                        </button>
                        <button onClick={() => scrollTo("#projects")} className="btn-secondary w-full sm:w-auto">
                            <Play size={14} className="text-accent-indigo" />
                            <span>View Our Work</span>
                        </button>
                    </motion.div>

                    {/* Trust stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-4 sm:gap-y-5"
                    >
                        {["10+ Projects Delivered", "100% Client Satisfaction", "AI-First Approach"].map((text) => (
                            <div key={text} className="flex items-center gap-2.5 sm:gap-3.5 text-[12px] sm:text-[13.5px] text-text-dim tracking-wide">
                                <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
        </section>
    );
}
