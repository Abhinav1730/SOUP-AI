"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding section-alt relative">
            <div className="absolute top-0 left-0 right-0 section-divider" />

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Testimonials"
                    title="What Our Clients Say"
                    description="Hear from the founders and teams we've partnered with."
                />

                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
                >
                    {TESTIMONIALS.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="glass-card glass-card-interactive p-10 rounded-2xl relative"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-0.5 mb-8">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={13} className="fill-amber-400/70 text-amber-400/70" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-[14.5px] text-text-secondary leading-[1.75] font-light mb-10">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-indigo/60 to-accent-cyan/40 flex items-center justify-center text-white text-[12px] font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="text-[13.5px] font-semibold text-text-primary">{testimonial.name}</div>
                                    <div className="text-[12px] text-text-dim font-light">{testimonial.role}</div>
                                </div>
                            </div>

                            {/* Decorative quote */}
                            <div className="absolute top-6 right-7 text-[64px] leading-none font-serif text-white/[0.02] select-none pointer-events-none">
                                &ldquo;
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 section-divider" />
        </section>
    );
}
