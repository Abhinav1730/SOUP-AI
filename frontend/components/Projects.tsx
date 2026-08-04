"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Carousel3D from "@/components/Carousel3D";
import { navigateTo } from "@/lib/navigation";
import { PROJECTS } from "@/lib/constants";
import { TYPO } from "@/lib/typography";
import SectionHeading from "./SectionHeading";

const PROJECTS_HOLD_MS = 5000;

const PROJECT_RADIUS = { sm: 235, md: 300, lg: 400 };

type Project = (typeof PROJECTS)[number];

function ProjectCard({
    project,
    isActive = false,
}: {
    project: Project;
    isActive?: boolean;
}) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group glass-card glass-card-interactive overflow-hidden block w-[min(78vw,300px)] sm:w-[360px] lg:w-[400px] transition-all duration-500 ${
                isActive
                    ? "border-accent/25 shadow-[0_0_48px_rgba(200,245,90,0.14)] opacity-100 scale-100"
                    : "opacity-45 scale-[0.86] sm:blur-[0.5px] pointer-events-none"
            }`}
            tabIndex={isActive ? 0 : -1}
            aria-hidden={!isActive}
        >
            <div className="relative h-44 sm:h-48 bg-bg-secondary border-b border-white/[0.06] overflow-hidden">
                <Image
                    src={project.image}
                    alt={`${project.title} homepage`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 85vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-60" />
            </div>

            <div className="p-5 sm:p-6">
                <p className="mono-label mb-2 normal-case text-[10px]">{project.category}</p>
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="heading-card group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <ArrowUpRight
                        size={14}
                        className="text-text-dim shrink-0 mt-0.5 group-hover:text-accent transition-colors"
                    />
                </div>
                <p className="text-body-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tech-tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}

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

            <div className="container-custom mt-12 lg:mt-16">
                <Carousel3D
                    items={PROJECTS}
                    holdMs={PROJECTS_HOLD_MS}
                    sceneClassName="projects-carousel-scene"
                    radiusBreakpoints={PROJECT_RADIUS}
                    getKey={(project) => project.title}
                    getLabel={(project) => project.title}
                    renderCard={(project, _index, isActive) => (
                        <ProjectCard project={project} isActive={isActive} />
                    )}
                />

                <div className="mt-10 lg:mt-12 flex flex-col items-center gap-8 px-2">
                    <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-10 w-full max-w-md sm:max-w-none">
                        <div className="text-center">
                            <p className={`${TYPO.stat} gradient-text-strong`}>
                                20+
                            </p>
                            <p className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                Projects
                            </p>
                        </div>

                        <div className="text-center">
                            <p className={`${TYPO.stat} gradient-text-strong leading-tight`}>
                                Complete
                            </p>
                            <p className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                Client satisfaction
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigateTo("/contact")}
                        className="btn-primary w-full sm:w-auto justify-center"
                    >
                        View all projects
                        <ArrowUpRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}
