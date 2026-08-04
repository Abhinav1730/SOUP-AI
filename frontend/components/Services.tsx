"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navigateTo } from "@/lib/navigation";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { BUILD_SERVICES, OPERATE_SERVICES } from "@/lib/constants";
import { TYPO } from "@/lib/typography";

function ServiceStackRows({
    services,
    startIndex,
}: {
    services: readonly {
        title: string;
        items: readonly { name: string; price: string }[];
    }[];
    startIndex: number;
}) {
    let counter = startIndex;

    return (
        <div className="space-y-4">
            {services.map((service) => (
                <div key={service.title}>
                    <p className="text-[11px] text-text-dim uppercase tracking-wider mb-2 px-1">
                        {service.title}
                    </p>
                    <div className="space-y-2">
                        {service.items.map((item) => {
                            const id = String(counter).padStart(2, "0");
                            counter += 1;
                            return (
                                <div
                                    key={item.name}
                                    className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between py-3 sm:py-2.5 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                                >
                                    <span className="text-[11px] sm:text-[12px] text-text-secondary min-w-0 leading-snug">
                                        <span className="text-text-dim mr-2">{id}</span>
                                        {item.name}
                                    </span>
                                    <span className="mono-label text-[10px] normal-case whitespace-nowrap text-accent self-start sm:self-auto shrink-0">
                                        {item.price}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ServicesStackPanel() {
    const buildItemCount = BUILD_SERVICES.reduce((sum, s) => sum + s.items.length, 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-success tracking-wider font-medium truncate">
                        SYSTEM ONLINE
                    </span>
                </div>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">soupai.dev · services</span>
            </div>

            <div className="p-4 sm:p-5">
                <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                    Build — what the world sees
                </p>
                <p className="text-[12px] text-text-muted mb-4 -mt-2">
                    Websites, SaaS — AI-native delivery.
                </p>
                <ServiceStackRows services={BUILD_SERVICES} startIndex={1} />

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                        Operate — how you actually work
                    </p>
                    <p className="text-[12px] text-text-muted mb-4 -mt-2">
                        AI chatbots, automation, integrations.
                    </p>
                    <ServiceStackRows
                        services={OPERATE_SERVICES}
                        startIndex={buildItemCount + 1}
                    />
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mb-3">
                        Stack
                    </p>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-mono">
                        {"> Next.js · TypeScript · Vercel · 95+ Lighthouse"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section id="services" className="relative section-padding hero-grid">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar"
                >
                    <span className="mono-label whitespace-nowrap">[ SERVICES ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        BUILD · OPERATE
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="min-w-0"
                    >
                        <motion.p variants={fadeInUp} className="mono-label mb-4">
                            What we do
                        </motion.p>

                        <motion.h2 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                            Two ways we{" "}
                            <span className="text-accent">accelerate</span> your business.
                        </motion.h2>

                        <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                            Build what the world sees. Operate at a speed they can&apos;t match — from
                            websites and SaaS to chatbots, automation, and integrations.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                        >
                            <button
                                onClick={() => navigateTo("/contact")}
                                className="btn-primary w-full sm:w-auto justify-center"
                            >
                                Book a call
                                <ArrowRight size={14} />
                            </button>
                            <button
                                onClick={() => navigateTo("/pricing")}
                                className="btn-secondary btn-secondary-dot w-full sm:w-auto justify-center"
                            >
                                See pricing
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8"
                        >
                            <div className="col-span-2 sm:col-span-1">
                                <div className={TYPO.stat}>
                                    Free
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Discovery call · 30 min
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>
                                    95<span className={TYPO.statSuffix}>+</span>
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Lighthouse · production stack
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>
                                    Custom
                                </div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    MVP builds scoped in discovery
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="min-w-0 w-full">
                        <ServicesStackPanel />
                    </div>
                </div>

                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`mt-12 xl:mt-16 max-w-4xl ${TYPO.hero}`}
                >
                    No vague scopes.{" "}
                    <span className="text-accent">Clear deliverables, clear pricing.</span>
                </motion.h2>
            </div>
        </section>
    );
}
