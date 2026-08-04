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
            className="w-full"
        >
            <p className="mono-label mb-4">{label}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold tracking-[-0.03em] text-text-primary leading-[1.12] max-w-5xl">
                {title}
            </h2>
            {description && (
                <p className="text-text-muted text-[15px] sm:text-base leading-relaxed mt-4 max-w-3xl">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
