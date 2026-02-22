"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Bot, Mic, Utensils } from "lucide-react";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

const projectIcons = [
    <Utensils key="u" size={36} strokeWidth={1} />,
    <BarChart3 key="b" size={36} strokeWidth={1} />,
    <Bot key="bo" size={36} strokeWidth={1} />,
    <Mic key="m" size={36} strokeWidth={1} />,
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding section-alt relative">
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Portfolio"
                    title="Featured Projects"
                    description="Recent work where we helped businesses transform their digital presence."
                />

                {/* Device mockup showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16 mb-4"
                >
                    <div className="relative w-full max-w-[600px]">
                        <div className="absolute inset-0 bg-accent-cyan/[0.04] blur-[80px] rounded-full scale-75" />
                        <Image
                            src="/images/projects-devices.png"
                            alt="Our work across platforms — web, mobile, and tablet"
                            width={600}
                            height={600}
                            className="relative z-10 w-full h-auto opacity-85"
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
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={fadeInUp}
                            className="group glass-card rounded-2xl overflow-hidden glass-card-interactive"
                        >
                            {/* Thumbnail area — hover zoom */}
                            <div className="relative h-52 sm:h-56 overflow-hidden bg-bg-secondary">
                                {/* Subtle gradient bg */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                                <div className="absolute inset-0 line-grid opacity-40" />

                                {/* Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white/[0.06] group-hover:text-white/[0.12] group-hover:scale-110 transition-all duration-700 ease-out">
                                        {projectIcons[i]}
                                    </div>
                                </div>

                                {/* Hover overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-accent-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Hover sweep */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.015] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                            </div>

                            {/* Content — p-8 */}
                            <div className="p-10">
                                <div className="flex items-start justify-between mb-4 gap-4">
                                    <h3 className="text-[17px] font-semibold text-text-primary group-hover:text-accent-indigo transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center group-hover:border-accent-indigo/20 group-hover:bg-accent-indigo/5 transition-all duration-300">
                                        <ArrowUpRight size={13} className="text-text-dim group-hover:text-accent-indigo transition-colors duration-300" />
                                    </div>
                                </div>

                                <p className="text-[14px] text-text-muted leading-relaxed font-light mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tech-tag">{tag}</span>
                                    ))}
                                </div>

                                {/* View Case Study — slides up on hover */}
                                <div className="mt-6 overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
                                    <span className="text-[13px] text-accent-indigo font-medium flex items-center gap-1.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        View Case Study <ArrowUpRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    );
}
