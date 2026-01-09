import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Photo Galleries | Before & After Examples | Restoration & Organization",
  description: "Browse our photo restoration, alteration, and organization gallery. See real examples of photo preservation, legacy books, and custom memory projects from Pictures With Magic.",
  keywords: ["photo gallery", "restoration examples", "before and after", "photo alteration", "legacy books", "memory preservation", "photo albums"],
};

const galleries = [
  {
    title: "Alterations Gallery",
    href: "/galleries/alterations",
    description: "See examples of photo enhancements and creative alterations",
    count: "25+ photos",
    image: "/images/ef84239f16ac3ebd.jpg",
  },
  {
    title: "Restorations",
    href: "/galleries/restorations",
    description: "Before and after examples of our photo restoration work",
    count: "30+ photos",
    image: "/images/fb2057f01490e8f8.jpg",
  },
  {
    title: "Photo Organization",
    href: "/galleries/organization",
    description: "Examples of organized photo collections and digital albums",
    count: "20+ photos",
    image: "/images/4980820c0fe49684.jpg",
  },
  {
    title: "Express Your Feelings",
    href: "/galleries/express-feelings",
    description: "Custom photo gifts, presentations, and creative projects",
    count: "15+ photos",
    image: "/images/cbb2f5d05180c52d.jpg",
  },
  {
    title: "Photo Albums",
    href: "/galleries/albums",
    description: "Beautiful photo albums and memory books we've created",
    count: "18+ photos",
    image: "/images/11a4abd9a5d221f4.jpg",
  },
];

export default function GalleriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              Photo Galleries
            </h1>
            <p className="text-xl text-neutral-600">
              Explore our portfolio of photo restoration, organization, and enhancement projects
            </p>
          </div>
        </div>
      </section>

      {/* Galleries Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => (
              <Link
                key={gallery.href}
                href={gallery.href}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-neutral-900 text-sm font-medium px-3 py-1 rounded-full">
                        {gallery.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {gallery.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {gallery.description}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      View Gallery
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
            Ready to Preserve Your Memories?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let us help you create beautiful results like these
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
