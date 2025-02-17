import nodemailer from "nodemailer";
import { connectToDatabase } from "../../../../lib/mongodb";
import Contact from "@/model/Contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {

    const { name, email, message, phone, subject } = await req.json();

    try {
        // Connect to MongoDB
        await connectToDatabase();

        // Save to database
        const contact = new Contact({ name, email, message, phone, subject });
        console.log("backendLog: " + contact)
        await contact.save();

        // Send Email using Nodemailer
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.RECEIVER_EMAIL, // Where you receive messages
            subject: `📩 New Contact Form Submission from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                <h2 style="color: #333;">📬 New Contact Form Submission</h2>
                <p style="font-size: 16px; color: #555;">You have received a new message from your portfolio contact form.</p>
                <hr style="border: none; border-top: 1px solid #e0e0e0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007bff; color: #333;">
                  ${message}
                </blockquote>
                <hr style="border: none; border-top: 1px solid #e0e0e0;">
                <p style="font-size: 14px; color: #777;">This email was sent from your portfolio website.</p>
              </div>
            `,
          });
          

        return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });

    } catch (error) {
        console.log( "Internal Server Error: "+error.message);
        return NextResponse.json({ message: "Internal Server Error: " + error.message }, { status: 500 });
    }
}