"use client";

import { CLIENT_MARQUEE } from "@/lib/constants";

export default function LogoMarquee() {
    return (
        <section className="py-10 border-y border-white/[0.06] overflow-hidden bg-bg-secondary/50">
            <div className="container-custom mb-5">
                <p className="mono-label text-center">Trusted by teams across industries</p>
            </div>
            <div className="relative overflow-hidden">
                <div className="marquee-track gap-16 px-6">
                    {CLIENT_MARQUEE.map((name, i) => (
                        <span
                            key={`${name}-${i}`}
                            className="text-[14px] font-medium text-text-dim/60 whitespace-nowrap px-6"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
