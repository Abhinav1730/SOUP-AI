"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BillingModeToggle from "@/components/BillingModeToggle";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { navigateTo } from "@/lib/navigation";
import { BILLING_MODE_LABELS, getPricingFootnote, type BillingMode } from "@/lib/pricing";
import { TYPO } from "@/lib/typography";
import ServicesStackPanel from "./ServicesStackPanel";
import { useUserCountry } from "@/hooks/useUserCountry";

export default function Pricing() {
    const [billingMode, setBillingMode] = useState<BillingMode>("one-time");
    const { isIndia } = useUserCountry();
    const modeMeta = BILLING_MODE_LABELS[billingMode];
    const pricingFootnote = getPricingFootnote(isIndia, billingMode);

    const headline = useMemo(() => {
        if (billingMode === "monthly") {
            return (
                <>
                    Retainers with{" "}
                    <span className="text-accent">clear monthly scope.</span>
                </>
            );
        }

        return (
            <>
                Line-item pricing with{" "}
                <span className="text-accent">no hidden fees.</span>
            </>
        );
    }, [billingMode]);

    return (
        <>
            <div className="sticky top-16 lg:top-[72px] z-40 border-b border-white/[0.06] bg-bg-primary/92 backdrop-blur-xl">
                <div className="container-custom py-3 sm:py-4">
                    <BillingModeToggle
                        mode={billingMode}
                        onChange={setBillingMode}
                        className="max-w-none w-full"
                    />
                </div>
            </div>

            <section
                id="pricing"
                className="relative pt-6 pb-12 sm:pb-16 hero-grid overflow-x-clip"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                            animate="visible"
                            className="min-w-0"
                        >
                            <motion.p variants={fadeInUp} className="mono-label mb-4">
                                {modeMeta.short} pricing · {billingMode === "monthly" ? "monthly" : "one-time"} ·{" "}
                                {isIndia ? "INR" : "USD"}
                            </motion.p>

                            <motion.h1 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                                {headline}
                            </motion.h1>

                            <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                                {billingMode === "monthly"
                                    ? "Pick the retainer that matches your stack — website care, dev hours, chatbot upkeep, or full AI ops."
                                    : "Pick exactly what you need — websites, SaaS, chatbots, or automation. Every line item has a clear deliverable and price."}
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
                                    onClick={() => navigateTo("/contact")}
                                    className="btn-secondary btn-secondary-dot w-full sm:w-auto justify-center"
                                >
                                    Book a call
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
                                        95<span className={TYPO.statSuffix}>+</span>
                                    </div>
                                    <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                        Lighthouse · production stack
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

                        <div className="min-w-0 w-full">
                            <ServicesStackPanel billingMode={billingMode} />
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

                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`mt-6 ${TYPO.bodySm} text-text-dim`}
                    >
                        {pricingFootnote}
                    </motion.p>
                </div>
            </section>
        </>
    );
}
