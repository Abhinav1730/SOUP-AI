import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Process — SOUP AI",
    description:
        "How we work — from discovery to launch in weeks, not months. A clear four-step process for websites, SaaS, and AI builds.",
    openGraph: {
        title: "Process — SOUP AI",
        description: "From brief to shipped — faster than you think.",
    },
};

export default function ProcessPage() {
    return (
        <>
            <Navbar />
            <main>
                <Process />
            </main>
            <Footer />
        </>
    );
}
