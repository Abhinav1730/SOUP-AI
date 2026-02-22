"use client";

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
        <section id="projects" className="section-padding section-alt relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 section-divider" />

            {/* Background visual — device mockups as ambient layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/images/projects-devices.png"
                    alt=""
                    className="w-full max-w-[800px] h-auto opacity-[0.05]"
                />
            </div>

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Portfolio"
                    title="Featured Projects"
                    description="Recent work where we helped businesses transform their digital presence."
                />

                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-14 sm:mt-20"
                >
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={fadeInUp}
                            className="group glass-card rounded-2xl overflow-hidden glass-card-interactive"
                        >
                            {/* Thumbnail area */}
                            <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden bg-bg-secondary">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                                <div className="absolute inset-0 line-grid opacity-40" />

                                {/* Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white/[0.06] group-hover:text-white/[0.12] group-hover:scale-110 transition-all duration-700 ease-out">
                                        {projectIcons[i]}
                                    </div>
                                </div>

                                {/* Hover effects */}
                                <div className="absolute inset-0 bg-gradient-to-t from-accent-indigo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.015] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 lg:p-12">
                                <div className="flex items-start justify-between mb-4 sm:mb-6 gap-4">
                                    <h3 className="text-[15px] sm:text-[17px] font-semibold text-text-primary group-hover:text-accent-indigo transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center group-hover:border-accent-indigo/20 group-hover:bg-accent-indigo/5 transition-all duration-300">
                                        <ArrowUpRight size={13} className="text-text-dim group-hover:text-accent-indigo transition-colors duration-300" />
                                    </div>
                                </div>

                                <p className="text-[13.5px] sm:text-[14.5px] text-text-muted leading-[1.8] sm:leading-[1.9] font-light mb-5 sm:mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tech-tag">{tag}</span>
                                    ))}
                                </div>

                                {/* View Case Study */}
                                <div className="mt-7 overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
                                    <span className="text-[13px] text-accent-indigo font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
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
