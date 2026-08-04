import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";
import StickyCTA from "@/components/StickyCTA";

const Projects = dynamic(() => import("@/components/Projects"), {
    loading: () => <div className="h-96" />,
});
const WhyUs = dynamic(() => import("@/components/WhyUs"), {
    loading: () => <div className="h-96" />,
});
const Services = dynamic(() => import("@/components/Services"), {
    loading: () => <div className="h-96" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
    loading: () => <div className="h-96" />,
});
const Process = dynamic(() => import("@/components/Process"), {
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
const FAQ = dynamic(() => import("@/components/FAQ"), {
    loading: () => <div className="h-96" />,
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
            <StickyCTA />
            <main>
                <Hero />
                <LogoMarquee />
                <About />
                <Projects />
                <WhyUs />
                <Services />
                <Pricing />
                <Process />
                <Testimonials />
                <Differentiators />
                <Belief />
                <FAQ />
                <CTABanner />
                <LimitedCapacity />
                <FinalCTA />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
