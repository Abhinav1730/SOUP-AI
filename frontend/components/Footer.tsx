"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { NAV_LINKS, BUILD_SERVICES, OPERATE_SERVICES, CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/constants";
import { navigateTo } from "@/lib/navigation";
import Logo from "./Logo";

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const handleNav = (href: string) => navigateTo(href);

    return (
        <footer className="border-t border-white/[0.06] bg-bg-secondary">
            <div className="container-custom py-16 lg:py-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12"
                >
                    <motion.div variants={fadeInUp} className="md:col-span-4">
                        <Logo variant="full" className="h-14" />
                        <p className="text-[13px] text-text-muted leading-relaxed max-w-xs mt-4">
                            AI-native studio building fast websites, scalable SaaS, and intelligent automation for startups worldwide.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="md:col-span-2">
                        <h4 className="mono-label mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <button onClick={() => handleNav(link.href)} className="text-[13px] text-text-muted hover:text-text-primary transition-colors">
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="md:col-span-3">
                        <h4 className="mono-label mb-4">Services</h4>
                        <ul className="space-y-3">
                            {[...BUILD_SERVICES, ...OPERATE_SERVICES].map((s) => (
                                <li key={s.title}>
                                    <button onClick={() => handleNav("/pricing")} className="text-[13px] text-text-muted hover:text-text-primary transition-colors">
                                        {s.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="md:col-span-3">
                        <h4 className="mono-label mb-4">Contact</h4>
                        <ul className="space-y-3 text-[13px] text-text-muted">
                            <li>
                                <a href={CONTACT_MAILTO} className="hover:text-text-primary transition-colors">
                                    {CONTACT_EMAIL}
                                </a>
                            </li>
                            <li>Remote — Working globally</li>
                            <li>Mon–Sat, 9AM–7PM IST</li>
                        </ul>
                        <a href={CONTACT_MAILTO} className="btn-primary mt-5 text-[13px] py-2.5 px-5 inline-flex">
                            Email us
                        </a>
                    </motion.div>
                </motion.div>

                <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[12px] text-text-dim">
                        &copy; {new Date().getFullYear()} SOUP AI. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-8 h-8 rounded-md border border-white/[0.08] flex items-center justify-center text-text-dim hover:text-text-primary hover:border-white/[0.15] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
