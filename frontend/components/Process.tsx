"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket, HeadphonesIcon } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const stepIcons = [
    <Search key="s" size={18} strokeWidth={1.5} />,
    <Palette key="p" size={18} strokeWidth={1.5} />,
    <Code2 key="c" size={18} strokeWidth={1.5} />,
    <Rocket key="r" size={18} strokeWidth={1.5} />,
    <HeadphonesIcon key="h" size={18} strokeWidth={1.5} />,
];

export default function Process() {
    return (
        <section id="process" className="section-padding relative overflow-hidden">
            {/* Background visual — very subtle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/images/process-visual.png"
                    alt=""
                    className="w-full max-w-[900px] h-auto opacity-[0.08] blur-[2px]"
                />
            </div>

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Process"
                    title="How We Work"
                    description="A streamlined process from concept to launch — and beyond."
                />

                {/* Desktop: Horizontal */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="hidden lg:block mt-24"
                >
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute top-7 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                        <div className="grid grid-cols-5 gap-8">
                            {PROCESS_STEPS.map((step, i) => (
                                <motion.div key={i} variants={fadeInUp} className="relative text-center group">
                                    {/* Circle */}
                                    <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-bg-secondary border border-white/[0.06] flex items-center justify-center mb-10 group-hover:border-accent-indigo/25 group-hover:bg-accent-indigo/5 transition-all duration-500">
                                        <div className="text-text-dim group-hover:text-accent-indigo transition-colors duration-500">
                                            {stepIcons[i]}
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-bg-primary border border-white/[0.08] flex items-center justify-center">
                                            <span className="text-[9px] font-bold text-text-dim">{step.step}</span>
                                        </div>
                                    </div>

                                    <h4 className="text-[14px] font-semibold text-text-primary mb-3">
                                        {step.title}
                                    </h4>
                                    <p className="text-[12.5px] text-text-muted leading-[1.8] font-light px-2">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Mobile: Vertical */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="lg:hidden mt-16"
                >
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-7 w-[1px] bg-gradient-to-b from-white/[0.06] via-white/[0.04] to-transparent" />
                        <div className="space-y-12">
                            {PROCESS_STEPS.map((step, i) => (
                                <motion.div key={i} variants={fadeInUp} className="relative flex gap-6">
                                    <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-bg-secondary border border-white/[0.06] flex items-center justify-center">
                                        <div className="text-text-dim">{stepIcons[i]}</div>
                                        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-bg-primary border border-white/[0.08] flex items-center justify-center">
                                            <span className="text-[9px] font-bold text-text-dim">{step.step}</span>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-[15px] font-semibold text-text-primary mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-[13.5px] text-text-muted leading-[1.8] font-light">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
