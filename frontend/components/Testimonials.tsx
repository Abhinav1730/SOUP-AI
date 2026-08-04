"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

    return (
        <section id="testimonials" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <SectionHeading
                    label="What clients say"
                    title="Results speak. So do they."
                />

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="mt-12 lg:mt-16"
                >
                    <div className="glass-card p-8 sm:p-12 lg:p-16 min-h-[280px] flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.25 }}
                            >
                                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-text-secondary leading-relaxed font-light">
                                    &ldquo;{TESTIMONIALS[current].content}&rdquo;
                                </p>
                                <div className="flex items-center gap-4 mt-8">
                                    <div className="w-10 h-10 rounded-md bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[12px] font-semibold text-text-muted">
                                        {TESTIMONIALS[current].avatar}
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-medium text-text-primary">
                                            {TESTIMONIALS[current].name}
                                        </div>
                                        <div className="text-[13px] text-text-dim">
                                            {TESTIMONIALS[current].role}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/[0.06]">
                            <div className="flex items-center gap-2">
                                {TESTIMONIALS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            i === current ? "bg-accent" : "bg-white/20"
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={prev}
                                    className="w-9 h-9 rounded-md border border-white/[0.08] flex items-center justify-center text-text-dim hover:text-text-primary hover:border-white/[0.15] transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-9 h-9 rounded-md border border-white/[0.08] flex items-center justify-center text-text-dim hover:text-text-primary hover:border-white/[0.15] transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
