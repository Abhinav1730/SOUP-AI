"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="container-custom">
                <SectionHeading
                    label="Selected work"
                    title="Proof ships louder than promises."
                    description="From luxury e-commerce to AI agents and research platforms — we build products that perform. Here's the latest."
                />
            </div>

            <motion.div
                variants={staggerContainerSlow}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-12 lg:mt-16 overflow-x-auto pb-4 scrollbar-hide"
            >
                <div className="flex gap-4 sm:gap-5 container-bleed min-w-max">
                    {PROJECTS.map((project) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeInUp}
                            className="group glass-card glass-card-interactive overflow-hidden block w-[min(85vw,380px)] sm:w-[400px] lg:w-[420px] shrink-0"
                        >
                            <div className="relative h-48 sm:h-52 bg-bg-secondary border-b border-white/[0.06] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} homepage`}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    sizes="(max-width: 640px) 85vw, 420px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="p-5 sm:p-6">
                                <p className="mono-label mb-2 normal-case text-[10px]">{project.category}</p>
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-[15px] sm:text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight size={14} className="text-text-dim shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                                </div>
                                <p className="text-[13px] text-text-muted leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <div className="container-custom mt-8">
                <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[13px] text-text-muted hover:text-text-primary transition-colors flex items-center gap-2"
                >
                    View all projects
                    <ArrowUpRight size={14} />
                </button>
            </div>
        </section>
    );
}
