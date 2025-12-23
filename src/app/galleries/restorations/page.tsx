import type { Metadata } from "next";
import Link from "next/link";
import PhotoGrid from "@/components/ui/PhotoGrid";

export const metadata: Metadata = {
  title: "Restorations Gallery | Photo Restoration Examples | Pictures With Magic",
  description: "View our extensive portfolio of photo restoration work. See before and after examples of damaged, faded, and torn photos brought back to life.",
  keywords: ["photo restoration", "photo repair", "restoration examples", "before and after", "Pictures With Magic"],
};

const restorationImages = [
  { src: "/images/fb2057f01490e8f8.jpg", alt: "Restored vintage family portrait from the 1940s" },
  { src: "/images/ef84239f16ac3ebd.jpg", alt: "Faded wedding photo restored to original clarity" },
  { src: "/images/cbb2f5d05180c52d.jpg", alt: "Torn photograph professionally repaired and restored" },
  { src: "/images/11a4abd9a5d221f4.jpg", alt: "Color-corrected and enhanced family photo" },
  { src: "/images/4f051043e8e59706.jpg", alt: "Water-damaged photograph digitally restored" },
  { src: "/images/c17554ce283757c8.jpg", alt: "Sepia-toned portrait brought to vivid life" },
  { src: "/images/4980820c0fe49684.jpg", alt: "Cracked and damaged photo seamlessly repaired" },
  { src: "/images/caccb1d7750c460f.jpg", alt: "Faded military portrait restored with detail enhancement" },
  { src: "/images/d156ecd9e1fd2462.jpg", alt: "Scratched negative converted to beautiful print" },
  { src: "/images/d47e1b71de3eea12.jpg", alt: "Sun-damaged family photo color corrected" },
  { src: "/images/d573ea641a93d7ff.jpg", alt: "Torn edges and creases digitally removed" },
  { src: "/images/dc34bac6233f5f77.jpg", alt: "Faded colors enhanced and restored" },
  { src: "/images/e1ffbc5e4203cd30.jpg", alt: "Age spots and stains professionally removed" },
  { src: "/images/e7bc581e913eb184.jpg", alt: "Yellowed photograph color balanced" },
  { src: "/images/eb727e99ad7d1eb0.jpg", alt: "Missing corners reconstructed and filled" },
  { src: "/images/ee20baf2e9eab6a4.jpg", alt: "Contrast and exposure professionally adjusted" },
  { src: "/images/f4e05221e28f7ed1.jpg", alt: "Blemishes and wrinkles digitally removed" },
  { src: "/images/fb2057f01490e8f8.jpg", alt: "Vintage group photo sharpened and enhanced" },
  { src: "/images/ef84239f16ac3ebd.jpg", alt: "Damaged edges repaired and restored" },
  { src: "/images/cbb2f5d05180c52d.jpg", alt: "Faded childhood photo brought back to life" },
  { src: "/images/11a4abd9a5d221f4.jpg", alt: "Discolored photograph professionally corrected" },
  { src: "/images/4f051043e8e59706.jpg", alt: "Scratched surface digitally cleaned" },
  { src: "/images/c17554ce283757c8.jpg", alt: "Torn family photo seamlessly repaired" },
  { src: "/images/4980820c0fe49684.jpg", alt: "Faded colors restored to original vibrancy" },
  { src: "/images/caccb1d7750c460f.jpg", alt: "Water stains and damage removed" },
  { src: "/images/d156ecd9e1fd2462.jpg", alt: "Creased photograph flattened and restored" },
  { src: "/images/d47e1b71de3eea12.jpg", alt: "Lost details recovered through enhancement" },
  { src: "/images/d573ea641a93d7ff.jpg", alt: "Yellowing corrected with color balancing" },
  { src: "/images/dc34bac6233f5f77.jpg", alt: "Mold and mildew damage digitally removed" },
  { src: "/images/e1ffbc5e4203cd30.jpg", alt: "Faded graduation photo restored to clarity" },
  { src: "/images/e7bc581e913eb184.jpg", alt: "Damaged corners reconstructed professionally" },
  { src: "/images/eb727e99ad7d1eb0.jpg", alt: "Stained and spotted photo cleaned and restored" },
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

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
                  Restore Your Precious Memories
                </h3>
                <p className="text-neutral-700 mb-8 leading-relaxed">
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
          </div>
        </div>
      </section>
    </div>
  );
}
