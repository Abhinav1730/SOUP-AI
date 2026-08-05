"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { DIFFERENTIATORS } from "@/lib/constants";
import { TYPO } from "@/lib/typography";

export default function Differentiators() {
    return (
        <section className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="w-full max-w-4xl"
                >
                    <p className="mono-label mb-4">Why SOUP AI</p>
                    <h2 className={`${TYPO.section} font-bold`}>
                        What makes us{" "}
                        <span className="text-accent font-bold">different.</span>
                    </h2>
                    <p className={`${TYPO.lead} mt-4 max-w-2xl font-medium text-text-primary`}>
                        Most agencies sell hours. We sell outcomes — fast delivery, honest pricing,
                        and code you can actually scale.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-12 lg:mt-16"
                >
                    {DIFFERENTIATORS.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className="glass-card p-6 sm:p-7 border-white/[0.08] hover:border-accent/30 transition-colors duration-300"
                        >
                            <span className="mono-label text-[10px] normal-case text-accent mb-4 block">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-text-primary mb-1 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-sm font-semibold text-accent mb-3">{item.tagline}</p>
                            <p className={`${TYPO.bodySm} text-text-muted leading-relaxed`}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
