"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Code2,
    LayoutList,
    Mail,
    MessageCircle,
    Monitor,
    PenTool,
    ShieldCheck,
    UserCircle,
    Wrench,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { GLOBAL_ABOUT, INDIA_ABOUT } from "@/lib/constants";
import { useUserCountry } from "@/hooks/useUserCountry";
import SectionHeading from "./SectionHeading";

const indiaIconMap = {
    LayoutList: LayoutList,
    PenTool: PenTool,
    Code2: Code2,
    Brain: Brain,
    UserCircle: UserCircle,
    Monitor: Monitor,
    Mail: Mail,
    MessageCircle: MessageCircle,
} as const;

function AboutSkeleton() {
    return (
        <section id="about" className="section-padding section-alt relative">
            <div className="container-custom">
                <div className="h-8 w-32 bg-white/5 rounded mb-6 animate-pulse" />
                <div className="h-12 w-full max-w-3xl bg-white/5 rounded mb-4 animate-pulse" />
                <div className="h-24 w-full max-w-4xl bg-white/5 rounded animate-pulse" />
            </div>
        </section>
    );
}

function GlobalAbout() {
    return (
        <div className="w-full">
            <SectionHeading
                label="About SOUP AI"
                title="Building fast, intelligent digital experiences."
                description={GLOBAL_ABOUT.tagline}
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-10 lg:mt-14 space-y-6 max-w-4xl"
            >
                {GLOBAL_ABOUT.paragraphs.map((paragraph) => (
                    <motion.p
                        key={paragraph}
                        variants={fadeInUp}
                        className="text-[15px] sm:text-base text-text-muted leading-relaxed"
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 lg:mt-16"
            >
                {GLOBAL_ABOUT.highlights.map((item) => (
                    <motion.div key={item.title} variants={fadeInUp} className="glass-card p-6 sm:p-7">
                        <h3 className="text-[15px] font-semibold text-text-primary mb-2">{item.title}</h3>
                        <p className="text-[13px] text-text-muted leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 text-lg sm:text-xl font-medium text-text-primary leading-relaxed"
            >
                {GLOBAL_ABOUT.closing}
            </motion.p>
        </div>
    );
}

function IndiaAbout() {
    return (
        <div className="w-full">
            <SectionHeading
                label="About SOUP AI"
                title="Smart solutions. Real impact."
                description="Built for Indian businesses ready to grow in the digital world."
            />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-10 lg:mt-14 space-y-6 max-w-4xl"
            >
                {INDIA_ABOUT.paragraphs.map((paragraph) => (
                    <motion.p
                        key={paragraph}
                        variants={fadeInUp}
                        className="text-[15px] sm:text-base text-text-muted leading-relaxed"
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-12 lg:mt-16"
            >
                <p className="mono-label mb-6">Services we provide</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {INDIA_ABOUT.services.map((service) => {
                        const Icon = indiaIconMap[service.icon as keyof typeof indiaIconMap];
                        return (
                            <div key={service.title} className="glass-card p-5 sm:p-6">
                                <div className="icon-box w-10 h-10 mb-4">
                                    <Icon size={18} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[14px] font-semibold text-text-primary mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] text-text-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4"
            >
                <motion.div variants={fadeInUp} className="glass-card p-6 sm:p-7 border-accent/20 bg-accent/[0.03]">
                    <div className="flex items-start gap-4">
                        <div className="icon-box w-10 h-10 shrink-0 text-accent">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                                {INDIA_ABOUT.maintenance.title}
                            </h3>
                            <p className="text-[13px] text-text-secondary leading-relaxed">
                                {INDIA_ABOUT.maintenance.freeNote}
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="glass-card p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                        <div className="icon-box w-10 h-10 shrink-0">
                            <Wrench size={18} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-text-primary mb-2">
                                After 75 days
                            </h3>
                            <p className="text-[13px] text-text-muted leading-relaxed">
                                {INDIA_ABOUT.maintenance.paidNote}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-12 lg:mt-16"
            >
                <p className="mono-label mb-6">Automation for marketing</p>
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
                                        <h3 className="text-[14px] font-semibold text-text-primary mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[13px] text-text-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 flex flex-wrap gap-3"
            >
                {INDIA_ABOUT.trustBadges.map((badge) => (
                    <span key={badge} className="tech-tag text-[11px]">
                        {badge}
                    </span>
                ))}
            </motion.div>

            <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 text-lg sm:text-xl font-medium text-text-primary leading-relaxed"
            >
                We handle the tech, so you can focus on what matters most —{" "}
                <span className="text-accent">growing your business.</span>
            </motion.p>
        </div>
    );
}

export default function About() {
    const { isIndia, isLoading } = useUserCountry();

    if (isLoading) {
        return <AboutSkeleton />;
    }

    return (
        <section id="about" className="section-padding section-alt relative">
            <div className="container-custom">
                {isIndia ? <IndiaAbout /> : <GlobalAbout />}
            </div>
        </section>
    );
}
