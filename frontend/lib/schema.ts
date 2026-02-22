import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    company: z
        .string()
        .max(100, "Company name is too long")
        .optional()
        .or(z.literal("")),
    budget: z
        .string()
        .min(1, "Please select a budget range"),
    message: z
        .string()
        .min(10, "Please describe your project in at least 10 characters")
        .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
