import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Milagros 'Mili' Parra Castro, certified Photo Manager and founder of Pictures With Magic in Boca Raton, FL. Bilingual photo organization and preservation services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-heading">
              About Us
            </h1>
            <p className="text-xl text-neutral-600">
              Passionate about preserving your precious memories
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Meet Milagros "Mili" Parra Castro</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Originally from Caracas, Venezuela, I was born in a big family with many beautiful traditions. I have three wonderful children and four adorable grandchildren. My love for photography and preserving memories has been a lifelong passion that I've turned into my mission.
              </p>
            </div>

            {/* Journey */}
            <div className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">My Journey</h3>
              <p className="text-neutral-700 leading-relaxed">
                In 2010, I founded Pictures With Magic just to discover that people needed a lot of help finding and organizing their photos. In 2012, I attended a NAPO (National Association of Productivity & Organizing Professionals) meeting where a photo organizer was presenting. That was a big <strong>AHA! moment</strong> for me.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                I became an active member of The Photo Managers (formerly known as the Association of Personal Photo Organizers - APPO) in 2012. By 2013, I got my APPO certification and renewed it in 2020 as a <strong>Certified Photo Manager</strong>.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-background-sky-light rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Professional Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700"><strong>Certified Photo Manager</strong> - The Photo Managers (2020)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700"><strong>APPO Certification</strong> - Association of Personal Photo Organizers (2013)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700"><strong>Active Member</strong> - The Photo Managers Association (since 2012)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700"><strong>Participant</strong> - Save Your Photos Month Alliance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700"><strong>Bilingual Services</strong> - English & Spanish</span>
                </li>
              </ul>
            </div>

            {/* Book */}
            <div className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Published Author</h3>
              <p className="text-neutral-700 leading-relaxed">
                In 2019, I decided to write a book in Spanish to help Spanish-speaking families preserve their memories. It was published in September 2020 on Amazon: <strong className="text-primary">"Una Foto... Y la vida resplandece de nuevo"</strong> (A Photo... And life shines again). The book shares my passion for photo preservation and provides practical guidance for organizing family memories.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-0">
                To help families preserve their precious memories for generations to come. Whether you have boxes of old prints, slides, or digital files scattered across multiple devices, Pictures With Magic is here to bring order, beauty, and accessibility to your photo collection. We understand that your photos aren't just images—they're your family's legacy.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="prose prose-lg max-w-none mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Choose Pictures With Magic?</h3>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Professional Certification</h4>
                    <p className="text-neutral-600 text-sm">Certified Photo Manager with specialized training in preservation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">14+ Years Experience</h4>
                    <p className="text-neutral-600 text-sm">Since 2010, helping families preserve their memories</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Bilingual Services</h4>
                    <p className="text-neutral-600 text-sm">Full services available in English and Spanish</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Personal Touch</h4>
                    <p className="text-neutral-600 text-sm">Customized solutions for your unique family story</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Secure & Trusted</h4>
                    <p className="text-neutral-600 text-sm">Safe handling of your irreplaceable memories</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Local Service</h4>
                    <p className="text-neutral-600 text-sm">Serving Palm Beach, Broward, Pinellas & Hillsborough counties</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-neutral-700 mb-6">
                Ready to preserve your family's precious memories?
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get in Touch Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
