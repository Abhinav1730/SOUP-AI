"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PRICING_PACKAGES } from "@/lib/constants";
import { navigateTo } from "@/lib/navigation";
import { TYPO } from "@/lib/typography";
import ServicesStackPanel from "./ServicesStackPanel";

function PackagesSummaryPanel() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-success tracking-wider font-medium truncate">
                        SYSTEM ONLINE
                    </span>
                </div>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">soupai.dev · pricing</span>
            </div>

            <div className="p-4 sm:p-5">
                <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                    Package tiers
                </p>
                <div className="space-y-2">
                    {PRICING_PACKAGES.map((pkg, index) => (
                        <div
                            key={pkg.name}
                            className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between py-3 px-3 rounded-md border ${
                                pkg.featured
                                    ? "bg-accent/[0.04] border-accent/20"
                                    : "bg-white/[0.02] border-white/[0.04]"
                            }`}
                        >
                            <div className="min-w-0">
                                <span className="text-[12px] text-text-secondary">
                                    <span className="text-text-dim mr-2">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {pkg.name}
                                </span>
                                <p className="text-[11px] text-text-dim mt-0.5 pl-6 sm:pl-0 sm:mt-0 sm:hidden">
                                    {pkg.tagline}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 pl-6 sm:pl-0">
                                <span className="mono-label text-[10px] normal-case text-text-dim hidden sm:inline">
                                    {pkg.delivery}
                                </span>
                                <span
                                    className={`mono-label text-[10px] normal-case ${
                                        pkg.featured ? "text-accent" : "text-accent/80"
                                    }`}
                                >
                                    {pkg.price}
                                    {pkg.price !== "Custom" ? " USD" : ""}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mb-3">
                        Policy
                    </p>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-mono">
                        {"> Free 30-min discovery · USD pricing · Custom scope available"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function PackageCard({
    pkg,
    index,
}: {
    pkg: (typeof PRICING_PACKAGES)[number];
    index: number;
}) {
    const scrollToContact = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            variants={fadeInUp}
            className={`system-panel overflow-hidden flex flex-col h-full ${
                pkg.featured ? "ring-1 ring-accent/25" : ""
            }`}
        >
            <div
                className={`flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06] ${
                    pkg.featured ? "bg-accent/[0.03]" : ""
                }`}
            >
                <span className="mono-label text-[10px] normal-case">
                    {String(index + 1).padStart(2, "0")} · {pkg.name.toUpperCase()}
                </span>
                {pkg.featured && (
                    <span className="text-[10px] text-accent tracking-wider font-medium uppercase">
                        Best value
                    </span>
                )}
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className={TYPO.stat}>{pkg.price}</span>
                    {pkg.price !== "Custom" && (
                        <span className="text-[11px] sm:text-[12px] text-text-dim">USD</span>
                    )}
                </div>
                {pkg.save && (
                    <p className="text-[11px] sm:text-[12px] text-accent mt-1">Save {pkg.save} vs à la carte</p>
                )}
                <p className={`${TYPO.bodySm} mt-3 mb-6`}>{pkg.tagline}</p>

                <ul className="space-y-3 flex-1 mb-6">
                    {pkg.features.map((feature) => (
                        <li
                            key={feature}
                            className={`flex items-start gap-2.5 ${TYPO.bodySm} text-text-secondary`}
                        >
                            <Check size={14} className="text-accent shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <p className="mono-label text-text-dim mb-4 normal-case text-[10px] sm:text-[11px]">
                    Delivery · {pkg.delivery}
                </p>

                <button
                    onClick={scrollToContact}
                    className={pkg.featured ? "btn-primary w-full" : "btn-secondary w-full"}
                >
                    {pkg.price === "Custom" ? "Book discovery call" : "Get started"}
                    <ArrowRight size={14} />
                </button>
            </div>
        </motion.div>
    );
}

export default function Pricing() {
    const scrollToPackages = () => {
        document.querySelector("#pricing-packages")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[85vh] flex flex-col pt-20 pb-12 hero-grid overflow-x-clip">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

                <div className="container-custom relative z-10 flex-1 flex flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="manifesto-bar mt-8"
                    >
                        <span className="mono-label whitespace-nowrap">[ PRICING ]</span>
                        <span className="mono-label whitespace-nowrap hidden sm:inline">
                            PACKAGES · À LA CARTE
                        </span>
                    </motion.div>

                    <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="min-w-0"
                        >
                            <motion.p variants={fadeInUp} className="mono-label mb-4">
                                Transparent pricing
                            </motion.p>

                            <motion.h1 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                                Packages or à la carte —{" "}
                                <span className="text-accent">your call.</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                                Packages move faster and cost less than buying everything separately.
                                Pick what fits your stage — every engagement starts with a free
                                discovery call.
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
                                    onClick={scrollToPackages}
                                    className="btn-secondary btn-secondary-dot w-full sm:w-auto justify-center"
                                >
                                    View packages
                                    <ArrowRight size={14} />
                                </button>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8"
                            >
                                <div className="col-span-2 sm:col-span-1">
                                    <div className={TYPO.stat}>Free</div>
                                    <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                        Discovery call · 30 min
                                    </div>
                                </div>
                                <div>
                                    <div className={TYPO.stat}>
                                        $1k<span className={TYPO.statSuffix}>+</span>
                                    </div>
                                    <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                        Launch tier · from
                                    </div>
                                </div>
                                <div>
                                    <div className={TYPO.stat}>Custom</div>
                                    <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                        Enterprise · scoped in discovery
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="min-w-0 w-full xl:mt-4">
                            <PackagesSummaryPanel />
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section
                id="pricing-packages"
                className="relative section-padding section-alt overflow-x-clip"
            >
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="manifesto-bar"
                    >
                        <span className="mono-label whitespace-nowrap">[ PACKAGES ]</span>
                        <span className="mono-label whitespace-nowrap hidden sm:inline">
                            LAUNCH · GROWTH · TRANSFORMATION
                        </span>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mono-label mb-4 mt-4"
                    >
                        Bundled for speed
                    </motion.p>

                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className={`max-w-3xl ${TYPO.section}`}
                    >
                        Three tiers.{" "}
                        <span className="text-accent">One clear path forward.</span>
                    </motion.h2>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 lg:mt-16"
                    >
                        {PRICING_PACKAGES.map((pkg, index) => (
                            <PackageCard key={pkg.name} pkg={pkg} index={index} />
                        ))}
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`mt-8 ${TYPO.bodySm} text-text-dim`}
                    >
                        All prices shown in USD. Custom scope available for enterprise projects.
                        Every package starts with a free 30-minute discovery call.
                    </motion.p>
                </div>
            </section>

            {/* À la carte */}
            <section
                id="pricing-ala-carte"
                className="relative section-padding hero-grid overflow-x-clip"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="manifesto-bar"
                    >
                        <span className="mono-label whitespace-nowrap">[ À LA CARTE ]</span>
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
                                Individual services
                            </motion.p>

                            <motion.h2 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                                Need one thing done{" "}
                                <span className="text-accent">right?</span>
                            </motion.h2>

                            <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                                Pick exactly what you need — websites, SaaS, chatbots, or automation.
                                Line-item pricing with no hidden fees.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                            >
                                <button
                                    onClick={() => navigateTo("/contact")}
                                    className="btn-primary w-full sm:w-auto justify-center"
                                >
                                    Get a quote
                                    <ArrowRight size={14} />
                                </button>
                                <button
                                    onClick={scrollToPackages}
                                    className="btn-secondary btn-secondary-dot w-full sm:w-auto justify-center"
                                >
                                    Compare packages
                                    <ArrowRight size={14} />
                                </button>
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
        </>
    );
}
