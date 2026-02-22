"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Heart } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons: Record<string, React.ReactNode> = {
    twitter: <Twitter size={15} />,
    linkedin: <Linkedin size={15} />,
    github: <Github size={15} />,
    instagram: <Instagram size={15} />,
};

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="relative border-t border-white/[0.04] bg-bg-secondary/40">
            <div className="container-custom py-24">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-16"
                >
                    {/* Brand */}
                    <motion.div variants={fadeInUp} className="md:col-span-5">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-cyan flex items-center justify-center font-bold text-[12px] text-white">S</div>
                            <span className="text-[15px] font-semibold tracking-tight text-text-primary">
                                SOUP <span className="gradient-text">AI</span>
                            </span>
                        </div>
                        <p className="text-[13px] text-text-muted leading-relaxed max-w-sm mb-6 font-light">
                            Building fast, intelligent digital experiences for startups and
                            businesses worldwide. Bold ideas into polished products.
                        </p>
                        <div className="flex items-center gap-2">
                            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-text-dim hover:text-text-primary hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
                                    aria-label={key}
                                >
                                    {socialIcons[key]}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div variants={fadeInUp} className="md:col-span-3">
                        <h4 className="text-[11px] font-semibold text-text-dim uppercase tracking-[0.15em] mb-5">Navigation</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <button onClick={() => scrollTo(link.href)} className="text-[13px] text-text-muted hover:text-text-primary transition-colors duration-300 font-light">
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={fadeInUp} className="md:col-span-4">
                        <h4 className="text-[11px] font-semibold text-text-dim uppercase tracking-[0.15em] mb-5">Get in Touch</h4>
                        <ul className="space-y-3 text-[13px] text-text-muted font-light">
                            <li><a href="mailto:tech.soup.ai@gmail.com" className="hover:text-text-primary transition-colors">tech.soup.ai@gmail.com</a></li>
                            <li>Remote — Working Globally</li>
                            <li>Mon–Sat, 9AM–7PM IST</li>
                        </ul>
                        <button onClick={() => scrollTo("#contact")} className="mt-5 btn-secondary text-[12px] py-2 px-5 rounded-lg">
                            Start a Project
                        </button>
                    </motion.div>
                </motion.div>

                {/* Bottom */}
                <div className="mt-20 pt-10 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-text-dim flex items-center gap-1.5">
                        &copy; {new Date().getFullYear()} SOUP AI. Crafted with
                        <Heart size={10} className="text-accent-pink fill-accent-pink" /> for ambitious teams.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-text-dim hover:text-text-primary hover:border-white/[0.12] transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
