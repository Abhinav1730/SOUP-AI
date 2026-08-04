"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainerSlow } from "@/lib/animations";
import { BUILD_SERVICES, OPERATE_SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

function ServiceColumn({
    label,
    title,
    subtitle,
    services,
}: {
    label: string;
    title: string;
    subtitle: string;
    services: readonly {
        title: string;
        description: string;
        price: string;
        items: readonly { name: string; price: string }[];
    }[];
}) {
    return (
        <div className="glass-card p-6 sm:p-8">
            <p className="mono-label mb-2">{label}</p>
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            <p className="text-[13px] text-text-muted mt-1 mb-6">{subtitle}</p>

            {services.map((service) => (
                <div key={service.title} className="mb-6 last:mb-0">
                    <h4 className="text-[14px] font-medium text-text-primary mb-3">{service.title}</h4>
                    <div className="space-y-2">
                        {service.items.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0"
                            >
                                <span className="text-[13px] text-text-muted">{item.name}</span>
                                <span className="mono-label text-[10px] normal-case whitespace-nowrap">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Services() {
    const scrollTo = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="services" className="section-padding section-alt relative">
            <div className="container-custom">
                <SectionHeading
                    label="What we do"
                    title="Two ways we accelerate your business"
                    description="Build what the world sees. Operate at a speed they can't match."
                />

                <motion.div
                    variants={staggerContainerSlow}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 lg:mt-16"
                >
                    <motion.div variants={fadeInUp}>
                        <ServiceColumn
                            label="Build"
                            title="What the world sees"
                            subtitle="Websites, SaaS — AI-native delivery."
                            services={BUILD_SERVICES}
                        />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <ServiceColumn
                            label="Operate"
                            title="How you actually work"
                            subtitle="AI chatbots, automation, integrations."
                            services={OPERATE_SERVICES}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <div className="glass-card p-5 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-[13px] font-medium text-text-primary">Free Discovery Call</p>
                            <p className="text-[12px] text-text-dim mt-0.5">30 min · no commitment</p>
                        </div>
                        <span className="mono-label text-accent normal-case">Free</span>
                    </div>
                    <div className="glass-card p-5 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-[13px] font-medium text-text-primary">Production-ready stack</p>
                            <p className="text-[12px] text-text-dim mt-0.5">Next.js · TypeScript · Vercel</p>
                        </div>
                        <span className="mono-label text-text-dim normal-case">95+ Lighthouse</span>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 glass-card"
                >
                    <p className="text-[14px] text-text-muted">
                        Custom pricing: MVP and product builds scoped in discovery.
                    </p>
                    <button onClick={scrollTo} className="btn-secondary text-[13px] py-2.5 px-5 shrink-0">
                        Book a call
                        <ArrowRight size={14} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
