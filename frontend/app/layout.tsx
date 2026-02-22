import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
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
                url: "/og-image.png",
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
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                {children}
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        duration: 4000,
                        style: {
                            background: "#151c2c",
                            color: "#F9FAFB",
                            border: "1px solid rgba(99, 102, 241, 0.2)",
                            borderRadius: "12px",
                            fontSize: "14px",
                            backdropFilter: "blur(20px)",
                        },
                        success: {
                            iconTheme: {
                                primary: "#10B981",
                                secondary: "#F9FAFB",
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
