"use client";

import Image from "next/image";
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
        <section id="services" className="section-padding section-alt relative">
            {/* Section top divider */}
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Services"
                    title="What We Build"
                    description="End-to-end digital solutions that combine stunning design with intelligent technology."
                />

                {/* Decorative visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16 mb-4"
                >
                    <div className="relative w-full max-w-[380px]">
                        <div className="absolute inset-0 bg-accent-indigo/[0.06] blur-[60px] rounded-full scale-90" />
                        <Image
                            src="/images/services-visual.png"
                            alt="Digital solutions we build"
                            width={380}
                            height={380}
                            className="relative z-10 w-full h-auto opacity-80"
                        />
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={fadeInUp}
                            className="group glass-card glass-card-interactive p-10 rounded-2xl"
                        >
                            {/* Icon */}
                            <div className="icon-box icon-box-glow mb-8">
                                {iconMap[service.icon]}
                            </div>

                            {/* Title — mb-4 as spec'd */}
                            <h3 className="text-[18px] font-semibold text-text-primary mb-5 tracking-[-0.01em]">
                                {service.title}
                            </h3>

                            {/* Description — text-sm, leading-relaxed, text-muted */}
                            <p className="text-[14px] text-text-muted leading-relaxed font-light mb-8">
                                {service.description}
                            </p>

                            {/* Learn more */}
                            <div className="flex items-center gap-2 text-[13px] text-text-dim group-hover:text-accent-indigo transition-colors duration-300 pt-2">
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
