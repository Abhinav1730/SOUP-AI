"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navigateTo } from "@/lib/navigation";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CAPABILITY_STACK, HERO_STATS } from "@/lib/constants";
import { TYPO } from "@/lib/typography";

const TERMINAL_LINES = [
    "> exploring 40 brand directions",
    "> building Next.js scaffold...",
    "> deploy: production · 0 errors",
    "> 4 services · 1 team",
];

function StatusBadge({ status }: { status: "ACTIVE" | "READY" | "RENDERING" }) {
    const cls =
        status === "ACTIVE"
            ? "status-active"
            : status === "RENDERING"
              ? "status-rendering"
              : "status-ready";
    return <span className={cls}>{status}</span>;
}

export default function Hero() {
    const [lineIndex, setLineIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const line = TERMINAL_LINES[lineIndex];
        let charIndex = 0;
        setDisplayedText("");

        const typeInterval = setInterval(() => {
            if (charIndex <= line.length) {
                setDisplayedText(line.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setLineIndex((prev) => (prev + 1) % TERMINAL_LINES.length);
                }, 2000);
            }
        }, 35);

        return () => clearInterval(typeInterval);
    }, [lineIndex]);

    return (
        <section className="relative min-h-screen flex flex-col pt-20 pb-12 hero-grid">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10 flex-1 flex flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar mt-8"
                >
                    <span className="mono-label whitespace-nowrap">[ 01 · MANIFESTO ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        AI-NATIVE STUDIO · GLOBAL
                    </span>
                </motion.div>

                <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                    {/* Left: copy */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className={`${TYPO.hero} max-w-5xl`}
                        >
                            We build websites that{" "}
                            <span className="text-accent">perform</span>,
                            <br />
                            products that{" "}
                            <span className="text-accent">scale</span>,
                            <br />
                            and AI systems that{" "}
                            <span className="text-accent">never sleep.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className={`mt-6 ${TYPO.lead} max-w-2xl`}
                        >
                            Every great brand needs a pulse.{" "}
                            <span className="text-text-primary font-semibold">
                                We give yours a <span className="text-accent">brain.</span>
                            </span>
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            <button onClick={() => navigateTo("/contact")} className="btn-primary">
                                Start a project
                                <ArrowRight size={14} />
                            </button>
                            <button
                                onClick={() => navigateTo("/pricing")}
                                className="btn-secondary btn-secondary-dot"
                            >
                                See pricing
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-10"
                        >
                            {HERO_STATS.map((stat) => (
                                <div key={stat.label}>
                                    <div className={TYPO.stat}>
                                        {stat.value}
                                        <span className={TYPO.statSuffix}>{stat.suffix}</span>
                                    </div>
                                    <div className="mono-label mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: system panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="system-panel overflow-hidden w-full xl:mt-4"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite]" />
                                <span className="text-[11px] text-success tracking-wider font-medium">SYSTEM ONLINE</span>
                            </div>
                            <span className="text-[10px] text-text-dim">soupai.dev · live</span>
                        </div>

                        <div className="p-4 sm:p-5">
                            <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                                Capability stack
                            </p>
                            <div className="space-y-2">
                                {CAPABILITY_STACK.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between py-2.5 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                                    >
                                        <span className="text-[12px] text-text-secondary">
                                            <span className="text-text-dim mr-2">{item.id}</span>
                                            {item.label}
                                        </span>
                                        <StatusBadge status={item.status} />
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 pt-4 border-t border-white/[0.06]">
                                <p className="text-[10px] text-text-dim uppercase tracking-wider mb-3">
                                    Live output
                                </p>
                                <div className="text-[12px] text-success min-h-[60px] font-mono">
                                    {displayedText}
                                    <span className="inline-block w-[6px] h-[14px] bg-success/70 ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
                                </div>
                                <button
                                    onClick={() => navigateTo("/pricing")}
                                    className="mt-4 text-[12px] text-text-dim hover:text-accent transition-colors flex items-center gap-1"
                                >
                                    see all →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 xl:mt-14 flex items-center justify-between w-full"
                >
                    <span className="mono-label normal-case">Scroll to explore</span>
                    <span className="mono-label normal-case hidden sm:inline">N 28.61° · E 77.20° ↓</span>
                </motion.div>
            </div>
        </section>
    );
}
