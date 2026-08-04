"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { DIFFERENTIATORS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Differentiators() {
    return (
        <section className="section-padding relative">
            <div className="container-custom">
                <SectionHeading
                    label="Why SOUP AI"
                    title="What makes us different."
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-12 lg:mt-16"
                >
                    {DIFFERENTIATORS.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            className="glass-card p-6 sm:p-7"
                        >
                            <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="text-[13px] text-text-muted leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
