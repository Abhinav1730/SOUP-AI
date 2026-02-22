import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";

// Lazy load below-the-fold components
const Services = dynamic(() => import("@/components/Services"), {
    loading: () => <div className="h-96" />,
});
const WhyUs = dynamic(() => import("@/components/WhyUs"), {
    loading: () => <div className="h-96" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
    loading: () => <div className="h-96" />,
});
const Process = dynamic(() => import("@/components/Process"), {
    loading: () => <div className="h-96" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
    loading: () => <div className="h-96" />,
});
const CTABanner = dynamic(() => import("@/components/CTABanner"), {
    loading: () => <div className="h-40" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
    loading: () => <div className="h-96" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
    loading: () => <div className="h-40" />,
});

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <StatsBar />
                <Services />
                <WhyUs />
                <Projects />
                <Process />
                <Testimonials />
                <CTABanner />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
