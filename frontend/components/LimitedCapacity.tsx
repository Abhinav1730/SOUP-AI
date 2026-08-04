"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navigateTo } from "@/lib/navigation";
import { fadeInUp } from "@/lib/animations";
import { TYPO } from "@/lib/typography";

export default function LimitedCapacity() {
    return (
        <section className="py-16 sm:py-20 border-y border-white/[0.06]">
            <div className="container-custom">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full"
                >
                    <div>
                        <p className="mono-label mb-4">Limited capacity</p>
                        <h2 className={TYPO.section}>
                            We take 5 projects
                            <br />
                            per month.
                        </h2>
                        <p className={`mt-4 ${TYPO.bodySm}`}>
                            Small team. Senior talent. Limited slots. Book your spot before
                            we&apos;re full for the month.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                        <button onClick={() => navigateTo("/contact")} className="btn-primary">
                            Check availability
                            <ArrowRight size={14} />
                        </button>
                        <button
                            onClick={() => navigateTo("/pricing")}
                            className="btn-secondary"
                        >
                            See pricing
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
