"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Send,
    Loader2,
    CheckCircle2,
    Mail,
    MapPin,
    Clock,
    ChevronDown,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { getBudgetOptions } from "@/lib/constants";
import { useUserCountry } from "@/hooks/useUserCountry";
import { TYPO } from "@/lib/typography";
import toast from "react-hot-toast";

const CONTACT_CHANNELS: {
    icon: typeof Mail;
    label: string;
    value: string;
    href?: string;
}[] = [
    {
        icon: Mail,
        label: "Email",
        value: "tech.soup.ai@gmail.com",
        href: "mailto:tech.soup.ai@gmail.com",
    },
    {
        icon: Clock,
        label: "Response",
        value: "Within 24 hours",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Remote — Global",
    },
];

function ContactInfoPanel() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="system-panel overflow-hidden w-full"
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-success animate-[pulse-dot_2s_ease-in-out_infinite] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] text-success tracking-wider font-medium truncate">
                        SYSTEM ONLINE
                    </span>
                </div>
                <span className="text-[10px] text-text-dim shrink-0 hidden sm:inline">
                    soupai.dev · contact
                </span>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
                {CONTACT_CHANNELS.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-md bg-white/[0.02] border border-white/[0.04]"
                    >
                        <div className="flex items-center gap-3 min-w-0">
                            <item.icon size={14} className="text-text-dim shrink-0" />
                            <span className="text-[12px] text-text-secondary">{item.label}</span>
                        </div>
                        {item.href ? (
                            <a
                                href={item.href}
                                className="mono-label text-[10px] normal-case text-accent truncate"
                            >
                                {item.value}
                            </a>
                        ) : (
                            <span className="mono-label text-[10px] normal-case text-text-dim shrink-0">
                                {item.value}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default function Contact({ embedded = false }: { embedded?: boolean }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { isIndia, isLoading } = useUserCountry();
    const budgetOptions = useMemo(() => getBudgetOptions(isIndia), [isIndia]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", company: "", budget: "", message: "" },
    });

    useEffect(() => {
        if (!isLoading) {
            setValue("budget", "");
        }
    }, [isIndia, isLoading, setValue]);

    const onSubmit = async (data: ContactFormData) => {
        try {
            const submissionData = {
                ...data,
                detected_currency: isIndia ? "INR" : "USD",
            };
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });
            if (!res.ok) throw new Error();
            setIsSubmitted(true);
            reset();
            toast.success("Message sent! We'll get back to you within 24 hours.");
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch {
            toast.error("Something went wrong. Please email us directly.");
        }
    };

    const inputCls =
        "w-full px-4 py-3 rounded-lg bg-bg-secondary border border-white/[0.08] text-text-primary placeholder:text-text-dim text-[14px] focus:outline-none input-glow transition-all duration-200";

    const formPanel = (
        <div className="system-panel overflow-hidden w-full">
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/[0.06]">
                <span className="mono-label text-[10px] normal-case">Project brief</span>
                <span className="text-[10px] text-text-dim hidden sm:inline">
                    {isIndia ? "Pricing in INR" : "Pricing in USD"}
                </span>
            </div>

            <div className="p-5 sm:p-6">
                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                    >
                        <div className="w-12 h-12 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center mb-4">
                            <CheckCircle2 className="text-success" size={24} />
                        </div>
                        <h4 className="text-base font-semibold text-text-primary mb-2">
                            Message sent!
                        </h4>
                        <p className="text-text-muted text-[14px]">
                            We&apos;ll get back to you within 24 hours.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="mono-label block mb-2 normal-case">
                                    Name <span className="text-error">*</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    {...register("name")}
                                    className={inputCls}
                                />
                                {errors.name && (
                                    <p className="mt-1.5 text-[11px] text-error">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email" className="mono-label block mb-2 normal-case">
                                    Email <span className="text-error">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    {...register("email")}
                                    className={inputCls}
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-[11px] text-error">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="company" className="mono-label block mb-2 normal-case">
                                    Company
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Your company"
                                    {...register("company")}
                                    className={inputCls}
                                />
                            </div>
                            <div>
                                <label htmlFor="budget" className="mono-label block mb-2 normal-case">
                                    Budget <span className="text-error">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="budget"
                                        {...register("budget")}
                                        className={`${inputCls} pr-10 appearance-none cursor-pointer`}
                                        defaultValue=""
                                        disabled={isLoading}
                                    >
                                        <option value="" disabled className="bg-bg-secondary text-text-dim">
                                            {isLoading ? "Detecting region..." : "Select budget range"}
                                        </option>
                                        {budgetOptions.map((option) => (
                                            <option
                                                key={option}
                                                value={option}
                                                className="bg-bg-secondary text-text-primary"
                                            >
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown
                                        size={14}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-dim pointer-events-none"
                                    />
                                </div>
                                {errors.budget && (
                                    <p className="mt-1.5 text-[11px] text-error">
                                        {errors.budget.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="mono-label block mb-2 normal-case">
                                Project details <span className="text-error">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell us about your project, goals, and timeline..."
                                {...register("message")}
                                className={`${inputCls} resize-none`}
                            />
                            {errors.message && (
                                <p className="mt-1.5 text-[11px] text-error">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isLoading}
                            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    <span>Send message</span>
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );

    if (embedded) {
        return (
            <section
                id="contact"
                className="section-padding relative overflow-x-clip section-alt border-t border-white/[0.06]"
            >
                <div className="container-custom">
                    <p className="mono-label mb-4">Contact</p>
                    <h2 className={`mb-8 max-w-2xl ${TYPO.section}`}>
                        Ready to start?{" "}
                        <span className="text-accent">Tell us what you need.</span>
                    </h2>
                    {formPanel}
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="relative section-padding hero-grid overflow-x-clip">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(200,245,90,0.06),transparent)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="manifesto-bar"
                >
                    <span className="mono-label whitespace-nowrap">[ CONTACT ]</span>
                    <span className="mono-label whitespace-nowrap hidden sm:inline">
                        START A PROJECT
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start mt-4 xl:mt-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="min-w-0"
                    >
                        <motion.p variants={fadeInUp} className="mono-label mb-4">
                            Get in touch
                        </motion.p>

                        <motion.h1 variants={fadeInUp} className={`max-w-2xl ${TYPO.hero}`}>
                            Let&apos;s build something{" "}
                            <span className="text-accent">great.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className={`mt-6 max-w-2xl ${TYPO.lead}`}>
                            Tell us about your project and we&apos;ll get back within 24 hours.
                            Every engagement starts with a free 30-minute discovery call.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 gap-6 sm:gap-8"
                        >
                            <div>
                                <div className={TYPO.stat}>24h</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Typical response time
                                </div>
                            </div>
                            <div>
                                <div className={TYPO.stat}>Free</div>
                                <div className="mono-label mt-2 normal-case text-[11px] sm:text-[12px]">
                                    Discovery call · 30 min
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="min-w-0 w-full space-y-4">
                        <ContactInfoPanel />
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                        >
                            {formPanel}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
