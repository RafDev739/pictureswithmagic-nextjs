import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      {/* Hero Section with Circular Icons */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background-sky to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Circular Icons Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 relative">
            {/* Icon 1 - Scanning */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 ring-4 ring-primary/10">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Dotted connector line */}
            <div className="hidden md:block w-24 lg:w-32 border-t-2 border-dashed border-accent/40 absolute top-16 md:top-20 left-1/3 transform -translate-x-12" />

            {/* Icon 2 - Organization */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 ring-4 ring-primary/10">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>

            {/* Dotted connector line */}
            <div className="hidden md:block w-24 lg:w-32 border-t-2 border-dashed border-accent/40 absolute top-16 md:top-20 right-1/3 transform translate-x-12" />

            {/* Icon 3 - Albums */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 ring-4 ring-primary/10">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-heading">
              Pictures with Magic
            </h1>
            <p className="text-2xl md:text-3xl text-accent mb-4 italic">
              Do you have a photo?...Then you have a memory...
            </p>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8">
              a whole world of stories to tell...
            </p>

            {/* May I help you? Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              May I help you?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                About Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
              >
                For a Free Consultation
              </Link>
            </div>

            <Link
              href="/galleries"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Visit our Gallery
            </Link>
          </div>
        </div>
      </section>

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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center font-heading">
            Remember when....
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/images/cbb2f5d05180c52d.jpg"
                alt="Nostalgic family memories - gathering around the table"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/images/11a4abd9a5d221f4.jpg"
                alt="Nostalgic family memories - children playing at the beach"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/images/4f051043e8e59706.jpg"
                alt="Nostalgic family memories - precious moments with loved ones"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/images/c17554ce283757c8.jpg"
                alt="Nostalgic family memories - silhouettes at sunset"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              We can help manage your photo collection
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-lg text-primary font-semibold">
                Photo Organization & Photo Management services
              </p>
              <div className="flex gap-2 items-center">
                <span className="text-lg text-neutral-600">For a Free Consultation</span>
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-dark font-semibold underline"
                >
                  Contact US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Transform your precious memories into organized, preserved treasures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link href="/services/scan-photos" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/11a4abd9a5d221f4.jpg"
                    alt="Photo scanning service"
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
                    src="/images/4f051043e8e59706.jpg"
                    alt="Photo organization service"
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
                    src="/images/c17554ce283757c8.jpg"
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
      <section className="py-16 md:py-24 bg-background-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Why Choose Pictures With Magic?
            </h2>
            <p className="text-lg text-neutral-600">
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
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
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Preserve Your Memories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get started today with a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
