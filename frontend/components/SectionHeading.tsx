"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { TYPO } from "@/lib/typography";

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
            <h2 className={`${TYPO.section} mb-2`}>{title}</h2>
            {description && (
                <p className={`${TYPO.lead} mt-4 max-w-3xl`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}
