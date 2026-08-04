import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
    title: "Pricing — SOUP AI",
    description:
        "À la carte pricing for websites, SaaS, AI chatbots, and automation. One-time builds or monthly retainers — clear line-item pricing with no hidden fees.",
    openGraph: {
        title: "Pricing — SOUP AI",
        description:
            "Line-item pricing for build and operate services. Toggle one-time or monthly retainers.",
    },
};

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <StickyCTA />
            <main className="overflow-x-clip max-w-full pt-16 lg:pt-[72px]">
                <Pricing />
                <Contact embedded />
            </main>
            <Footer />
        </>
    );
}
