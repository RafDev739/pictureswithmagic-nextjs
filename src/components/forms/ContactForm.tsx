"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validation";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        reset();
        // Auto-reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {status === "success" && (
        <div className="p-4 bg-green-50 border-l-4 border-primary rounded-lg animate-slide-down flex items-start gap-3">
          <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-primary-dark font-semibold">Message sent successfully!</p>
            <p className="text-sm text-neutral-700 mt-1">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border-l-4 border-accent rounded-lg animate-slide-down flex items-start gap-3">
          <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-accent-dark font-semibold">Unable to send message</p>
            <p className="text-sm text-neutral-700 mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          disabled={status === "loading"}
          className={`w-full px-4 py-3 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            errors.name ? "border-accent" : "border-neutral-300"
          } ${status === "loading" ? "opacity-60 cursor-not-allowed" : ""}`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-accent flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          disabled={status === "loading"}
          className={`w-full px-4 py-3 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            errors.email ? "border-accent" : "border-neutral-300"
          } ${status === "loading" ? "opacity-60 cursor-not-allowed" : ""}`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-accent flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          disabled={status === "loading"}
          className={`w-full px-4 py-3 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            errors.phone ? "border-accent" : "border-neutral-300"
          } ${status === "loading" ? "opacity-60 cursor-not-allowed" : ""}`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-accent flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Service Field */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          {...register("service")}
          disabled={status === "loading"}
          className={`w-full px-4 py-3 border border-neutral-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            status === "loading" ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select a service</option>
          <option value="scanning">Photo Scanning</option>
          <option value="organization">Photo Organization</option>
          <option value="restoration">Photo Restoration</option>
          <option value="albums">Photo Albums</option>
          <option value="workshop">Workshops</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-3">
          Preferred Contact Method *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="email"
              {...register("preferredContactMethod")}
              disabled={status === "loading"}
              defaultChecked
              className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
            />
            <span className="text-neutral-700">Email</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="phone"
              {...register("preferredContactMethod")}
              disabled={status === "loading"}
              className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
            />
            <span className="text-neutral-700">Phone</span>
          </label>
        </div>
        {errors.preferredContactMethod && (
          <p className="mt-1 text-sm text-accent flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.preferredContactMethod.message}
          </p>
        )}
      </div>

      {/* Best Time to Contact */}
      <div>
        <label htmlFor="bestTimeToContact" className="block text-sm font-medium text-neutral-700 mb-2">
          Best Time to Contact
        </label>
        <select
          id="bestTimeToContact"
          {...register("bestTimeToContact")}
          disabled={status === "loading"}
          className={`w-full px-4 py-3 border border-neutral-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            status === "loading" ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select a time</option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          <option value="evening">Evening (5 PM - 6 PM)</option>
          <option value="anytime">Anytime</option>
        </select>
      </div>

      {/* Estimated Number of Photos */}
      <div>
        <label htmlFor="estimatedPhotos" className="block text-sm font-medium text-neutral-700 mb-2">
          Estimated Number of Photos
        </label>
        <select
          id="estimatedPhotos"
          {...register("estimatedPhotos")}
          disabled={status === "loading"}
          className={`w-full px-4 py-3 border border-neutral-300 rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            status === "loading" ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <option value="">Select a range</option>
          <option value="less-100">Less than 100</option>
          <option value="100-500">100 - 500</option>
          <option value="500-1000">500 - 1,000</option>
          <option value="1000-5000">1,000 - 5,000</option>
          <option value="5000-plus">More than 5,000</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          {...register("message")}
          disabled={status === "loading"}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-primary focus:border-primary transition-all ${
            errors.message ? "border-accent" : "border-neutral-300"
          } ${status === "loading" ? "opacity-60 cursor-not-allowed" : ""}`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-accent flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : "active:scale-95"
        }`}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-sm text-neutral-600">
        * Required fields. We'll respond within 24 hours.
      </p>
    </form>
  );
}
