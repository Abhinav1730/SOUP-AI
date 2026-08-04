"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2, Mail, MapPin, Clock, Coins, ChevronDown } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { BUDGET_OPTIONS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import toast from "react-hot-toast";

export default function Contact({ embedded = false }: { embedded?: boolean }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currency, setCurrency] = useState({ symbol: "$", code: "USD" });

    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                if (data.currency) {
                    const symbol = new Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: data.currency,
                    })
                        .formatToParts(0)
                        .find((p) => p.type === "currency")?.value || "$";

                    setCurrency({ symbol, code: data.currency });
                }
            } catch (err) {
                console.error("Failed to detect currency:", err);
            }
        };
        fetchLocationData();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", company: "", budget: "", message: "" },
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const submissionData = { ...data, detected_currency: currency.code };
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });
            if (!res.ok) throw new Error();
            setIsSubmitted(true);
            toast.success("Message sent! We'll get back to you within 24 hours.");
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch {
            toast.error("Something went wrong. Please email us directly.");
        }
    };

    const inputCls =
        "w-full px-4 py-3 rounded-lg bg-bg-secondary border border-white/[0.08] text-text-primary placeholder:text-text-dim text-[14px] focus:outline-none input-glow transition-all duration-200";

    return (
        <section
            id="contact"
            className={`section-padding relative overflow-x-clip ${
                embedded ? "section-alt border-t border-white/[0.06]" : "pt-28 lg:pt-32"
            }`}
        >
            <div className="container-custom">
                <SectionHeading
                    label="Contact"
                    title="Let's build something great."
                    description="Tell us about your project and we'll get back to you within 24 hours."
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 xl:gap-24 mt-12 lg:mt-16">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <motion.div variants={slideInLeft}>
                            <h3 className="text-[16px] font-semibold text-text-primary mb-3">
                                Start a conversation
                            </h3>
                            <p className="text-[14px] text-text-muted leading-relaxed">
                                Whether you need a website, a SaaS platform, or an AI-powered
                                solution — we&apos;re here to help.
                            </p>
                        </motion.div>

                        <motion.div variants={slideInLeft} className="space-y-6">
                            {[
                                { icon: <Mail size={15} />, label: "Email", value: "tech.soup.ai@gmail.com", href: "mailto:tech.soup.ai@gmail.com" },
                                { icon: <Clock size={15} />, label: "Response", value: "Within 24 hours" },
                                { icon: <MapPin size={15} />, label: "Location", value: "Remote — Global" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-md bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-text-muted">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="mono-label mb-0.5 normal-case">{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} className="text-[13px] text-text-primary hover:text-text-secondary transition-colors">{item.value}</a>
                                        ) : (
                                            <div className="text-[13px] text-text-primary">{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-6 sm:p-8">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center mb-4">
                                        <CheckCircle2 className="text-success" size={24} />
                                    </div>
                                    <h4 className="text-base font-semibold text-text-primary mb-2">Message sent!</h4>
                                    <p className="text-text-muted text-[14px]">We&apos;ll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="mono-label block mb-2 normal-case">Name <span className="text-error">*</span></label>
                                            <input id="name" type="text" placeholder="Your name" {...register("name")} className={inputCls} />
                                            {errors.name && <p className="mt-1.5 text-[11px] text-error">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mono-label block mb-2 normal-case">Email <span className="text-error">*</span></label>
                                            <input id="email" type="email" placeholder="you@company.com" {...register("email")} className={inputCls} />
                                            {errors.email && <p className="mt-1.5 text-[11px] text-error">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="company" className="mono-label block mb-2 normal-case">Company</label>
                                            <input id="company" type="text" placeholder="Your company" {...register("company")} className={inputCls} />
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="mono-label block mb-2 normal-case">Budget <span className="text-error">*</span></label>
                                            <div className="relative group">
                                                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-dim pointer-events-none">
                                                    <Coins size={16} strokeWidth={1.5} />
                                                </div>
                                                <select
                                                    id="budget"
                                                    {...register("budget")}
                                                    className={`${inputCls} pl-10 pr-20 appearance-none cursor-pointer`}
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled className="bg-bg-secondary text-text-dim">
                                                        Select budget range
                                                    </option>
                                                    {BUDGET_OPTIONS.map((o) => (
                                                        <option key={o} value={o} className="bg-bg-secondary text-text-primary">
                                                            {o.replaceAll("$", currency.symbol)}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                                                    <span className="hidden sm:inline mono-label text-[9px] normal-case">{currency.code}</span>
                                                    <ChevronDown size={14} className="text-text-dim" />
                                                </div>
                                            </div>
                                            {errors.budget && <p className="mt-1.5 text-[11px] text-error">{errors.budget.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="mono-label block mb-2 normal-case">Project details <span className="text-error">*</span></label>
                                        <textarea id="message" rows={5} placeholder="Tell us about your project, goals, and timeline..." {...register("message")} className={`${inputCls} resize-none`} />
                                        {errors.message && <p className="mt-1.5 text-[11px] text-error">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 size={16} className="animate-spin" /><span>Sending...</span></>
                                        ) : (
                                            <><Send size={16} /><span>Send message</span></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
