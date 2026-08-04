import Image from "next/image";
import { LOGO } from "@/lib/constants";

interface LogoProps {
    variant?: "icon" | "full";
    className?: string;
    priority?: boolean;
}

export default function Logo({ variant = "full", className = "", priority = false }: LogoProps) {
    if (variant === "icon") {
        return (
            <span className={`relative block h-9 w-9 overflow-hidden rounded-md shrink-0 ${className}`}>
                <Image
                    src={LOGO.src}
                    alt={LOGO.alt}
                    width={120}
                    height={120}
                    priority={priority}
                    className="absolute top-0 left-1/2 h-[320%] w-auto max-w-none -translate-x-1/2 object-cover object-top"
                />
            </span>
        );
    }

    return (
        <Image
            src={LOGO.src}
            alt={LOGO.alt}
            width={200}
            height={80}
            priority={priority}
            className={`h-10 sm:h-11 w-auto object-contain ${className}`}
        />
    );
}
