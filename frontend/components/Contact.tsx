"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/constants";
import { TYPO } from "@/lib/typography";

const CONTACT_CHANNELS = [
    {
        icon: Mail,
        label: "Email",
        value: CONTACT_EMAIL,
        href: CONTACT_MAILTO,
    },
    {
        icon: Clock,
        label: "Response",
        value: "Within 24 hours",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Remote — Global",
    },
] as const;

function EmailPanel({ compact = false }: { compact?: boolean }) {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable — mailto still works
        }
    };

    return (
        <div className="system-panel overflow-hidden w-full">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-success tracking-wider font-medium truncate">
                        OPEN FOR PROJECTS
                    </span>
                </div>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">
                    soupai.dev · contact
                </span>
            </div>

            <div className={compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}>
                <p className="mono-label text-[10px] normal-case mb-3">Direct line</p>
                <a
                    href={CONTACT_MAILTO}
                    className={`block font-bold text-text-primary hover:text-accent transition-colors break-all ${
                        compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl lg:text-4xl"
                    }`}
                >
                    {CONTACT_EMAIL}
                </a>
                <p className={`mt-4 max-w-xl ${TYPO.bodySm} text-text-muted`}>
                    Tell us what you&apos;re building — scope, timeline, and budget if you have one.
                    We reply within 24 hours.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a href={CONTACT_MAILTO} className="btn-primary justify-center">
                        Email us
                        <ArrowRight size={14} />
                    </a>
                    <button
                        type="button"
                        onClick={copyEmail}
                        className="btn-secondary btn-secondary-dot justify-center"
                    >
                        <Copy size={14} />
                        {copied ? "Copied" : "Copy email"}
                    </button>
                </div>
            </div>

            <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-3">
                {CONTACT_CHANNELS.slice(1).map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <item.icon size={14} className="text-text-dim shrink-0" />
                            <span className="text-[12px] text-text-secondary">{item.label}</span>
                        </div>
                        <span className="mono-label text-[10px] normal-case text-text-dim shrink-0">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Contact({ embedded = false }: { embedded?: boolean }) {
    if (embedded) {
        return (
            <section
                id="contact"
                className="section-padding relative overflow-x-clip section-alt border-t border-white/[0.06]"
            >
                <div className="container-custom">
                    <p className="mono-label mb-4">Contact</p>
                    <h2 className={`mb-8 max-w-2xl ${TYPO.section} font-bold`}>
                        Ready to start?{" "}
                        <span className="text-accent">Email us directly.</span>
                    </h2>
                    <EmailPanel compact />
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="relative section-padding hero-grid overflow-x-clip">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar"
                >
                    <span className="mono-label whitespace-nowrap">[ CONTACT ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        START A PROJECT
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="min-w-0"
                    >
                        <motion.p variants={fadeInUp} className="mono-label mb-4">
                            Get in touch
                        </motion.p>

                        <motion.h1 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero} font-bold`}>
                            Let&apos;s build something{" "}
                            <span className="text-accent">great.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                            No forms, no friction — just email us your brief and we&apos;ll get back
                            within 24 hours. Every engagement starts with a free 30-minute discovery
                            call.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-6 sm:gap-8"
                        >
                            <div>
                                <div className={TYPO.stat}>24h</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Typical response time
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>Free</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Discovery call · 30 min
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="min-w-0 w-full"
                    >
                        <EmailPanel />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
