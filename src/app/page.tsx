import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import ClickableCarousel from "@/components/ui/ClickableCarousel";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import TypicalProjects from "@/components/sections/TypicalProjects";
import TrustFAQ from "@/components/sections/TrustFAQ";

export const metadata: Metadata = {
  title: "Pictures With Magic | Photo Organization | Photo Restoration | Boca Raton, FL",
  description: "Professional photo scanning, organization, and restoration services in Boca Raton, FL. Serving Palm Beach, Broward, Pinellas, and Hillsborough counties. Preserve your precious memories with our certified Photo Manager.",
  keywords: [
    "photo organization Boca Raton",
    "photo restoration Florida",
    "photo scanning Palm Beach County",
    "memory preservation",
    "digital photo conversion",
    "certified photo manager",
    "photo albums",
    "legacy books",
    "Pictures With Magic",
  ],
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Don't let your memories slip away */}
      <section className="py-6 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-semibold text-primary italic">
            Don't let your memories slip away.
          </p>
        </div>
      </section>

      {/* Remember when... Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-12">
            <ClickableCarousel
              images={[
                "/images/carousel/happy-memory.png",
                "/images/carousel/remember-when.png",
                "/images/carousel/true-value-of-memories.png",
              ]}
              alt="Family memories - precious moments"
              width={1200}
              height={300}
            />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              We can help manage your photo collection
            </h3>
            <p className="text-lg text-primary font-semibold mb-6">
              Photo Organization & Photo Management services
            </p>
            <CTAButton variant="primary" size="md" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium max-w-2xl mx-auto">
              Transform your precious memories into organized, preserved treasures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link href="/services/scan-photos" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photo-scanning-service.jpg"
                    alt="Photo scanning service - Kodak scanner with photos"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    Photo Scanning
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Convert your printed photos to high-quality digital images
                  </p>
                  <span className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link href="/services/organize" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photo-organization-service.png"
                    alt="Photo organization service - organized photo boxes and binders"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    Photo Organization
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Organize and categorize your memories for easy access
                  </p>
                  <span className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link href="/services/bring-to-life" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/photo-restoration-before-after.png"
                    alt="Photo restoration service"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    Photo Restoration
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Restore damaged or faded photos to their original beauty
                  </p>
                  <span className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials Preview */}
      <TestimonialsPreview />

      {/* Typical Projects */}
      <TypicalProjects featuredOnly={true} />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
              Why Choose Pictures With Magic?
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Professional service with a personal touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Professional Quality
                </h3>
                <p className="text-neutral-600">
                  High-resolution scanning and expert restoration techniques
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Safe & Secure
                </h3>
                <p className="text-neutral-600">
                  Your precious memories are handled with care and security
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Fast Turnaround
                </h3>
                <p className="text-neutral-600">
                  Efficient service without compromising on quality
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Personal Service
                </h3>
                <p className="text-neutral-600">
                  One-on-one consultation and customized solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust FAQ */}
      <TrustFAQ
        title="Questions? We've Got Answers"
        description="Everything you need to know about preserving your precious memories"
        limit={5}
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Preserve Your Memories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get started today with a free consultation
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </>
  );
}
