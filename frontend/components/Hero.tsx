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

            {/* Subtle workspace visual background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/images/hero-visual.png"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.04]"
                />
            </div>

            {/* Base grid */}
            <div className="absolute inset-0 line-grid" />

            {/* Radial glow behind text — key depth element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_60%)] pointer-events-none" />

            {/* Floating gradient blobs — different layers for depth */}
            <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-accent-indigo/[0.05] blur-[160px] animate-float" />
            <div className="absolute top-[15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-accent-cyan/[0.03] blur-[140px] animate-float-reverse" />
            <div className="absolute bottom-[-15%] left-[25%] w-[600px] h-[600px] rounded-full bg-accent-purple/[0.04] blur-[150px] animate-float-slow" />

            {/* Rotating geometric ring — very subtle */}
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

            {/* ===== CONTENT — two-column on desktop ===== */}
            <div className="container-custom relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left: Text content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="badge inline-flex">
                                <Sparkles size={13} className="text-accent-indigo" />
                                <span>Building Fast, Intelligent Digital Experiences</span>
                            </div>
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
                        >
                            We Build Fast Websites
                            <br />
                            <span className="gradient-text">&amp; Intelligent AI Systems</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={fadeInUp}
                            className="mt-10 text-lg lg:text-xl text-text-muted max-w-xl leading-relaxed font-light"
                        >
                            Modern websites, scalable SaaS platforms, and AI-powered automation
                            — engineered for startups and businesses that refuse to settle.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5"
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
                            className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-5"
                        >
                            {["50+ Projects Delivered", "98% Client Satisfaction", "AI-First Approach"].map((text) => (
                                <div key={text} className="flex items-center gap-2.5 text-[13px] text-text-dim">
                                    <div className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Hero visual — AI brain */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden lg:flex items-center justify-center relative"
                    >
                        <div className="relative w-full max-w-[520px]">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-accent-indigo/[0.08] blur-[80px] rounded-full scale-75" />
                            <Image
                                src="/images/hero-3d.png"
                                alt="AI-powered digital solutions"
                                width={520}
                                height={520}
                                className="relative z-10 w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
        </section>
    );
}
