"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding section-alt relative">
            <div className="container-custom">
                <SectionHeading
                    label="FAQ"
                    title="Common questions."
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="mt-12 lg:mt-16 w-full"
                >
                    {FAQ_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.question}
                            variants={fadeInUp}
                            className="border-b border-white/[0.06] last:border-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                            >
                                <span className="text-[14px] sm:text-[15px] font-medium text-text-primary group-hover:text-text-secondary transition-colors">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    size={16}
                                    className={`text-text-dim shrink-0 transition-transform duration-200 ${
                                        openIndex === i ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[13px] text-text-muted leading-relaxed pb-5 pr-8">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <button
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-[13px] text-text-muted hover:text-text-primary transition-colors flex items-center gap-2"
                    >
                        Still have questions? Get in touch →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
