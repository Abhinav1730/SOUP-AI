"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { navigateTo } from "@/lib/navigation";
import { TYPO } from "@/lib/typography";

export default function FinalCTA() {
    const scrollTo = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="section-padding section-alt relative">
            <div className="container-custom">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full"
                >
                    <div>
                        <p className="mono-label mb-4">Join 10+ companies</p>
                        <h2 className={TYPO.section}>
                            They shipped.
                            <br />
                            Your turn.
                        </h2>
                    </div>
                    <div>
                        <p className={TYPO.lead}>
                            NexaFlow saw 3× retention. BrightPath automated 2,000+ daily inquiries.
                            What&apos;s your goal?
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <button onClick={() => navigateTo("/contact")} className="btn-primary">
                                Start your project
                                <ArrowRight size={15} />
                            </button>
                            <button onClick={() => scrollTo("#projects")} className="btn-secondary">
                                See their results
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
