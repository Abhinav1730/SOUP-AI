import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/schema";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate the request body
        const result = contactFormSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Validation failed", details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, company, budget, message } = result.data;

        // Create email transporter
        // For production, configure with your SMTP credentials in environment variables
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER || "tech.soup.ai@gmail.com",
                pass: process.env.SMTP_PASS || "",
            },
        });

        // Email content
        const mailOptions = {
            from: `"SOUP AI Website" <${process.env.SMTP_USER || "tech.soup.ai@gmail.com"}>`,
            to: "tech.soup.ai@gmail.com",
            replyTo: email,
            subject: `New Project Inquiry from ${name}${company ? ` (${company})` : ""}`,
            html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0F19; color: #F9FAFB; padding: 40px; border-radius: 16px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #6366F1; font-size: 24px; margin: 0;">New Project Inquiry</h1>
            <p style="color: #9CA3AF; font-size: 14px; margin-top: 8px;">From SOUP AI Website Contact Form</p>
          </div>
          
          <div style="background: #111827; padding: 24px; border-radius: 12px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px; width: 120px;">Name</td>
                <td style="padding: 8px 0; color: #F9FAFB; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; color: #F9FAFB; font-size: 14px;">${email}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px;">Company</td>
                <td style="padding: 8px 0; color: #F9FAFB; font-size: 14px;">${company}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 8px 0; color: #9CA3AF; font-size: 14px;">Budget</td>
                <td style="padding: 8px 0; color: #6366F1; font-size: 14px; font-weight: 600;">${budget}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #111827; padding: 24px; border-radius: 12px;">
            <p style="color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Project Description</p>
            <p style="color: #F9FAFB; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 32px;">
            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366F1, #8B5CF6); color: white; padding: 12px 32px; border-radius: 12px; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to ${name}</a>
          </div>
          
          <p style="text-align: center; color: #6B7280; font-size: 12px; margin-top: 24px;">
            This email was sent from the SOUP AI website contact form.
          </p>
        </div>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
