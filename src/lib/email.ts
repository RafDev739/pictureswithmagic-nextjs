import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail({
  to,
  subject,
  html,
  from = "Pictures With Magic <onboarding@resend.dev>",
}: EmailOptions) {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

// Email template for contact form submissions
export function createContactEmailTemplate({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
          }
          .header {
            background-color: #0066cc;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 3px solid #0066cc;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <span class="label">Email:</span>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            ${
              phone
                ? `
            <div class="field">
              <span class="label">Phone:</span>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            `
                : ""
            }

            ${
              service
                ? `
            <div class="field">
              <span class="label">Service Interested In:</span>
              <div class="value">${service}</div>
            </div>
            `
                : ""
            }

            <div class="field">
              <span class="label">Message:</span>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Email template for booking form submissions
export function createBookingEmailTemplate({
  name,
  email,
  phone,
  serviceType,
  preferredDate,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  message?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
          }
          .header {
            background-color: #7c3aed;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 3px solid #7c3aed;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Booking Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <span class="label">Email:</span>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="field">
              <span class="label">Phone:</span>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>

            <div class="field">
              <span class="label">Service Type:</span>
              <div class="value">${serviceType}</div>
            </div>

            <div class="field">
              <span class="label">Preferred Date:</span>
              <div class="value">${new Date(preferredDate).toLocaleDateString()}</div>
            </div>

            ${
              message
                ? `
            <div class="field">
              <span class="label">Additional Message:</span>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>
            `
                : ""
            }
          </div>
        </div>
      </body>
    </html>
  `;
}
