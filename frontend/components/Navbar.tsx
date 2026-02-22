"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolled(window.scrollY > 20);
            }, 100); // Debounce scroll events
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const scrollTo = (href: string) => {
        setIsMobileMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? "bg-[rgba(6,8,15,0.6)] backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
                        : "bg-transparent"
                    }`}
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex items-center gap-2.5 group"
                        >
                            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-cyan flex items-center justify-center font-bold text-[13px] text-white overflow-hidden">
                                S
                            </div>
                            <span className="text-[16px] font-semibold tracking-tight text-text-primary">
                                SOUP <span className="gradient-text">AI</span>
                            </span>
                        </a>

                        {/* Desktop Nav — uppercase tracking-wide, gap-10 */}
                        <div className="hidden lg:flex items-center gap-10">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-[12px] uppercase tracking-[0.08em] font-medium text-text-muted hover:text-text-primary transition-colors duration-300 relative group py-1"
                                >
                                    {link.label}
                                    {/* Animated underline */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-accent-indigo/60 to-accent-cyan/40 group-hover:w-full transition-all duration-300 ease-out" />
                                </button>
                            ))}
                        </div>

                        {/* CTA — more padding, glow on hover */}
                        <div className="hidden lg:block">
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="px-6 py-2.5 text-[12px] uppercase tracking-[0.06em] font-semibold rounded-xl bg-gradient-to-r from-accent-indigo to-accent-cyan text-white border border-white/10 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-white/20 transition-all duration-300 hover:-translate-y-[1px]"
                            >
                                Start a Project
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-text-primary rounded-lg hover:bg-white/[0.04] transition-colors"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <X size={22} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                                        <Menu size={22} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 bg-bg-primary/[0.98] backdrop-blur-3xl lg:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ delay: i * 0.04, duration: 0.25 }}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-lg font-medium text-text-muted hover:text-text-primary transition-colors"
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.25 }}
                                onClick={() => scrollTo("#contact")}
                                className="mt-4 btn-primary"
                            >
                                <span>Start a Project</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
