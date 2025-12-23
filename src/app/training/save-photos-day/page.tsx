import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Save Your Photos Day",
  description: "Join our Save Your Photos Day event to learn how to preserve and protect your memories",
};

export default function SavePhotosDayPage() {
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
              Save Your Photos Day
            </h1>
            <p className="text-xl text-neutral-600">
              A special event dedicated to preserving your precious memories
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>What is Save Your Photos Day?</h2>
            <p>
              Save Your Photos Day is an annual event where we help you take the first steps in preserving your family memories. Bring your photos, and we'll provide expert guidance, tools, and support.
            </p>

            <h3>What to Expect</h3>
            <ul>
              <li>Free consultations with photo preservation experts</li>
              <li>Hands-on assistance with organizing your photos</li>
              <li>Learn best practices for digital and physical storage</li>
              <li>Demonstrations of scanning and restoration techniques</li>
              <li>Take-home resources and guides</li>
            </ul>

            <h3>Who Should Attend?</h3>
            <p>
              This event is perfect for anyone with boxes of unsorted photos, family historians, or anyone who wants to learn how to properly preserve their memories for future generations.
            </p>

            <div className="not-prose mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
                Register for the Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
