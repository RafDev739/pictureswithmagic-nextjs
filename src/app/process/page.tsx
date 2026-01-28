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

      {/* How It Works - 3 Services × 3 Steps Each */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8 font-heading">
              Simple, Professional, and Personalized
            </h2>

            {/* Intro Paragraph */}
            <p className="text-lg text-neutral-600 mb-16 text-center max-w-3xl mx-auto">
              After our initial complimentary phone call, I have a discovery session with you to make an inventory of the material and have a better idea of the size of the collection and types of media in it. After the discovery session, I prepare a plan and send it to you for approval.
            </p>

            {/* Section 1: Printed Photos */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">📷</span>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  Printed Photos
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1: Organize */}
                <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <span className="text-2xl">📋</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Organize</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Work together to decide how you'd like your photos organized. I work in sessions of 3-4 hours each to organize your photos, dismount albums, unframe photos, and sort by date, event, or person until the organizing phase is complete.
                  </p>
                </div>

                {/* Step 2: Digitize */}
                <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <span className="text-2xl">🖨️</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Digitize</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Together we select which photos will be scanned. Professional high-resolution scanning preserves every detail. Photos are organized digitally in folders following the agreed order, with consistent naming conventions. The price of scanning is separate from the sessions.
                  </p>
                </div>

                {/* Step 3: Store */}
                <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <span className="text-2xl">📦</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Store</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Physical photos are carefully placed into acid-free archival boxes for long-term preservation. Digital copies are saved to an External Hard Drive. The size of archival boxes and EHD depends on your collection size. (Archival boxes and EHD are priced separately.)
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Digital Photos */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">💻</span>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  Digital Photos
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1: Plan */}
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <span className="text-2xl">📝</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Plan</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    I prepare a detailed plan and scope of the project based on the tasks involved. Together we review and decide on the plan of action tailored to your digital photo collection needs.
                  </p>
                </div>

                {/* Step 2: Organize */}
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <span className="text-2xl">🔄</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Organize</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Working in sessions, I perform tasks such as: culling (removing duplicates and unwanted photos), de-duplication, organizing into logical folder structures, and adding metadata or tags for easy searching.
                  </p>
                </div>

                {/* Step 3: Back Up */}
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <span className="text-2xl">💾</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Back Up</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Your organized digital collection is securely backed up. Files are delivered on an External Hard Drive or cloud storage of your choice. I provide guidance on maintaining a reliable backup strategy (3-2-1 rule: 3 copies, 2 different media types, 1 offsite).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Photo Albums */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">📚</span>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  Photo Albums
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1: Design */}
                <div className="bg-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <span className="text-2xl">🎨</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Design</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    We work together to decide the theme, size, and style of your photo book. You select the photos to include. I help curate the best images and suggest layouts that tell your story beautifully.
                  </p>
                </div>

                {/* Step 2: Review */}
                <div className="bg-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <span className="text-2xl">✏️</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Review</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Continuous reviews are made with you throughout the design process. Necessary adjustments are incorporated. If modifications result in a change to the approved project scope, there may be an additional charge.
                  </p>
                </div>

                {/* Step 3: Deliver */}
                <div className="bg-secondary/5 rounded-xl p-6 border-l-4 border-secondary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <span className="text-2xl">🎁</span>
                    <h4 className="text-lg font-semibold text-neutral-900">Deliver</h4>
                  </div>
                  <p className="text-lg text-neutral-600">
                    Once approved, the album is sent to the printing company selected with you. The price of printing depends on the printer chosen and does not depend on Pictures With Magic. Your finished album is delivered ready to enjoy and share.
                  </p>
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
