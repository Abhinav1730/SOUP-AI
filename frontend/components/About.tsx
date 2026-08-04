"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Code2,
    LayoutList,
    Mail,
    MessageCircle,
    Monitor,
    PenTool,
    UserCircle,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GLOBAL_ABOUT, INDIA_ABOUT } from "@/lib/constants";
import { navigateTo } from "@/lib/navigation";
import { TYPO } from "@/lib/typography";
import { useUserCountry } from "@/hooks/useUserCountry";

const indiaIconMap = {
    LayoutList,
    PenTool,
    Code2,
    Brain,
    UserCircle,
    Monitor,
    Mail,
    MessageCircle,
} as const;

function AboutSkeleton() {
    return (
        <section id="about" className="relative section-padding hero-grid">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="manifesto-bar mt-2 mb-8">
                    <div className="h-3 w-40 bg-white/5 rounded animate-pulse" />
                </div>
                <div className="h-20 w-full max-w-3xl bg-white/5 rounded mb-6 animate-pulse" />
                <div className="h-32 w-full max-w-4xl bg-white/5 rounded animate-pulse" />
            </div>
        </section>
    );
}

function AboutHeroShell({ children }: { children: React.ReactNode }) {
    return (
        <section id="about" className="relative section-padding hero-grid">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />
            <div className="container-custom relative z-10">{children}</div>
        </section>
    );
}

function AboutManifestoBar({ tag }: { tag: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="manifesto-bar"
        >
            <span className="mono-label whitespace-nowrap">[ 02 · ABOUT ]</span>
            <span className="mono-label whitespace-nowrap hidden sm:inline">{tag}</span>
        </motion.div>
    );
}

function AboutSystemPanel({
    items,
    footerLabel,
    footerText,
}: {
    items: { id: string; label: string }[];
    footerLabel: string;
    footerText: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite]" />
                    <span className="text-[11px] text-success tracking-wider font-medium">
                        SYSTEM ONLINE
                    </span>
                </div>
                <span className="text-[10px] text-text-dim">soupai.dev · live</span>
            </div>

            <div className="p-4 sm:p-5">
                <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                    Capability stack
                </p>
                <div className="space-y-2">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between py-2.5 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                        >
                            <span className="text-[12px] text-text-secondary">
                                <span className="text-text-dim mr-2">{item.id}</span>
                                {item.label}
                            </span>
                            <span className="status-active">READY</span>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mb-3">
                        {footerLabel}
                    </p>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-mono">
                        {footerText}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function GlobalAbout() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    const panelItems = GLOBAL_ABOUT.highlights.map((item, i) => ({
        id: String(i + 1).padStart(2, "0"),
        label: item.title,
    }));

    return (
        <AboutHeroShell>
            <AboutManifestoBar tag="AI-NATIVE STUDIO · GLOBAL" />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.h2 variants={fadeInUp} className={TYPO.hero}>
                        Building fast, intelligent{" "}
                        <span className="text-accent">digital experiences.</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                        {GLOBAL_ABOUT.tagline}
                    </motion.p>

                    {GLOBAL_ABOUT.paragraphs.map((paragraph) => (
                        <motion.p
                            key={paragraph}
                            variants={fadeInUp}
                            className={`mt-5 max-w-2xl ${TYPO.body}`}
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <button onClick={() => navigateTo("/contact")} className="btn-primary">
                            Start a project
                            <ArrowRight size={14} />
                        </button>
                        <button
                            onClick={() => scrollTo("#services")}
                            className="btn-secondary btn-secondary-dot"
                        >
                            See services
                            <ArrowRight size={14} />
                        </button>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className={`mt-12 pt-8 border-t border-white/[0.08] max-w-2xl ${TYPO.lead} text-text-primary font-semibold`}
                    >
                        {GLOBAL_ABOUT.closing}
                    </motion.p>
                </motion.div>

                <AboutSystemPanel
                    items={panelItems}
                    footerLabel="Live output"
                    footerText="> websites · saas · ai systems · shipped"
                />
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 xl:mt-20"
            >
                {GLOBAL_ABOUT.highlights.map((item) => (
                    <motion.div key={item.title} variants={fadeInUp} className="glass-card p-6 sm:p-7">
                        <h3 className={`${TYPO.card} mb-2`}>
                            {item.title}
                        </h3>
                        <p className={TYPO.bodySm}>
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </AboutHeroShell>
    );
}

function IndiaAbout() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    const panelItems = INDIA_ABOUT.services.map((service, i) => ({
        id: String(i + 1).padStart(2, "0"),
        label: service.title,
    }));

    return (
        <AboutHeroShell>
            <AboutManifestoBar tag="DIGITAL SOLUTIONS · INDIA" />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.h2 variants={fadeInUp} className={TYPO.hero}>
                        Smart solutions.{" "}
                        <span className="text-accent">Real impact.</span>
                    </motion.h2>

                    <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                        Built for businesses ready to grow in the digital world.
                    </motion.p>

                    {INDIA_ABOUT.paragraphs.map((paragraph) => (
                        <motion.p
                            key={paragraph}
                            variants={fadeInUp}
                            className={`mt-5 max-w-2xl ${TYPO.body}`}
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <button onClick={() => navigateTo("/contact")} className="btn-primary">
                            Start a project
                            <ArrowRight size={14} />
                        </button>
                        <button
                            onClick={() => scrollTo("#services")}
                            className="btn-secondary btn-secondary-dot"
                        >
                            See pricing
                            <ArrowRight size={14} />
                        </button>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap gap-3"
                    >
                        {INDIA_ABOUT.trustBadges.map((badge) => (
                            <span key={badge} className="tech-tag text-[11px]">
                                {badge}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                <AboutSystemPanel
                    items={panelItems}
                    footerLabel="Live output"
                    footerText="> smart websites · systems · ai support · deployed"
                />
            </div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-12 lg:mt-16"
            >
                <div className="manifesto-bar mb-8">
                    <span className="mono-label whitespace-nowrap">Automation for marketing</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {INDIA_ABOUT.marketing.map((item) => {
                        const Icon = indiaIconMap[item.icon as keyof typeof indiaIconMap];
                        return (
                            <div key={item.title} className="glass-card p-6 sm:p-7">
                                <div className="flex items-start gap-4">
                                    <div className="icon-box w-10 h-10 shrink-0">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <h3 className={`${TYPO.card} mb-2`}>
                                            {item.title}
                                        </h3>
                                        <p className={TYPO.bodySm}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`mt-12 max-w-3xl ${TYPO.lead} text-text-primary font-semibold`}
            >
                We handle the tech, so you can focus on what matters most —{" "}
                <span className="text-accent">growing your business.</span>
            </motion.p>
        </AboutHeroShell>
    );
}

export default function About() {
    const { isIndia, isLoading } = useUserCountry();

    if (isLoading) {
        return <AboutSkeleton />;
    }

    return isIndia ? <IndiaAbout /> : <GlobalAbout />;
}
