"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function Belief() {
    const scrollTo = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="section-padding section-alt relative">
            <div className="container-custom">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end w-full"
                >
                    <div>
                        <p className="mono-label mb-6">Our belief</p>
                        <blockquote className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold tracking-[-0.03em] text-text-primary leading-[1.12]">
                            &ldquo;AI-native isn&apos;t a feature.
                            <br />
                            It&apos;s a different way
                            <br />
                            of operating.&rdquo;
                        </blockquote>
                    </div>
                    <div>
                        <p className="text-[15px] sm:text-base text-text-muted leading-relaxed">
                            We don&apos;t run your brief through ChatGPT and call it AI. We use modern
                            stacks, AI-accelerated workflows, and production-ready engineering — so
                            you get real products, not mockups.
                        </p>
                        <button onClick={scrollTo} className="btn-primary mt-8">
                            Work with us
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
