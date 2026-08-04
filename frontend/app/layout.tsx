import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://soupai.dev"),
    title: "SOUP AI — Building Fast, Intelligent Digital Experiences",
    description:
        "We build high-performance websites, scalable SaaS platforms, and AI-powered automation for startups and businesses. Modern tech, custom design, fast delivery.",
    keywords: [
        "web development",
        "SaaS development",
        "AI automation",
        "AI chatbots",
        "website design",
        "startup agency",
        "Next.js development",
        "full stack development",
    ],
    authors: [{ name: "SOUP AI" }],
    creator: "SOUP AI",
    openGraph: {
        title: "SOUP AI — Building Fast, Intelligent Digital Experiences",
        description:
            "We build high-performance websites, scalable SaaS platforms, and AI-powered automation for startups and businesses.",
        url: "https://soupai.dev",
        siteName: "SOUP AI",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/images/Soup_AI_Logo.jpeg",
                width: 1200,
                height: 630,
                alt: "SOUP AI — Building Fast, Intelligent Digital Experiences",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SOUP AI — Building Fast, Intelligent Digital Experiences",
        description:
            "We build high-performance websites, scalable SaaS platforms, and AI-powered automation for startups and businesses.",
        images: ["/images/Soup_AI_Logo.jpeg"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/images/Soup_AI_Logo.jpeg",
        apple: "/images/Soup_AI_Logo.jpeg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth overflow-x-clip">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased overflow-x-clip">
                <div className="site-shell">{children}</div>
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        duration: 4000,
                        style: {
                            background: "#0f0f0f",
                            color: "#f0ede8",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "8px",
                            fontSize: "14px",
                        },
                        success: {
                            iconTheme: {
                                primary: "#c8f55a",
                                secondary: "#0a0a0a",
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: "#EF4444",
                                secondary: "#F9FAFB",
                            },
                        },
                    }}
                />
            </body>
        </html>
    );
}
