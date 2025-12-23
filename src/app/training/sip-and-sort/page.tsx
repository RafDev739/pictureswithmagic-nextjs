import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sip & Sort Workshop",
  description: "Fun, social workshop to organize your photos while enjoying refreshments",
};

export default function SipAndSortPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/training" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Training
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-heading">
              Sip & Sort Workshop
            </h1>
            <p className="text-xl text-neutral-600">
              Organize your photos in a fun, relaxed setting
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>What is Sip & Sort?</h2>
            <p>
              Sip & Sort is our signature workshop where organizing your photos becomes a social, enjoyable experience. Bring your photos, enjoy refreshments, and get professional guidance in a relaxed group setting.
            </p>

            <h3>Workshop Includes</h3>
            <ul>
              <li>Comfortable workspace with all necessary supplies</li>
              <li>Refreshments and light snacks</li>
              <li>Professional guidance and tips throughout</li>
              <li>Organizational tools and supplies</li>
              <li>A supportive, social atmosphere</li>
              <li>Special pricing on additional services</li>
            </ul>

            <h3>What to Bring</h3>
            <ul>
              <li>Your photos (as many or as few as you'd like)</li>
              <li>Any albums or boxes they're currently in</li>
              <li>Questions about photo organization</li>
              <li>A friend or family member (optional but fun!)</li>
            </ul>

            <h3>Perfect For</h3>
            <p>
              Whether you're feeling overwhelmed by boxes of photos or just want to get more organized, our Sip & Sort workshop provides the motivation, guidance, and social support you need to make real progress.
            </p>

            <div className="not-prose mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
                Reserve Your Spot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
