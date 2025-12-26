import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import BookingHero from "@/components/sections/BookingHero";
import WhatToExpect from "@/components/ui/WhatToExpect";
import QuickContact from "@/components/ui/QuickContact";
import ContactFAQ from "@/components/ui/ContactFAQ";

export const metadata: Metadata = {
  title: "Book Your Free Consultation | Pictures With Magic",
  description: "Schedule a free, no-obligation consultation for photo scanning, organization, and restoration services. Serving Palm Beach, Broward, Pinellas, and Hillsborough counties.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BookingHero />

      {/* Main Content: Split Layout */}
      <section className="py-16 md:py-20 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Contact Form */}
            <div>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2 font-heading">
                  Tell Us About Your Project
                </h2>
                <p className="text-neutral-600 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Information */}
            <div className="space-y-6">
              {/* What to Expect */}
              <WhatToExpect />

              {/* Quick Contact Options */}
              <QuickContact />

              {/* Mini FAQ */}
              <ContactFAQ />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
