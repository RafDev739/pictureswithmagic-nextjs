import Link from 'next/link';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPreview() {
  // Get only featured testimonials
  const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium max-w-2xl mx-auto">
            Real stories from families we have helped preserve their precious memories
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-5xl mx-auto space-y-6 mb-10">
          {featuredTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>

        {/* Read All Reviews Link */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            Read All Reviews
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
