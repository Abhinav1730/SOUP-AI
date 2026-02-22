"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { WHY_US_POINTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
    return (
        <section id="why-us" className="section-padding relative">
            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Why Us"
                    title="Built Different, By Design"
                    description="We don't just build products — we engineer competitive advantages."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-14 sm:mt-20 items-center">
                    {/* Left: Points */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="space-y-7 sm:space-y-10"
                    >
                        {WHY_US_POINTS.map((point, i) => (
                            <motion.div key={i} variants={slideInLeft} className="flex gap-4 sm:gap-5 group">
                                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-accent-indigo mt-0.5 group-hover:bg-accent-indigo/10 group-hover:border-accent-indigo/20 transition-all duration-300">
                                    <Check size={16} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="text-[15px] sm:text-[16px] font-semibold text-text-primary mb-2 sm:mb-3.5 tracking-[-0.01em]">
                                        {point.title}
                                    </h4>
                                    <p className="text-[13.5px] sm:text-[14.5px] text-text-muted leading-[1.75] sm:leading-[1.85] font-light">
                                        {point.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Innovation visual */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-accent-cyan/[0.06] blur-[80px] rounded-full scale-75" />

                            {/* Glass frame */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-bg-primary/30">
                                <Image
                                    src="/images/innovation.png"
                                    alt="Futuristic command center — global digital infrastructure"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto"
                                />
                                {/* Top shine line */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
