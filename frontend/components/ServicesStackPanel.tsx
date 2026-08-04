"use client";

import { motion } from "framer-motion";
import { BUILD_SERVICES, OPERATE_SERVICES } from "@/lib/constants";
import {
    filterServiceCategories,
    type BillingMode,
    type ServiceCategory,
} from "@/lib/pricing";

function ServiceStackRows({
    services,
    startIndex,
}: {
    services: ServiceCategory[];
    startIndex: number;
}) {
    let counter = startIndex;

    return (
        <div className="space-y-4">
            {services.map((service) => (
                <div key={service.title}>
                    <p className="text-[11px] text-text-dim uppercase tracking-wider mb-2 px-1">
                        {service.title}
                    </p>
                    <div className="space-y-2">
                        {service.items.map((item) => {
                            const id = String(counter).padStart(2, "0");
                            counter += 1;
                            return (
                                <div
                                    key={item.name}
                                    className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between py-3 sm:py-2.5 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                                >
                                    <span className="text-[11px] sm:text-[12px] text-text-secondary min-w-0 leading-snug">
                                        <span className="text-text-dim mr-2">{id}</span>
                                        {item.name}
                                    </span>
                                    <span className="mono-label text-[10px] normal-case whitespace-nowrap text-accent self-start sm:self-auto shrink-0">
                                        {item.price}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

type ServicesStackPanelProps = {
    billingMode?: BillingMode;
};

export default function ServicesStackPanel({ billingMode = "one-time" }: ServicesStackPanelProps) {
    const buildServices = filterServiceCategories(BUILD_SERVICES, billingMode);
    const operateServices = filterServiceCategories(OPERATE_SERVICES, billingMode);
    const buildItemCount = buildServices.reduce((sum, service) => sum + service.items.length, 0);
    const isMonthly = billingMode === "monthly";

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-success tracking-wider font-medium truncate">
                        SYSTEM ONLINE
                    </span>
                </div>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">
                    soupai.dev · {isMonthly ? "retainers" : "services"}
                </span>
            </div>

            <div className="p-4 sm:p-5">
                {buildServices.length > 0 && (
                    <>
                        <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                            Build — {isMonthly ? "ongoing product care" : "what the world sees"}
                        </p>
                        <p className="text-[12px] text-text-muted mb-4 -mt-2">
                            {isMonthly
                                ? "Hosting, updates, and continuous product iteration."
                                : "Websites, SaaS — AI-native delivery."}
                        </p>
                        <ServiceStackRows services={buildServices} startIndex={1} />
                    </>
                )}

                {operateServices.length > 0 && (
                    <div className={buildServices.length > 0 ? "mt-5 pt-4 border-t border-white/[0.06]" : ""}>
                        <p className="text-[10px] text-text-dim uppercase tracking-wider mb-4">
                            Operate — {isMonthly ? "always-on AI ops" : "how you actually work"}
                        </p>
                        <p className="text-[12px] text-text-muted mb-4 -mt-2">
                            {isMonthly
                                ? "Monitoring, tuning, and automation upkeep."
                                : "AI chatbots, automation, integrations."}
                        </p>
                        <ServiceStackRows
                            services={operateServices}
                            startIndex={buildItemCount + 1}
                        />
                    </div>
                )}

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mb-3">
                        Stack
                    </p>
                    <p className="text-[12px] text-text-secondary leading-relaxed font-mono">
                        {"> Next.js · TypeScript · Vercel · 95+ Lighthouse"}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
