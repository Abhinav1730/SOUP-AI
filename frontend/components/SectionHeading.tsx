"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
    label: string;
    title: string;
    description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center max-w-2xl mx-auto"
        >
            <span className="badge badge-accent mb-8 inline-flex text-[12.5px] uppercase tracking-[0.12em]">
                {label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-text-primary leading-[1.2] mb-6" style={{ wordSpacing: '0.03em' }}>
                {title}
            </h2>
            {description && (
                <p className="text-text-muted text-base lg:text-lg leading-[1.85] font-light max-w-xl mx-auto mt-4">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
