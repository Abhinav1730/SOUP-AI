"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Process() {
    return (
        <section id="process" className="section-padding section-alt relative">
            <div className="container-custom">
                <SectionHeading
                    label="How we work"
                    title="From brief to shipped — faster than you think."
                    description="Every engagement starts with clarity. Then we move — with modern workflows that compress weeks into days."
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-16"
                >
                    {PROCESS_STEPS.map((step) => (
                        <motion.div
                            key={step.step}
                            variants={fadeInUp}
                            className="glass-card p-6 sm:p-7 relative"
                        >
                            <span className="mono-label text-text-dim">{step.step}</span>
                            <h4 className="text-[15px] font-semibold text-text-primary mt-3 mb-3">
                                {step.title}
                            </h4>
                            <p className="text-[13px] text-text-muted leading-relaxed mb-4">
                                {step.description}
                            </p>
                            <span className="mono-label text-success normal-case">
                                {step.timeline}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
