import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photo Services | Scanning, Organization & Restoration | Boca Raton, FL",
  description: "Comprehensive photo preservation services including scanning, organization, restoration, and legacy books. Professional certified Photo Manager serving South Florida. Local pickup & delivery available.",
  keywords: ["photo scanning", "photo organization", "photo restoration", "legacy books", "memory preservation", "Boca Raton services", "South Florida"],
};

const services = [
  {
    title: "Scan Your Printed Photos",
    href: "/services/scan-photos",
    description: "Convert your printed photos to high-quality digital images. Preserve your memories forever with professional scanning services.",
    image: "/images/scanning-process.png",
  },
  {
    title: "Organize Your Memories",
    href: "/services/organize",
    description: "Sort, categorize, and organize your photos for easy access. Create a system that makes finding memories simple.",
    image: "/images/organize-memories.png",
  },
  {
    title: "Bring Your Memories to Life",
    href: "/services/bring-to-life",
    description: "Professional photo restoration services. Repair damaged, faded, or torn photos to their original beauty.",
    image: "/images/bring-memories-to-life.jpg",
  },
  {
    title: "All About Photos",
    href: "/services/all-about-photos",
    description: "Comprehensive photo services including digitization, enhancement, and archival solutions.",
    image: "/images/all-about-photos.png",
  },
  {
    title: "Express Your Feelings",
    href: "/services/express-feelings",
    description: "Create personalized photo gifts and presentations that express your emotions and tell your story.",
    image: "/images/express-feelings.jpg",
  },
  {
    title: "Our Business Mission",
    href: "/services/our-mission",
    description: "Learn about our commitment to preserving your precious memories with care, quality, and dedication.",
    image: "/images/caccb1d7750c460f.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              Our Services
            </h1>
            <p className="text-xl text-neutral-600">
              Professional photo services to preserve, organize, and enhance your precious memories
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-600 mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation about your photo preservation needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-medium"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
