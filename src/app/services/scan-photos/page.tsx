import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Modernize Your Memories | Photo Scanning Services | Boca Raton",
  description: "Modernize your memories with professional 600 DPI photo scanning. Convert printed photos, slides, and negatives to high-quality digital images. Local pickup & delivery in Palm Beach and Broward counties.",
  keywords: ["photo scanning", "600 DPI scanning", "digital conversion", "photo digitization", "slides scanning", "negatives scanning", "Boca Raton"],
};

export default function ScanPhotosPage() {
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
              Modernize Your Memories
            </h1>
          </div>
        </div>
      </section>

      {/* Scanning Equipment Images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md border border-neutral-200">
                <Image
                  src="/images/11a4abd9a5d221f4.jpg"
                  alt="Professional photo scanning equipment showing flatbed scanner with photo collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md border border-neutral-200">
                <Image
                  src="/images/4f051043e8e59706.jpg"
                  alt="Photo scanning setup with digital display showing scanned images"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mb-12">
              <ul className="space-y-3 text-lg text-primary mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Have pictures that want to share with family and friends?
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Have old albums, shoeboxes or drawers full of pictures with a story to tell?
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Want to make sure that you preserve your history for your loved ones?
                </li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
                Just imagine the possibilities....
              </h2>

              <ul className="space-y-3 text-lg text-neutral-700 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Being able to tell about old friends, old places, vacations.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Distribute copies to family and friends.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Create new albums combining the new with the old.
                </li>
              </ul>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
                We are here to help you...
              </h2>

              <ul className="space-y-3 text-lg text-neutral-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  We provide fast, efficient, and affordable scan services.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Concerned about mailing your photos?. We are! We pick up and deliver in Palm Beach and Broward Counties**.
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Concerned about very old or damaged pictures or album?. Let us look at it, we have years of experience in restoration.
                </li>
              </ul>
            </div>

            {/* Scan Photo Services Section */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center font-heading">
                Scan Photo Services
              </h2>

              <div className="text-center mb-6">
                <p className="text-lg text-neutral-700 mb-2">
                  We scan loose photos in good condition (no fragile, ripped, bended or heritage)
                </p>
                <p className="text-lg font-semibold text-primary">
                  as 600 DPI Direct Scan. Size 3x3 to 8x10.
                </p>
              </div>

              <p className="text-lg text-neutral-700 text-center mb-6">
                We offer special scan services for fragile, under or oversized photos, albums,<br />
                and memorabilia.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <p className="text-lg text-neutral-700">
                  All photos will be scanned in the same order as received. Any required organization is additional.
                </p>
                <p className="text-lg font-semibold text-primary mt-4">
                  For Oversized or fragile items contact us for a free estimate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Ready to Modernize Your Memories?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation today
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
