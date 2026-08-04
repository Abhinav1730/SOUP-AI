"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { navigateTo } from "@/lib/navigation";

export default function Belief() {
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
                        <blockquote className="heading-section max-w-3xl">
                            &ldquo;AI-native isn&apos;t a feature.
                            <br />
                            It&apos;s a different way
                            <br />
                            of operating.&rdquo;
                        </blockquote>
                    </div>
                    <div>
                        <p className="text-body-lg">
                            We don&apos;t run your brief through ChatGPT and call it AI. We use modern
                            stacks, AI-accelerated workflows, and production-ready engineering — so
                            you get real products, not mockups.
                        </p>
                        <button onClick={() => navigateTo("/contact")} className="btn-primary mt-8">
                            Work with us
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
