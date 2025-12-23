import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendEmail, createContactEmailTemplate } from "@/lib/email";
import { prisma } from "@/lib/db";
import { siteConfig } from "@/config/site";

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: validated.name,
        email: validated.email,
        phone: validated.phone || "",
        message: validated.message,
        service: validated.service || "",
        status: "new",
      },
    });

    // Send email notification to business
    const emailHtml = createContactEmailTemplate({
      name: validated.name,
      email: validated.email,
      phone: validated.phone,
      service: validated.service,
      message: validated.message,
    });

    await sendEmail({
      to: siteConfig.links.email,
      subject: `New Contact Form Submission from ${validated.name}`,
      html: emailHtml,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us! We'll get back to you soon.",
        contactId: contact.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data. Please check your inputs.",
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
