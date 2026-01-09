import type { Metadata } from "next";
import Link from "next/link";
import GalleryWithLightbox from "@/components/gallery/GalleryWithLightbox";

export const metadata: Metadata = {
  title: "Photo Organization Gallery",
  description: "Examples of organized photo collections and digital albums",
};

const galleryImages = [
  "/images/4980820c0fe49684.jpg",
  "/images/4f051043e8e59706.jpg",
  "/images/c17554ce283757c8.jpg",
  "/images/6aec02dc4a3c88d2.jpg",
  "/images/42a3109d57fec1f2.jpg",
  "/images/ca2b2729adde7257.jpg",
  "/images/cb74ef0d0db9411c.jpg",
  "/images/d22ae141cc63c7b8.jpg",
  "/images/d4827fb137096578.jpg",
  "/images/d9427918fd154657.jpg",
  "/images/e205e8bbc15b3d97.jpg",
  "/images/e9d5e3b57541e44a.jpg",
];

export default function OrganizationGalleryPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/galleries" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Galleries
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
              Photo Organization Gallery
            </h1>
            <p className="text-xl text-neutral-600">
              Examples of organized photo collections and digital albums
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GalleryWithLightbox
              images={galleryImages}
              altPrefix="Organization example"
            />
            <div className="mt-16 text-center bg-primary py-12 px-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Get Your Photos Organized</h3>
              <p className="text-white mb-8 max-w-2xl mx-auto">
                Transform your chaotic photo collection into a beautifully organized digital library.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
              >
                Start Organizing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
