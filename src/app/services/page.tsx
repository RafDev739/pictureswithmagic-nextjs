import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import HowItWorks from "@/components/sections/HowItWorks";

export const metadata: Metadata = {
  title: "Photo Services | Scanning, Organization & Restoration | Boca Raton, FL",
  description: "Professional photo preservation services including scanning, organization, and restoration. Certified Photo Manager serving South Florida with local pickup & delivery.",
  keywords: ["photo scanning", "photo organization", "photo restoration", "memory preservation", "Boca Raton services", "South Florida"],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-4">
              Transform your precious memories into organized, preserved treasures
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              From scanning and organizing to restoring and creating custom albums, we offer comprehensive photo preservation services tailored to your needs.
            </p>
            <CTAButton variant="primary" size="lg" />
          </div>
        </div>
      </section>

      {/* Core Services Cards */}
      <section className="py-16 md:py-24 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
              Core Services
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium max-w-2xl mx-auto">
              Professional solutions for every photo preservation need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Photo Scanning */}
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

            {/* Photo Organization */}
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

            {/* Photo Restoration */}
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
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

      {/* How It Works */}
      <HowItWorks />

      {/* View All Services Link */}
      <section className="py-12 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-600 mb-4">
            Looking for our complete catalog of services?
          </p>
          <Link
            href="/services/all"
            className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

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
    </div>
  );
}
