import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "FAQ — SOUP AI",
    description:
        "Common questions about working with SOUP AI — timelines, pricing, revisions, tech stack, and ongoing support.",
    openGraph: {
        title: "FAQ — SOUP AI",
        description: "Answers to the questions we hear most before a project starts.",
    },
};

export default function FAQPage() {
    return (
        <>
            <Navbar />
            <main>
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
