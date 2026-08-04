"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PRICING_PACKAGES } from "@/lib/constants";
import { TYPO } from "@/lib/typography";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
    const scrollTo = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="pricing" className="section-padding relative pt-28 lg:pt-32">
            <div className="container-custom">
                <SectionHeading
                    label="Pricing"
                    title="Packages or à la carte — your call."
                    description="Packages move faster and cost less than buying everything separately. Pick what fits your stage."
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 lg:mt-16"
                >
                    {PRICING_PACKAGES.map((pkg) => (
                        <motion.div
                            key={pkg.name}
                            variants={fadeInUp}
                            className={`glass-card p-6 sm:p-8 flex flex-col ${
                                pkg.featured ? "border-accent/30 bg-accent/[0.03]" : ""
                            }`}
                        >
                            {pkg.featured && (
                                <span className="mono-label text-accent mb-3 normal-case">Best value</span>
                            )}
                            <h3 className={TYPO.card}>{pkg.name}</h3>
                            {pkg.save && (
                                <p className="text-[11px] sm:text-[12px] text-accent mt-1">Save {pkg.save}</p>
                            )}
                            <div className="mt-4 mb-2">
                                <span className={TYPO.stat}>{pkg.price}</span>
                                {pkg.price !== "Custom" && (
                                    <span className="text-[11px] sm:text-[12px] text-text-dim ml-1">USD</span>
                                )}
                            </div>
                            <p className={`${TYPO.bodySm} mb-6`}>{pkg.tagline}</p>

                            <ul className="space-y-3 flex-1 mb-6">
                                {pkg.features.map((feature) => (
                                    <li key={feature} className={`flex items-start gap-2.5 ${TYPO.bodySm} text-text-secondary`}>
                                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <p className="mono-label text-text-dim mb-4 normal-case">
                                Delivery: {pkg.delivery}
                            </p>

                            <button
                                onClick={scrollTo}
                                className={pkg.featured ? "btn-primary w-full" : "btn-secondary w-full"}
                            >
                                {pkg.price === "Custom" ? "Book discovery call" : `Get started`}
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8 text-[12px] text-text-dim"
                >
                    All prices shown in USD. Custom scope available for enterprise projects.
                    Every package starts with a free 30-minute discovery call.
                </motion.p>
            </div>
        </section>
    );
}
