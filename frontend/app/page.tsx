import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCarouselSection from "@/components/ServicesCarouselSection";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";
import StickyCTA from "@/components/StickyCTA";

const Projects = dynamic(() => import("@/components/Projects"), {
    loading: () => <div className="h-96" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
    loading: () => <div className="h-96" />,
});
const Differentiators = dynamic(() => import("@/components/Differentiators"), {
    loading: () => <div className="h-64" />,
});
const Belief = dynamic(() => import("@/components/Belief"), {
    loading: () => <div className="h-64" />,
});
const CTABanner = dynamic(() => import("@/components/CTABanner"), {
    loading: () => <div className="h-40" />,
});
const LimitedCapacity = dynamic(() => import("@/components/LimitedCapacity"), {
    loading: () => <div className="h-40" />,
});
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), {
    loading: () => <div className="h-40" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
    loading: () => <div className="h-40" />,
});

export default function Home() {
    return (
        <>
            <Navbar />
            <StickyCTA />
            <main className="overflow-x-clip max-w-full">
                <Hero />
                <ServicesCarouselSection />
                <LogoMarquee />
                <About />
                <Projects />
                <Testimonials />
                <Differentiators />
                <Belief />
                <CTABanner />
                <LimitedCapacity />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
