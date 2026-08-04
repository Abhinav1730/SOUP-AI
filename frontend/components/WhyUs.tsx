"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { COMPARISON_CARDS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding relative">
            <div className="container-custom">
                <SectionHeading
                    label="The problem with 'AI agencies'"
                    title="Everyone says AI. Nobody shows the difference."
                    description="Three ways studios talk about 'AI-powered' work. Only one of them can prove it."
                />

                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 lg:mt-16"
                >
                    {COMPARISON_CARDS.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={fadeInUp}
                            className={`glass-card p-6 sm:p-8 ${
                                card.highlight
                                    ? "border-success/30 bg-success/[0.03]"
                                    : ""
                            }`}
                        >
                            <p className="mono-label mb-4">{card.type}</p>
                            <h3 className="text-lg font-semibold text-text-primary mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[13px] text-text-muted leading-relaxed mb-6">
                                {card.description}
                            </p>
                            <p
                                className={`text-[12px] font-medium ${
                                    card.highlight ? "text-success" : "text-text-dim"
                                }`}
                            >
                                {card.flaw}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-10 text-center text-[14px] text-text-muted"
                >
                    No decks about &lsquo;AI transformation&rsquo;. Just workflows you can inspect.
                </motion.p>
            </div>
        </section>
    );
}
