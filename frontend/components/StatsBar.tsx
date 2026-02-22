"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { fadeInUp } from "@/lib/animations";

const stats = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 30, suffix: "+", label: "AI Integrations" },
    { value: 4, suffix: "x", label: "Faster Time-to-Market" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 1800;
        const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar() {
    return (
        <section className="relative py-14">
            <div className="container-custom">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="glass-card py-10 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 rounded-2xl"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-0">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`text-center ${i < stats.length - 1 ? "lg:border-r lg:border-white/[0.05]" : ""
                                    }`}
                            >
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-strong mb-2 sm:mb-4 tracking-tight">
                                    <Counter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.1em] sm:tracking-[0.12em] text-text-dim font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
