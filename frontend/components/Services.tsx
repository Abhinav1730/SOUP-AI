"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navigateTo } from "@/lib/navigation";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { TYPO } from "@/lib/typography";
import ServicesStackPanel from "./ServicesStackPanel";

export default function Services() {
    return (
        <section id="services" className="relative section-padding hero-grid">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar"
                >
                    <span className="mono-label whitespace-nowrap">[ SERVICES ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        BUILD · OPERATE
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="min-w-0"
                    >
                        <motion.p variants={fadeInUp} className="mono-label mb-4">
                            What we do
                        </motion.p>

                        <motion.h2 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                            Two ways we{" "}
                            <span className="text-accent">accelerate</span> your business.
                        </motion.h2>

                        <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                            Build what the world sees. Operate at a speed they can&apos;t match — from
                            websites and SaaS to chatbots, automation, and integrations.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                        >
                            <button
                                onClick={() => navigateTo("/contact")}
                                className="btn-primary w-full sm:w-auto justify-center"
                            >
                                Book a call
                                <ArrowRight size={14} />
                            </button>
                            <button
                                onClick={() => navigateTo("/pricing")}
                                className="btn-secondary btn-secondary-dot w-full sm:w-auto justify-center"
                            >
                                See pricing
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8"
                        >
                            <div className="col-span-2 sm:col-span-1">
                                <div className={TYPO.stat}>
                                    Free
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Discovery call · 30 min
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>
                                    95<span className={TYPO.statSuffix}>+</span>
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Lighthouse · production stack
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>
                                    Custom
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    MVP builds scoped in discovery
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="min-w-0 w-full">
                        <ServicesStackPanel />
                    </div>
                </div>

                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`mt-12 xl:mt-16 max-w-4xl ${TYPO.hero}`}
                >
                    No vague scopes.{" "}
                    <span className="text-accent">Clear deliverables, clear pricing.</span>
                </motion.h2>
            </div>
        </section>
    );
}
