import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import LimitedCapacity from "@/components/LimitedCapacity";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
    title: "Pricing — SOUP AI",
    description:
        "Packages or à la carte — Launch, Growth, and Transformation tiers for websites, SaaS, and AI automation. Every package starts with a free discovery call.",
    openGraph: {
        title: "Pricing — SOUP AI",
        description:
            "Packages or à la carte — pick what fits your stage. Launch from $1,000 USD.",
    },
};

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <StickyCTA />
            <main className="overflow-x-clip max-w-full">
                <Pricing />
                <LimitedCapacity />
                <CTABanner />
                <Contact embedded />
            </main>
            <Footer />
        </>
    );
}
