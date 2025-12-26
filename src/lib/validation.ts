import { z } from "zod";

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 10, {
      message: "Phone number must be at least 10 digits",
    }),
  service: z.string().optional(),
  preferredContactMethod: z.enum(["email", "phone"]).optional(),
  bestTimeToContact: z.string().optional(),
  estimatedPhotos: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Booking form validation schema
export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number must be less than 20 digits"),
  serviceType: z
    .string()
    .min(1, "Please select a service type"),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date"),
  message: z
    .string()
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
