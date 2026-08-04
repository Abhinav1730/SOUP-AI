export const LOGO = {
    src: "/images/Soup_AI_Logo.jpeg",
    alt: "SOUP AI — Automate. Engage. Grow.",
} as const;

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
] as const;

export const BUILD_SERVICES = [
    {
        title: "Website Development",
        description: "High-performance business websites built for speed, SEO, and conversions.",
        price: "From $2,500",
        items: [
            { name: "Business website (3–5 pages)", price: "$500", billing: "one-time" as const },
            { name: "Premium website + animations", price: "$800", billing: "one-time" as const },
            { name: "E-commerce / custom web app", price: "$1,000-2,500", billing: "one-time" as const },
            { name: "Website care & updates", price: "From $500/mo", billing: "monthly" as const },
        ],
    },
    {
        title: "SaaS Development",
        description: "Full-stack SaaS with auth, billing, dashboards, and scalable architecture.",
        price: "From $1,500",
        items: [
            { name: "MVP (core features)", price: "$1,500", billing: "one-time" as const },
            { name: "Full SaaS platform", price: "$2,000+", billing: "one-time" as const },
            { name: "Monthly dev retainer", price: "From $2,500/mo", billing: "monthly" as const },
        ],
    },
] as const;

export const OPERATE_SERVICES = [
    {
        title: "AI Chatbots",
        description: "Conversational agents that qualify leads, handle support, and drive engagement 24/7.",
        price: "From $1,000",
        items: [
            { name: "Support chatbot", price: "$1,000", billing: "one-time" as const },
            { name: "Multi-channel AI agent", price: "$1,750", billing: "one-time" as const },
            { name: "Custom LLM integration", price: "Custom", billing: "one-time" as const },
            { name: "Chatbot maintenance & tuning", price: "From $750/mo", billing: "monthly" as const },
        ],
    },
    {
        title: "AI Automation",
        description: "Voice assistants, workflow automation, and CRM integrations that eliminate repetitive tasks.",
        price: "From $1,000",
        items: [
            { name: "Workflow automation", price: "$1,500", billing: "one-time" as const },
            { name: "Voice + CRM integration", price: "$2,500", billing: "one-time" as const },
            { name: "AI Ops retainer", price: "From $2,000/mo", billing: "monthly" as const },
        ],
    },
] as const;

export const PRICING_PACKAGES = [
    {
        name: "Launch",
        featured: false,
        oneTime: {
            price: "$1,000",
            save: "~$500",
            tagline: "You need to exist online. Now.",
            features: [
                "Discovery & strategy session",
                "Premium business website (3–5 pages)",
                "Mobile-responsive + SEO setup",
                "2 revision rounds",
            ],
            delivery: "1–1.5 weeks",
        },
        monthly: {
            price: "$500",
            save: null,
            tagline: "Keep your site fast, secure, and updated.",
            features: [
                "Hosting & uptime monitoring",
                "Security patches & dependency updates",
                "Minor content & copy edits",
                "Monthly performance report",
            ],
            delivery: "Ongoing",
        },
    },
    {
        name: "Growth",
        featured: true,
        oneTime: {
            price: "$1,750",
            save: "~$750",
            tagline: "Web + AI — complete digital presence.",
            features: [
                "Everything in Launch",
                "SaaS MVP or AI chatbot",
                "Auth + dashboard setup",
                "1 month post-launch support",
            ],
            delivery: "2–3 weeks",
        },
        monthly: {
            price: "$2,500",
            save: null,
            tagline: "Ongoing product iteration and AI ops.",
            features: [
                "Everything in Launch Care",
                "Feature iterations & bug fixes",
                "AI chatbot monitoring & tuning",
                "Priority support queue",
            ],
            delivery: "Ongoing",
        },
    },
    {
        name: "Transformation",
        featured: false,
        oneTime: {
            price: "Custom",
            save: null,
            tagline: "Full-stack product + AI operations.",
            features: [
                "Full SaaS platform build",
                "AI automation suite",
                "Ongoing dev retainer (3 months)",
                "Priority support & scaling",
            ],
            delivery: "Scoped in discovery",
        },
        monthly: {
            price: "Custom",
            save: null,
            tagline: "Dedicated team for scale-stage products.",
            features: [
                "Dedicated dev & AI ops team",
                "Roadmap planning & execution",
                "Infrastructure & performance tuning",
                "SLA-backed priority support",
            ],
            delivery: "Scoped in discovery",
        },
    },
] as const;

export const CLIENT_MARQUEE = [
    "NexaFlow",
    "BrightPath Health",
    "CloudScale Labs",
    "Nanté Patisserie",
    "NexaFlow",
    "BrightPath Health",
    "CloudScale Labs",
    "Nanté Patisserie",
] as const;

export const CAPABILITY_STACK = [
    { id: "01", label: "Website development", status: "ACTIVE" as const },
    { id: "02", label: "SaaS & product builds", status: "ACTIVE" as const },
    { id: "03", label: "AI chatbots", status: "READY" as const },
    { id: "04", label: "AI automation", status: "READY" as const },
] as const;

export const HERO_STATS = [
    { value: "4", suffix: " wks", label: "avg. delivery" },
    { value: "3", suffix: "×", label: "faster than agencies" },
    { value: "10", suffix: "+", label: "projects shipped" },
] as const;

export const TECH_MARQUEE = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "OpenAI",
    "Node.js",
    "PostgreSQL",
    "Framer Motion",
    "Vercel",
    "Supabase",
] as const;

export const DIFFERENTIATORS = [
    {
        title: "Fixed scope, clear pricing",
        description: "No vague 'contact us' games. Every project starts with a clear brief and transparent budget.",
    },
    {
        title: "Ship in weeks, not months",
        description: "AI-accelerated workflows compress timelines without cutting corners on quality.",
    },
    {
        title: "Production-ready code",
        description: "Clean, scalable architecture — not throwaway prototypes that need rebuilding later.",
    },
    {
        title: "AI-first architecture",
        description: "Built with modern stacks that integrate seamlessly with AI, APIs, and future technologies.",
    },
] as const;

export const FAQ_ITEMS = [
    {
        question: "How long does a typical project take?",
        answer: "Most websites deliver in 2–4 weeks. SaaS MVPs typically take 4–8 weeks depending on scope. We provide a clear timeline during the discovery call before any work begins.",
    },
    {
        question: "What's your tech stack?",
        answer: "Our default stack is Next.js with React, TypeScript, and Tailwind CSS for styling. We use Framer Motion for animations, and deploy on Vercel for blazing-fast performance with 95+ Lighthouse scores.",
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes. We don't disappear after launch. We offer ongoing maintenance, updates, feature additions, and scaling support to keep your product evolving with your business.",
    },
    {
        question: "How does the discovery process work?",
        answer: "It starts with a free 30-minute call where we understand your goals, audience, and constraints. For complex projects, we deliver a clear brief with scope, timeline, and pricing within 24 hours.",
    },
    {
        question: "Can you integrate AI into our existing product?",
        answer: "Absolutely. We build AI chatbots, voice assistants, workflow automation, and CRM integrations that plug into your existing systems — whether that's a website, SaaS platform, or internal tools.",
    },
    {
        question: "What makes SOUP AI different from other agencies?",
        answer: "We combine fast delivery with production-ready engineering. Every project is custom-built from scratch — no templates. We use AI to accelerate our workflow, not as a marketing buzzword.",
    },
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
        title: "THE PROPHECY",
        category: "Luxury — E-Commerce",
        description:
            "Immersive maison de parfum experience with cinematic 3D visuals, sound design, and a premium fragrance collection storefront.",
        tags: ["Next.js", "Three.js", "Framer Motion", "E-Commerce"],
        image: "/images/projects/prophecy-parfum.png",
        link: "https://prophecy-parfum.vercel.app",
    },
    {
        title: "Nanté Patisserie & Confectionery",
        category: "Food & Retail — E-Commerce",
        description:
            "Custom designer cake studio site with flavour menus, gallery, ordering info, and location details — built for a luxury patisserie in New Delhi.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS", "UI/UX"],
        image: "/images/projects/nante-patisserie.png",
        link: "https://panaderia-celaya.vercel.app",
    },
    {
        title: "HulChul",
        category: "Career Tech — AI Agent",
        description:
            "WhatsApp-first AI career agent that scouts jobs, matches candidates, sends alerts, and makes warm introductions — no app download required.",
        tags: ["Next.js", "OpenAI", "WhatsApp API", "Node.js"],
        image: "/images/projects/hulchul.png",
        link: "https://hulchul.in",
    },
    {
        title: "SynapseCore",
        category: "Deep Tech — AI Research",
        description:
            "Evidence-first AI research platform where specialized agents explore literature, surface contradictions, and build reviewable scientific workspaces.",
        tags: ["Next.js", "TypeScript", "AI Agents", "Supabase"],
        image: "/images/projects/synapsecore.png",
        link: "https://synapse.universa.science",
    },
    {
        title: "Universa Academy",
        category: "EdTech — AI Bootcamp",
        description:
            "Applied AI engineering academy with webinars, workshops, and a 12-week bootcamp — teaching students to build, ship, and lead real products.",
        tags: ["Next.js", "React", "Tailwind CSS", "CMS"],
        image: "/images/projects/universa-academy.png",
        link: "https://universa.academy",
    },
    {
        title: "MelodyMind",
        category: "EdTech — AI Learning",
        description:
            "AI-powered study platform that turns notes and PDFs into songs, flashcards, quizzes, and a TikTok-style feed — making studying craveworthy.",
        tags: ["Next.js", "OpenAI", "Audio AI", "React"],
        image: "/images/projects/melodymind.png",
        link: "https://melodymind.co",
    },
] as const;

export const PROCESS_STEPS = [
    {
        step: "01",
        title: "Discovery",
        description: "Free 30-min call. We map your goals and identify where AI and modern tech move the needle most.",
        timeline: "Free",
    },
    {
        step: "02",
        title: "Strategy",
        description: "Clear brief: positioning, scope, timeline, measurable outcomes. You approve. We ship.",
        timeline: "~1 week",
    },
    {
        step: "03",
        title: "Build",
        description: "Parallel workstreams. You see drafts early — not at the end. Two revision rounds included.",
        timeline: "2–6 weeks",
    },
    {
        step: "04",
        title: "Launch & Support",
        description: "Rigorous testing, smooth deployment, and ongoing support to keep your product evolving.",
        timeline: "Ongoing",
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

export const BUDGET_OPTIONS_GLOBAL = [
    "$1,000 – $1,500",
    "$1,500 – $2,500",
    "$2,500 – $5,000",
    "Not sure yet",
] as const;

export const BUDGET_OPTIONS_INDIA = [
    "₹20,000 – ₹30,000",
    "₹30,000 – ₹45,000",
    "₹50,000 – ₹80,000",
    "₹1 Lakh+",
    "Not sure yet",
] as const;

/** @deprecated Use getBudgetOptions(isIndia) */
export const BUDGET_OPTIONS = BUDGET_OPTIONS_GLOBAL;

export function getBudgetOptions(isIndia: boolean): readonly string[] {
    return isIndia ? BUDGET_OPTIONS_INDIA : BUDGET_OPTIONS_GLOBAL;
}

export const SOCIAL_LINKS = {
    twitter: "https://twitter.com/soupai",
    linkedin: "https://linkedin.com/company/soupai",
    github: "https://github.com/soupai",
    instagram: "https://instagram.com/soupai",
} as const;

export const GLOBAL_ABOUT = {
    tagline: "Smart solutions. Real impact.",
    paragraphs: [
        "SOUP AI is an AI-native digital studio building high-performance websites, scalable SaaS platforms, and intelligent automation for startups and businesses worldwide.",
        "We combine modern engineering, thoughtful design, and AI-accelerated workflows to deliver production-ready digital experiences — built to scale, ship fast, and drive measurable results.",
    ],
    highlights: [
        {
            title: "Websites & SaaS",
            description: "Fast, SEO-ready websites and full-stack SaaS products with auth, dashboards, and scalable architecture.",
        },
        {
            title: "AI Systems",
            description: "Chatbots, voice assistants, and workflow automation that integrate with your existing tools and teams.",
        },
        {
            title: "Global delivery",
            description: "Remote-first team working across time zones with clear scope, transparent pricing, and production-ready code.",
        },
    ],
    closing:
        "We handle the technology — so you can focus on what matters most: growing your business.",
} as const;

export const GLOBAL_SERVICES_CAROUSEL = [
    {
        title: "Website Development",
        description:
            "High-performance business websites built for speed, SEO, and conversions — from landing pages to e-commerce.",
        icon: "Monitor",
    },
    {
        title: "SaaS Development",
        description:
            "Full-stack SaaS with auth, billing, dashboards, and scalable architecture — MVP to production.",
        icon: "Code2",
    },
    {
        title: "UI / UX Design",
        description:
            "Modern, conversion-focused design systems and interfaces that look sharp and feel effortless to use.",
        icon: "PenTool",
    },
    {
        title: "AI Chatbots",
        description:
            "Conversational agents that qualify leads, handle support, and drive engagement 24/7 across channels.",
        icon: "Brain",
    },
    {
        title: "AI Automation",
        description:
            "Workflow automation, voice assistants, and CRM integrations that eliminate repetitive tasks.",
        icon: "MessageCircle",
    },
    {
        title: "Product Strategy",
        description:
            "Discovery, scoping, and technical planning — clear deliverables, timelines, and pricing before we build.",
        icon: "LayoutList",
    },
] as const;

export const INDIA_ABOUT = {
    tagline: "Smart solutions. Real impact.",
    paragraphs: [
        "Soup AI is a digital solutions company helping businesses grow in the digital world with smart websites, powerful systems and AI-driven support.",
        "We combine creativity, technology and strategy to deliver high-performing digital experiences that are not just visually stunning, but built to scale and deliver results.",
    ],
    services: [
        {
            title: "Listing",
            description:
                "Well-structured and organized listing of products, categories and information for easy navigation and better discovery.",
            icon: "LayoutList",
        },
        {
            title: "UI / UX Design",
            description:
                "Modern, clean and conversion-focused UI/UX design that provides an engaging and effortless user experience.",
            icon: "PenTool",
        },
        {
            title: "Backend Development",
            description:
                "Robust, secure and scalable backend that ensures smooth performance and handles your business logic efficiently.",
            icon: "Code2",
        },
        {
            title: "AI Support",
            description:
                "AI-powered support to automate tasks, provide smart assistance and enhance the overall user experience.",
            icon: "Brain",
        },
        {
            title: "Login Feature",
            description:
                "Secure and seamless login & sign-up system for users with authentication, password recovery and more.",
            icon: "UserCircle",
        },
        {
            title: "Admin Panel",
            description:
                "Powerful and easy-to-manage admin panel to control products, users, orders, content and website settings.",
            icon: "Monitor",
        },
    ],
    marketing: [
        {
            title: "Email Automation",
            description:
                "Automated email campaigns, welcome emails, updates, offers and more to build stronger customer relationships.",
            icon: "Mail",
        },
        {
            title: "WhatsApp Automation",
            description:
                "Automated WhatsApp messages for alerts, reminders, updates and customer engagement at scale.",
            icon: "MessageCircle",
        },
    ],
    trustBadges: [
        "Secure & Reliable",
        "Fast Performance",
        "Mobile Responsive",
        "SEO Friendly",
        "Dedicated Support",
    ],
    closing:
        "We handle the tech, so you can focus on what matters most — growing your business.",
} as const;
