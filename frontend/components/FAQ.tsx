"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/constants";
import { navigateTo } from "@/lib/navigation";
import { TYPO } from "@/lib/typography";

function FaqQaPanel() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <span className="mono-label text-[10px] normal-case">Questions · Answers</span>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">
                    {FAQ_ITEMS.length} topics
                </span>
            </div>

            <div className="divide-y divide-white/[0.06] max-h-[min(70vh,640px)] overflow-y-auto overscroll-contain">
                {FAQ_ITEMS.map((item, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <div key={item.question} className="px-4 sm:px-5">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                                aria-expanded={isOpen}
                            >
                                <span className="text-[12px] sm:text-[13px] font-medium text-text-primary group-hover:text-accent transition-colors min-w-0 leading-snug">
                                    <span className="text-text-dim mr-2 mono-label text-[10px] normal-case">
                                        Q{String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item.question}
                                </span>
                                <ChevronDown
                                    size={15}
                                    className={`text-text-dim shrink-0 transition-transform duration-200 ${
                                        isOpen ? "rotate-180 text-accent" : ""
                                    }`}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-4 pl-0 sm:pl-8">
                                            <p className="mono-label text-[10px] normal-case text-accent mb-2">
                                                A{String(i + 1).padStart(2, "0")}
                                            </p>
                                            <p
                                                className={`${TYPO.bodySm} text-text-muted leading-relaxed`}
                                            >
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <section id="faq" className="relative section-padding hero-grid overflow-x-clip">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar"
                >
                    <span className="mono-label whitespace-nowrap">[ FAQ ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        QUESTIONS · ANSWERS
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
                            Before you ask
                        </motion.p>

                        <motion.h1 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                            Common questions,{" "}
                            <span className="text-accent">straight answers.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                            Timelines, tech stack, revisions, and support — the things clients
                            ask before we start building.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                        >
                            <button
                                onClick={() => navigateTo("/contact")}
                                className="btn-primary w-full sm:w-auto justify-center"
                            >
                                Get in touch
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
                                <div className={TYPO.stat}>{FAQ_ITEMS.length}</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Topics answered
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>Free</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Discovery call · 30 min
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>24h</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Response on briefs
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="min-w-0 w-full">
                        <FaqQaPanel />
                    </div>
                </div>

                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`mt-12 xl:mt-16 max-w-4xl ${TYPO.hero}`}
                >
                    Still unsure?{" "}
                    <span className="text-accent">We&apos;re one call away.</span>
                </motion.h2>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <button onClick={() => navigateTo("/contact")} className="btn-secondary">
                        Book a discovery call
                        <ArrowRight size={14} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
