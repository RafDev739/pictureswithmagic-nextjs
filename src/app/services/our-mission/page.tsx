import type { Metadata } from "next";
import Link from "next/link";
import ScenarioCard from "@/components/ui/ScenarioCard";

export const metadata: Metadata = {
  title: "Our Business is About Your Memories | Pictures With Magic",
  description: "Learn how we help you preserve, share, and celebrate your precious memories through our personalized photo services.",
  keywords: ["photo memories", "memory preservation", "photo gifts", "custom photo services", "Pictures With Magic"],
};

export default function OurMissionPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
              Our Business is About Your Memories!
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
              There are many services we can provide to address your needs. However, we felt you will relate more if we answer some common questions people have when it comes to photos and memories. Here we go:
            </p>

            <div className="space-y-8">
              <ScenarioCard
                question="I just came from my best friend wedding with my family, we all took lots of photos. I would like to give the couple a nice present using the photos we took."
                answer="It is a wonderful feeling to relive those memories from a special event. Our Bring Your Memories to Life service will gather those photos and provide with the option of a customized Photo Album with captions telling your story, or a customized Slide Show with your preferred music."
                ctaText="Bring Your Memories to Life"
                ctaLink="/services/bring-to-life"
              />

              <ScenarioCard
                question="My niece is getting married, I want to give her something different that she will remember forever."
                answer="Sometimes the simplest gift can give somebody the best satisfaction. Our Express Your Feelings service can give your niece that pleasure by just combining pictures in a elegant and beautiful way."
                ctaText="Express Your Feelings"
                ctaLink="/services/express-feelings"
                variant="secondary"
              />

              <ScenarioCard
                question="My grandparents are celebrating their 50th anniversary, what can I give them?"
                answer="There is so much you can do with just one photo. If it is an old photo from their wedding, we can make it look like new using our As Good As New service, and make them look their best with our Cosmetic Digital Surgery. Imagine your grandparents face when you give them that gift."
                ctaText="As Good As New"
                ctaLink="/services/all-about-photos"
              />

              <div className="text-center mt-12">
                <p className="text-lg text-accent font-semibold">
                  And some more...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Have a Question About Our Services?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            We're here to help you preserve and share your precious memories
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
