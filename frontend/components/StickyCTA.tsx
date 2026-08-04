"use client";

import { useState, useEffect } from "react";
import { navigateTo } from "@/lib/navigation";

export default function StickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <button
                onClick={() => navigateTo("/contact")}
                className="btn-primary shadow-lg shadow-black/40 text-[13px] py-3 px-6"
            >
                Start a project
            </button>
        </div>
    );
}
