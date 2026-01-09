import type { Metadata } from "next";
import Link from "next/link";
import GalleryWithLightbox from "@/components/gallery/GalleryWithLightbox";

export const metadata: Metadata = {
  title: "Photo Albums Gallery",
  description: "Beautiful photo albums and memory books we've created",
};

const galleryImages = [
  "/images/11a4abd9a5d221f4.jpg",
  "/images/cbb2f5d05180c52d.jpg",
  "/images/d24206e8ce644665.jpg",
  "/images/d4c2a2b7eaef83cd.jpg",
  "/images/d5e28bdf65cb55ff.jpg",
  "/images/dbbf275f4cf8dd54.jpg",
  "/images/dec7bf18bada78ad.jpg",
  "/images/e45175ff4907d814.jpg",
  "/images/e5f1a0adc40eeb5c.jpg",
  "/images/eae49419730fc36f.jpg",
  "/images/ed10267ab7c19b28.jpg",
  "/images/f0bd0e4dfdb2f0f7.jpg",
];

export default function AlbumsGalleryPage() {
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
              Photo Albums Gallery
            </h1>
            <p className="text-xl text-neutral-900">
              Beautiful photo albums and memory books we've created
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GalleryWithLightbox
              images={galleryImages}
              altPrefix="Photo album example"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Create Your Custom Album</h3>
            <p className="text-white text-lg mb-8">
              Design a beautiful memory book that tells your unique story in stunning detail.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
            >
              Order Your Album
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
