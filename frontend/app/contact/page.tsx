import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
    title: "Contact — SOUP AI",
    description:
        "Email SOUP AI to start a project. We respond within 24 hours — no forms, just a direct line to our team.",
    openGraph: {
        title: "Contact — SOUP AI",
        description: "Email us at tech.soup.ai@gmail.com — we reply within 24 hours.",
    },
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <StickyCTA />
            <main className="overflow-x-clip max-w-full pt-16 lg:pt-[72px]">
                <Contact />
            </main>
            <Footer />
        </>
    );
}
