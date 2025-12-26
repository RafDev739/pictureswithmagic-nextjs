import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Our Process | How It Works | Pictures With Magic",
  description: "Learn how we preserve your precious memories through our simple 3-step process. From free consultation to organized, preserved photos - we handle everything with care.",
  keywords: ["photo preservation process", "how it works", "photo scanning process", "photo organization workflow", "memory preservation"],
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-background-sky to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
              How It Works
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Our simple, professional process ensures your precious memories are preserved with care
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12 font-heading">
              Simple, Professional, and Personalized
            </h2>

            {/* Step 1 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      Schedule Your Free Consultation
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-600 mb-4">
                    Contact us to discuss your project. We'll learn about your goals, assess your collection, and provide a custom quote. No obligation, no pressure - just helpful guidance from a Certified Photo Manager.
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Free assessment of your photo collection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom quote tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Clear timeline and expectations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      We Preserve Your Memories
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-600 mb-4">
                    Your photos never leave our careful hands. We scan, organize, or restore your photos using professional-grade equipment and proven methodologies. Local pickup and delivery available in Palm Beach and Broward Counties.
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Professional 600 DPI scanning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Safe handling with archival gloves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Regular progress updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      Enjoy & Share Your Memories
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-600 mb-4">
                    Receive your beautifully organized digital collection or custom photo album. Your memories are ready to share with family, display proudly, or preserve for future generations.
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>High-resolution digital files on USB drive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Organized folders with clear naming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Backup copies for safekeeping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t border-neutral-200">
              <CTAButton variant="primary" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 md:py-24 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12 font-heading">
              Additional Ways We Can Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Workshops */}
              <Link href="/training" className="group">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 group-hover:text-accent transition-colors">
                      Workshops & Training
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Learn to organize your own photos with our hands-on workshops. Perfect for DIY enthusiasts who want expert guidance.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-neutral-700">• Save Your Photos Day</p>
                    <p className="text-sm font-medium text-neutral-700">• Sip & Sort Workshop</p>
                  </div>
                  <span className="inline-flex items-center text-accent font-medium mt-4 group-hover:translate-x-1 transition-transform">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Resources */}
              <Link href="/resources" className="group">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                      Helpful Resources
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Access our library of guides, tips, and best practices for photo preservation and organization.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-neutral-700">• Photo Preservation Tips</p>
                    <p className="text-sm font-medium text-neutral-700">• Organization Best Practices</p>
                    <p className="text-sm font-medium text-neutral-700">• Digital Storage Guide</p>
                  </div>
                  <span className="inline-flex items-center text-primary font-medium mt-4 group-hover:translate-x-1 transition-transform">
                    Explore Resources
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's preserve your precious memories together
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
