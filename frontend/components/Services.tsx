"use client";

import { motion } from "framer-motion";
import { Globe, Layers, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe size={24} strokeWidth={1.5} />,
    Layers: <Layers size={24} strokeWidth={1.5} />,
    MessageSquare: <MessageSquare size={24} strokeWidth={1.5} />,
    Zap: <Zap size={24} strokeWidth={1.5} />,
};

export default function Services() {
    return (
        <section id="services" className="section-padding section-alt relative overflow-hidden">
            {/* Section top divider */}
            <div className="absolute top-0 left-0 right-0 section-divider" />

            {/* Background visual — absolute positioned, true background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/images/services-visual.png"
                    alt=""
                    className="w-full max-w-[700px] h-auto opacity-[0.06]"
                />
            </div>

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Services"
                    title="What We Build"
                    description="End-to-end digital solutions that combine stunning design with intelligent technology."
                />

                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-14 sm:mt-20"
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={fadeInUp}
                            className="group glass-card glass-card-interactive p-6 sm:p-8 lg:p-12 rounded-2xl"
                        >
                            {/* Icon */}
                            <div className="icon-box icon-box-glow mb-5 sm:mb-8">
                                {iconMap[service.icon]}
                            </div>

                            {/* Title */}
                            <h3 className="text-[16px] sm:text-[18px] font-semibold text-text-primary mb-3 sm:mb-5 tracking-[-0.01em]">
                                {service.title}
                            </h3>

                            {/* Description — generous line-height for readability */}
                            <p className="text-[13.5px] sm:text-[14.5px] text-text-muted leading-[1.8] sm:leading-[1.9] font-light mb-5 sm:mb-8">
                                {service.description}
                            </p>

                            {/* Learn more */}
                            <div className="flex items-center gap-2.5 text-[13px] text-text-dim group-hover:text-accent-indigo transition-colors duration-300 pt-2">
                                <span>Learn more</span>
                                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Section bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    );
}
