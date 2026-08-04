import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact — SOUP AI",
    description:
        "Start a project with SOUP AI. Book a free discovery call or send us your brief — we respond within 24 hours.",
    openGraph: {
        title: "Contact — SOUP AI",
        description: "Tell us what you're building. We'll reply within 24 hours.",
    },
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <Contact />
            </main>
            <Footer />
        </>
    );
}
