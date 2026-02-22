"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2, Mail, MapPin, Clock } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { BUDGET_OPTIONS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import toast from "react-hot-toast";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

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
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
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
        "w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-text-primary placeholder:text-text-dim/50 text-[14px] focus:outline-none input-glow transition-all duration-300";

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background visual — reaching hands */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/images/contact-visual.png"
                    alt=""
                    className="w-full max-w-[800px] h-auto opacity-[0.06]"
                />
            </div>

            <div className="container-custom relative z-10">
                <SectionHeading
                    label="Contact"
                    title="Let's Build Something Great"
                    description="Tell us about your project and we'll get back to you within 24 hours."
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 mt-20">
                    {/* Left: Info */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <motion.div variants={slideInLeft}>
                            <h3 className="text-[18px] font-semibold text-text-primary mb-4">
                                Start a Conversation
                            </h3>
                            <p className="text-[14.5px] text-text-muted leading-[1.85] font-light">
                                Whether you need a website, a SaaS platform, or an AI-powered
                                solution — we&apos;re here to help.
                            </p>
                        </motion.div>

                        <motion.div variants={slideInLeft} className="space-y-8">
                            {[
                                { icon: <Mail size={16} />, label: "Email", value: "tech.soup.ai@gmail.com", href: "mailto:tech.soup.ai@gmail.com" },
                                { icon: <Clock size={16} />, label: "Response", value: "Within 24 hours" },
                                { icon: <MapPin size={16} />, label: "Location", value: "Remote — Global" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5">
                                    <div className="icon-box w-10 h-10 rounded-xl text-accent-indigo">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.1em] text-text-dim font-medium mb-1">{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} className="text-[13.5px] text-text-primary hover:text-accent-indigo transition-colors font-medium">{item.value}</a>
                                        ) : (
                                            <div className="text-[13.5px] text-text-primary font-medium">{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Trust */}
                        <motion.div variants={slideInLeft} className="glass-card p-5 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {["AM", "SC", "DP"].map((initials) => (
                                        <div key={initials} className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-indigo/50 to-accent-cyan/30 flex items-center justify-center text-[10px] font-bold text-white border-2 border-bg-primary">
                                            {initials}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[12px] text-text-dim">Trusted by 50+ teams</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-10 sm:p-12 rounded-2xl">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-success/10 border border-success/15 flex items-center justify-center mb-5">
                                        <CheckCircle2 className="text-success" size={28} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-text-primary mb-2">Message Sent!</h4>
                                    <p className="text-text-muted text-[14px] font-light">We&apos;ll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-[12px] uppercase tracking-[0.06em] font-medium text-text-dim mb-3">Name <span className="text-error">*</span></label>
                                            <input id="name" type="text" placeholder="Your name" {...register("name")} className={inputCls} />
                                            {errors.name && <p className="mt-1.5 text-[11px] text-error">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-[12px] uppercase tracking-[0.06em] font-medium text-text-dim mb-3">Email <span className="text-error">*</span></label>
                                            <input id="email" type="email" placeholder="you@company.com" {...register("email")} className={inputCls} />
                                            {errors.email && <p className="mt-1.5 text-[11px] text-error">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="company" className="block text-[12px] uppercase tracking-[0.06em] font-medium text-text-dim mb-3">Company</label>
                                            <input id="company" type="text" placeholder="Your company" {...register("company")} className={inputCls} />
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-[12px] uppercase tracking-[0.06em] font-medium text-text-dim mb-3">Budget <span className="text-error">*</span></label>
                                            <select id="budget" {...register("budget")} className={`${inputCls} appearance-none cursor-pointer`} defaultValue="">
                                                <option value="" disabled className="bg-bg-secondary text-text-dim">Select budget</option>
                                                {BUDGET_OPTIONS.map((o) => <option key={o} value={o} className="bg-bg-secondary text-text-primary">{o}</option>)}
                                            </select>
                                            {errors.budget && <p className="mt-1.5 text-[11px] text-error">{errors.budget.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-[12px] uppercase tracking-[0.06em] font-medium text-text-dim mb-3">Project Details <span className="text-error">*</span></label>
                                        <textarea id="message" rows={5} placeholder="Tell us about your project, goals, and timeline..." {...register("message")} className={`${inputCls} resize-none`} />
                                        {errors.message && <p className="mt-1.5 text-[11px] text-error">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 size={16} className="animate-spin" /><span>Sending...</span></>
                                        ) : (
                                            <><Send size={16} /><span>Send Message</span></>
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
