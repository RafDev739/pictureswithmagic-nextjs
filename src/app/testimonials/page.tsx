import type { Metadata } from "next";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TestimonialFeatured from "@/components/ui/TestimonialFeatured";
import ReviewStats from "@/components/ui/ReviewStats";
import CTAButton from "@/components/ui/CTAButton";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Reviews | Testimonials | Pictures With Magic",
  description: "Read reviews from our satisfied clients about our photo preservation, scanning, organization, and restoration services. Real stories from real customers.",
  keywords: ["testimonials", "client reviews", "photo preservation reviews", "customer feedback", "Pictures With Magic reviews", "5-star rated"],
};

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              What Our Clients Say
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Real stories from families we have helped preserve their precious memories
            </p>

            {/* Review Statistics */}
            <ReviewStats
              totalReviews={100}
              averageRating={5.0}
              serviceBreakdown={{
                scanning: 45,
                organization: 38,
                restoration: 32,
                albums: 28,
              }}
            />
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-3 font-heading text-center">
              Featured Reviews
            </h2>
            <p className="text-lg text-neutral-600 mb-12 text-center">
              Detailed testimonials from our most satisfied clients
            </p>

            <div className="space-y-8">
              {featuredTestimonials.map((testimonial, index) => (
                <TestimonialFeatured
                  key={index}
                  name={testimonial.name}
                  text={testimonial.text}
                  service={testimonial.service}
                  date={testimonial.date}
                  rating={testimonial.rating || 5}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      {regularTestimonials.length > 0 && (
        <section className="py-16 md:py-20 bg-background-sky">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-900 mb-12 font-heading text-center">
                More Client Reviews
              </h2>

              <div className="space-y-6">
                {regularTestimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    name={testimonial.name}
                    text={testimonial.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 100 satisfied families who have preserved their precious memories with us
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
