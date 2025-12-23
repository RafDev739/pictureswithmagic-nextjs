import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Organization Workshops | Save Your Photos Day | Sip & Sort",
  description: "Interactive photo organization workshops and training events. Learn memory preservation from a certified Photo Manager. Save Your Photos Day participant and Sip & Sort events available.",
  keywords: ["photo workshops", "Save Your Photos Day", "Sip and Sort", "photo organization training", "memory preservation workshop", "Florida workshops"],
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-heading">
              Training & Workshops
            </h1>
            <p className="text-xl text-neutral-600">
              Learn how to organize and preserve your own photo collections
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Link href="/training/save-photos-day" className="block bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg hover:border-primary/50 transition-all">
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">Save Your Photos Day</h2>
              <p className="text-neutral-600 mb-4">
                Join us for a special event dedicated to helping you preserve and protect your precious memories. Learn professional techniques and get hands-on assistance.
              </p>
              <span className="inline-flex items-center text-primary font-medium">
                Learn More →
              </span>
            </Link>

            <Link href="/training/sip-and-sort" className="block bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg hover:border-primary/50 transition-all">
              <h2 className="text-2xl font-bold text-neutral-900 mb-3">Sip & Sort Workshop</h2>
              <p className="text-neutral-600 mb-4">
                A fun, social workshop where you bring your photos and we help you organize them. Enjoy refreshments while learning photo organization skills in a relaxed setting.
              </p>
              <span className="inline-flex items-center text-primary font-medium">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Want to Learn More?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us to learn about upcoming workshops and training sessions
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
