"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { navigateTo } from "@/lib/navigation";
import { TYPO } from "@/lib/typography";

export default function CTABanner() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-16 sm:py-20 relative">
            <div className="container-custom">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="glass-card p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 w-full"
                >
                    <div>
                        <p className="mono-label mb-4">Let&apos;s go</p>
                        <h2 className={TYPO.section}>
                            Ready to move
                            <br />
                            at AI speed?
                        </h2>
                        <p className={`mt-4 ${TYPO.bodySm} max-w-xl`}>
                            Start with a free 30-minute call. No pitch deck. No commitment.
                            Just clarity on what we can build for you.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                        <button onClick={() => navigateTo("/contact")} className="btn-primary">
                            Book a discovery call
                            <ArrowRight size={15} />
                        </button>
                        <button onClick={() => scrollTo("#projects")} className="btn-secondary">
                            See our work
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
