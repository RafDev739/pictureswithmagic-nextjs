import type { Metadata } from "next";
import Link from "next/link";
import GalleryWithLightbox from "@/components/gallery/GalleryWithLightbox";

export const metadata: Metadata = {
  title: "Alterations Gallery",
  description: "View examples of photo enhancements and creative alterations",
};

const galleryImages = [
  "/images/ef84239f16ac3ebd.jpg",
  "/images/05ca31da4cb15797.jpg",
  "/images/093aa11193678559.jpg",
  "/images/0cb688cb9101f1bd.jpg",
  "/images/0f1cc06c5baa7f70.jpg",
  "/images/11a4abd9a5d221f4.jpg",
  "/images/138041f2d6a85b3a.jpg",
  "/images/15fef50843bdc4bf.jpg",
  "/images/19890b6f4403a137.jpg",
  "/images/1af605093477c185.jpg",
  "/images/1faf41ddac931b7e.jpg",
  "/images/21a41479fe509866.jpg",
];

export default function AlterationsGalleryPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-heading">
              Alterations Gallery
            </h1>
            <p className="text-xl text-neutral-600">
              Examples of photo enhancements and creative alterations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GalleryWithLightbox
              images={galleryImages}
              altPrefix="Alteration example"
            />
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Love What You See?</h3>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Let us bring the same magic to your photos. Contact us today to get started.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
              >
                Request This Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
