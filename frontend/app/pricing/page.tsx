import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Pricing — SOUP AI",
    description:
        "Packages or à la carte — Launch, Growth, and Transformation tiers for websites, SaaS, and AI automation. Every package starts with a free discovery call.",
    openGraph: {
        title: "Pricing — SOUP AI",
        description:
            "Packages or à la carte — pick what fits your stage. Launch from $5,000 USD.",
    },
};

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main>
                <Pricing />
                <Contact embedded />
            </main>
            <Footer />
        </>
    );
}
