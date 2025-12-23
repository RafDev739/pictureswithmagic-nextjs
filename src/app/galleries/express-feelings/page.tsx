import type { Metadata } from "next";
import Link from "next/link";
import GalleryWithLightbox from "@/components/gallery/GalleryWithLightbox";

export const metadata: Metadata = {
  title: "Express Your Feelings Gallery",
  description: "Custom photo gifts, presentations, and creative projects",
};

const galleryImages = [
  "/images/cbb2f5d05180c52d.jpg",
  "/images/ca937fc62a1a5848.jpg",
  "/images/cbdc932bc49f5ed3.jpg",
  "/images/cbe0a89fa8d80e4b.jpg",
  "/images/d17a6d821a12d1fd.jpg",
  "/images/d21bccacb6a61f78.jpg",
  "/images/d2de2f01f797b608.jpg",
  "/images/d49e852ae8424268.jpg",
  "/images/d53dd54d148466d5.jpg",
  "/images/dc8dc2ce4e61b905.jpg",
  "/images/e57ff8fd8d83bccb.jpg",
  "/images/eef04410a0330685.jpg",
];

export default function ExpressFeelingsGalleryPage() {
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
              Express Your Feelings Gallery
            </h1>
            <p className="text-xl text-neutral-600">
              Custom photo gifts, presentations, and creative projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GalleryWithLightbox
              images={galleryImages}
              altPrefix="Custom photo gift"
            />
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Express Your Emotions Through Photos</h3>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Create personalized photo gifts and presentations that capture and convey your deepest feelings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
              >
                Create Your Gift
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
