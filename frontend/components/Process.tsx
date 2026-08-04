"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import { navigateTo } from "@/lib/navigation";
import { TYPO } from "@/lib/typography";

function ProcessPipelinePanel() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-success tracking-wider font-medium truncate">
                        SYSTEM ONLINE
                    </span>
                </div>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">
                    soupai.dev · process
                </span>
            </div>

            <div className="p-4 sm:p-5">
                <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                    Workflow pipeline
                </p>
                <div className="space-y-2">
                    {PROCESS_STEPS.map((step) => (
                        <div
                            key={step.step}
                            className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between py-3 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                        >
                            <div className="min-w-0">
                                <span className="text-[12px] text-text-secondary">
                                    <span className="text-text-dim mr-2">{step.step}</span>
                                    {step.title}
                                </span>
                                <p className="text-[11px] text-text-dim mt-1 pl-6 sm:pl-0 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            <span className="mono-label text-[10px] normal-case text-success shrink-0 pl-6 sm:pl-0">
                                {step.timeline}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mb-3">
                        Output
                    </p>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-mono">
                        {"> Brief → Build → Launch → Iterate"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function ProcessStepCard({
    step,
}: {
    step: (typeof PROCESS_STEPS)[number];
}) {
    return (
        <motion.div variants={fadeInUp} className="system-panel overflow-hidden h-full flex flex-col">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <span className="mono-label text-[10px] normal-case">
                    {step.step} · {step.title.toUpperCase()}
                </span>
                <span className="mono-label text-[10px] normal-case text-success">
                    {step.timeline}
                </span>
            </div>
            <div className="p-5 sm:p-6 flex-1">
                <p className={`${TYPO.bodySm} text-text-secondary leading-relaxed`}>
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Process() {
    return (
        <section id="process" className="relative section-padding hero-grid overflow-x-clip">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar"
                >
                    <span className="mono-label whitespace-nowrap">[ PROCESS ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        DISCOVERY · BUILD · LAUNCH
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="min-w-0"
                    >
                        <motion.p variants={fadeInUp} className="mono-label mb-4">
                            How we work
                        </motion.p>

                        <motion.h1 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                            From brief to shipped —{" "}
                            <span className="text-accent">faster than you think.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                            Every engagement starts with clarity. Then we move — with modern
                            workflows that compress weeks into days.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                        >
                            <button
                                onClick={() => navigateTo("/contact")}
                                className="btn-primary w-full sm:w-auto justify-center"
                            >
                                Start a project
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
                                <div className={TYPO.stat}>Free</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Discovery call · 30 min
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>
                                    4<span className={TYPO.statSuffix}> steps</span>
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Clear path to launch
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>
                                    2–6<span className={TYPO.statSuffix}> wks</span>
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Typical build window
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="min-w-0 w-full">
                        <ProcessPipelinePanel />
                    </div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16"
                >
                    {PROCESS_STEPS.map((step) => (
                        <ProcessStepCard key={step.step} step={step} />
                    ))}
                </motion.div>

                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`mt-12 xl:mt-16 max-w-4xl ${TYPO.hero}`}
                >
                    No surprises.{" "}
                    <span className="text-accent">Just a clear path from idea to live.</span>
                </motion.h2>
            </div>
        </section>
    );
}
