"use client";

import {
    Brain,
    Code2,
    LayoutList,
    Mail,
    MessageCircle,
    Monitor,
    PenTool,
    UserCircle,
} from "lucide-react";
import Carousel3D from "@/components/Carousel3D";
import { INDIA_ABOUT } from "@/lib/constants";
import { TYPO } from "@/lib/typography";
import { useUserCountry } from "@/hooks/useUserCountry";

const indiaIconMap = {
    LayoutList,
    PenTool,
    Code2,
    Brain,
    UserCircle,
    Monitor,
    Mail,
    MessageCircle,
} as const;

const SERVICES_HOLD_MS = 2500;

function ServiceCard({
    service,
    index,
    isActive = false,
}: {
    service: { title: string; description: string; icon: string };
    index: number;
    isActive?: boolean;
}) {
    const Icon = indiaIconMap[service.icon as keyof typeof indiaIconMap];

    return (
        <div
            className={`glass-card p-5 sm:p-6 w-[min(72vw,260px)] sm:w-[300px] lg:w-[320px] min-h-[220px] sm:min-h-[240px] transition-all duration-500 ${
                isActive
                    ? "border-accent/25 shadow-[0_0_48px_rgba(200,245,90,0.14)] opacity-100 scale-100"
                    : "opacity-45 scale-[0.86] sm:blur-[0.5px]"
            }`}
        >
            <div className="icon-box w-10 h-10 mb-4">
                <Icon size={18} strokeWidth={1.5} />
            </div>
            <p className="mono-label mb-3 normal-case text-[10px]">
                {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className={`${TYPO.card} mb-2`}>{service.title}</h3>
            <p className={`${TYPO.bodySm} line-clamp-4`}>
                {service.description}
            </p>
        </div>
    );
}

export default function ServicesCarouselSection() {
    const { isIndia, isLoading } = useUserCountry();

    if (isLoading || !isIndia) {
        return null;
    }

    return (
        <section
            id="services-carousel"
            className="relative py-12 sm:py-16 lg:py-24 hero-grid border-y border-white/[0.06] overflow-x-clip"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(200,245,90,0.05),transparent)] pointer-events-none" />
            <div className="container-custom relative z-10">
                <div className="manifesto-bar mb-8">
                    <span className="mono-label whitespace-nowrap">Services we provide</span>
                </div>
                <Carousel3D
                    items={INDIA_ABOUT.services}
                    holdMs={SERVICES_HOLD_MS}
                    getKey={(service) => service.title}
                    getLabel={(service) => service.title}
                    renderCard={(service, index, isActive) => (
                        <ServiceCard service={service} index={index} isActive={isActive} />
                    )}
                />
            </div>
        </section>
    );
}
