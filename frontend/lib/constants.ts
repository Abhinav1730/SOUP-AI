export const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
    {
        title: "Website Development",
        description:
            "High-performance business websites built for speed, SEO, and conversions. Every pixel crafted to represent your brand at its best.",
        icon: "Globe",
    },
    {
        title: "SaaS Development",
        description:
            "Full-stack SaaS applications with authentication, billing, dashboards, and scalable architecture — from MVP to enterprise.",
        icon: "Layers",
    },
    {
        title: "AI Chatbots",
        description:
            "Intelligent conversational agents that qualify leads, handle support, and drive engagement — 24/7, without human intervention.",
        icon: "MessageSquare",
    },
    {
        title: "AI Automation",
        description:
            "Voice assistants, workflow automation, and CRM integrations that eliminate repetitive tasks and accelerate your operations.",
        icon: "Zap",
    },
] as const;

export const WHY_US_POINTS = [
    {
        title: "Fast Delivery",
        description: "From concept to launch in weeks, not months. We move fast without cutting corners.",
    },
    {
        title: "Startup-Friendly Pricing",
        description: "Premium quality doesn't have to break the bank. Flexible plans designed for growing teams.",
    },
    {
        title: "Fully Custom — No Templates",
        description: "Every project is designed and built from scratch. Your brand deserves originality, not recycled layouts.",
    },
    {
        title: "Long-Term Support",
        description: "We don't disappear after launch. Ongoing maintenance, updates, and scaling support included.",
    },
    {
        title: "AI-Ready Architecture",
        description: "Built with modern stacks that integrate seamlessly with AI, APIs, and future technologies.",
    },
] as const;

export const PROJECTS = [
    {
        title: "Nanté Patisserie & Confectionery",
        description:
            "A premium digital platform for a luxury chef cafe that drove significant growth in sales and profit. Users can easily discover new innovations and order custom designer cakes.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "UI/UX"],
        image: "/project-bakery.jpg",
        link: "https://panaderia-celaya.vercel.app/",
    },
    {
        title: "AI Restaurant Ordering System",
        description:
            "A conversational AI platform that handles restaurant orders via voice and text, reducing wait times by 60% and increasing order accuracy.",
        tags: ["Next.js", "OpenAI", "Node.js", "PostgreSQL"],
        image: "/project-restaurant.jpg",
        link: "#",
    },
    {
        title: "SaaS Analytics Dashboard",
        description:
            "Real-time analytics platform with customizable dashboards, team collaboration, and automated reporting for data-driven businesses.",
        tags: ["React", "TypeScript", "D3.js", "Supabase"],
        image: "/project-analytics.jpg",
        link: "#",
    },
    {
        title: "AI Customer Support Bot",
        description:
            "Multi-channel support bot that resolves 80% of tickets autonomously, with smart escalation and sentiment analysis capabilities.",
        tags: ["Python", "LangChain", "React", "Redis"],
        image: "/project-support.jpg",
        link: "#",
    },
    {
        title: "Voice-Based CRM Automation",
        description:
            "Voice-enabled CRM system that logs calls, updates records, and triggers follow-ups automatically — saving sales teams 15+ hours weekly.",
        tags: ["Twilio", "GPT-4", "Salesforce", "Next.js"],
        image: "/project-crm.jpg",
        link: "#",
    },
] as const;

export const PROCESS_STEPS = [
    {
        step: "01",
        title: "Discovery",
        description: "We dive deep into your goals, audience, and competitive landscape to understand exactly what you need.",
    },
    {
        step: "02",
        title: "Strategy & Design",
        description: "We craft wireframes, user flows, and visual designs that align with your brand and business objectives.",
    },
    {
        step: "03",
        title: "Development",
        description: "Our engineers build your product with clean, scalable code using the latest technologies and best practices.",
    },
    {
        step: "04",
        title: "Launch",
        description: "Rigorous testing, performance optimization, and a smooth deployment to get you live with confidence.",
    },
    {
        step: "05",
        title: "Ongoing Support",
        description: "Continuous monitoring, updates, and feature additions to keep your product evolving with your business.",
    },
] as const;

export const TESTIMONIALS = [
    {
        name: "Arjun Mehta",
        role: "Founder, NexaFlow",
        content:
            "SOUP AI transformed our outdated platform into a sleek SaaS product. Their attention to detail and understanding of modern UX is unmatched. We saw a 3x increase in user retention within the first month.",
        avatar: "AM",
    },
    {
        name: "Sarah Chen",
        role: "CTO, BrightPath Health",
        content:
            "The AI chatbot they built handles over 2,000 patient inquiries daily with remarkable accuracy. It freed up our support team to focus on complex cases. The ROI has been incredible.",
        avatar: "SC",
    },
    {
        name: "David Park",
        role: "CEO, CloudScale Labs",
        content:
            "Working with SOUP AI felt like having a senior engineering team embedded in our company. They delivered our MVP in 4 weeks and it looked like a product that took months to build.",
        avatar: "DP",
    },
] as const;

export const BUDGET_OPTIONS = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "Not sure yet",
] as const;

export const SOCIAL_LINKS = {
    twitter: "https://twitter.com/soupai",
    linkedin: "https://linkedin.com/company/soupai",
    github: "https://github.com/soupai",
    instagram: "https://instagram.com/soupai",
} as const;
