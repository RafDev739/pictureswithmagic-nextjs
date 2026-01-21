import type { Metadata } from "next";
import Link from "next/link";
import PhotoGrid from "@/components/ui/PhotoGrid";

export const metadata: Metadata = {
  title: "Restorations Gallery | Photo Restoration Examples | Pictures With Magic",
  description: "View our extensive portfolio of photo restoration work. See before and after examples of damaged, faded, and torn photos brought back to life.",
  keywords: ["photo restoration", "photo repair", "restoration examples", "before and after", "Pictures With Magic"],
};

const restorationImages = [
  { src: "/images/euginis-before.jpg", alt: "Euginis portrait - before restoration" },
  { src: "/images/euginis-after.jpg", alt: "Euginis portrait - after restoration" },
  { src: "/images/familia-before.jpg", alt: "Family photo - before restoration" },
  { src: "/images/familia-after.jpg", alt: "Family photo - after restoration" },
  { src: "/images/miliandycpb-before.jpg", alt: "MiliAndy portrait - before restoration" },
  { src: "/images/miliandycpb-after.jpg", alt: "MiliAndy portrait - after restoration" },
  { src: "/images/nina-before.jpg", alt: "Girl photo - before restoration" },
  { src: "/images/nina-after.jpg", alt: "Girl photo - after restoration" },
  { src: "/images/enbw-before.jpg", alt: "Black and white photo - before restoration" },
  { src: "/images/enbw-after.jpg", alt: "Black and white photo - after restoration" },
  { src: "/images/papa-violin-before.jpg", alt: "Papa with violin - before restoration" },
  { src: "/images/papa-violin-after.jpg", alt: "Papa with violin - after restoration" },
  { src: "/images/img0009-before.jpg", alt: "Portrait - before restoration" },
  { src: "/images/img0009-after.jpg", alt: "Portrait - after restoration" },
  { src: "/images/tita-radio-before.jpg", alt: "Tita Radio Capital - before restoration" },
  { src: "/images/tita-radio-after.jpg", alt: "Tita Radio Capital - after restoration" },
  { src: "/images/nieve-before.jpg", alt: "Comiendo Nieve - before restoration" },
  { src: "/images/nieve-after.jpg", alt: "Comiendo Nieve - after restoration" },
  { src: "/images/photo1-before.jpg", alt: "Photo 1 - before restoration" },
  { src: "/images/photo1-after.jpg", alt: "Photo 1 - after restoration" },
];

export default function RestorationsGalleryPage() {
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
              Restorations Gallery
            </h1>
            <p className="text-xl text-neutral-600">
              View our extensive portfolio of professional photo restoration work
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-lg text-neutral-700 mb-12 max-w-3xl mx-auto">
              Discover how we transform damaged, faded, torn, and discolored photographs into beautiful restored memories. Each image tells a story of preservation and renewal, bringing cherished moments back to life for future generations.
            </p>

            {/* Large Grid of Restoration Examples */}
            <PhotoGrid images={restorationImages} columns={4} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
              Restore Your Precious Memories
            </h3>
            <p className="text-white mb-8 leading-relaxed">
              Bring damaged, faded, or torn photos back to life with our professional restoration services. We handle everything from minor touch-ups to complete reconstructions, ensuring your family memories are preserved for generations to come.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl active:scale-95"
            >
              Request Restoration Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
