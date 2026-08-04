"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, BUILD_SERVICES, OPERATE_SERVICES } from "@/lib/constants";
import { navigateTo } from "@/lib/navigation";
import Logo from "./Logo";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const scrollY = window.scrollY;
        document.documentElement.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";
            document.body.style.overflow = "";
            window.scrollTo(0, scrollY);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNav = (href: string) => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        navigateTo(href);
    };

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-clip transition-all duration-300 ${
                    isScrolled
                        ? "bg-bg-primary/90 backdrop-blur-xl border-b border-white/[0.06]"
                        : "bg-transparent"
                }`}
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between h-16 lg:h-[72px] min-w-0">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <Logo variant="icon" priority className="sm:hidden" />
                            <Logo variant="full" priority className="hidden sm:block h-9" />
                        </Link>

                        <div className="hidden lg:flex items-center gap-8">
                            <div className="relative" ref={servicesRef}>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center gap-1 text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors"
                                >
                                    Services
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-3 w-[420px] system-panel p-1 shadow-2xl"
                                        >
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="p-4">
                                                    <p className="mono-label mb-3">Build</p>
                                                    {BUILD_SERVICES.map((s) => (
                                                        <button
                                                            key={s.title}
                                                            onClick={() => handleNav("/pricing")}
                                                            className="block w-full text-left py-2 text-[13px] text-text-muted hover:text-text-primary transition-colors"
                                                        >
                                                            {s.title}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="p-4 border-l border-white/[0.06]">
                                                    <p className="mono-label mb-3">Operate</p>
                                                    {OPERATE_SERVICES.map((s) => (
                                                        <button
                                                            key={s.title}
                                                            onClick={() => handleNav("/pricing")}
                                                            className="block w-full text-left py-2 text-[13px] text-text-muted hover:text-text-primary transition-colors"
                                                        >
                                                            {s.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNav(link.href)}
                                    className="text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        <div className="hidden lg:block">
                            <button onClick={() => handleNav("/contact")} className="btn-primary text-[13px] py-2.5 px-5">
                                Start a project
                            </button>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden shrink-0 w-9 h-9 flex items-center justify-center text-text-primary"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </nav>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-bg-primary lg:hidden pt-16 overflow-x-hidden overflow-y-auto overscroll-contain"
                    >
                        <div className="container-custom py-8 flex flex-col gap-1">
                            <div className="px-2 mb-6">
                                <Logo variant="full" className="h-12" />
                            </div>
                            <p className="mono-label mb-2 px-2">Services</p>
                            {[...BUILD_SERVICES, ...OPERATE_SERVICES].map((s) => (
                                <button
                                    key={s.title}
                                    onClick={() => handleNav("/pricing")}
                                    className="text-left px-2 py-3 text-[15px] text-text-muted hover:text-text-primary transition-colors"
                                >
                                    {s.title}
                                </button>
                            ))}
                            <div className="h-px bg-white/[0.06] my-4" />
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNav(link.href)}
                                    className="text-left px-2 py-3 text-[15px] text-text-muted hover:text-text-primary transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button onClick={() => handleNav("/contact")} className="btn-primary mt-6 w-full">
                                Start a project
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
