import type { Metadata } from "next";
import Link from "next/link";
import GalleryWithLightbox from "@/components/gallery/GalleryWithLightbox";

export const metadata: Metadata = {
  title: "Alterations Gallery",
  description: "View examples of photo enhancements and creative alterations",
};

const galleryImages = [
  "/images/1 BrideColor-Orig.JPG",
  "/images/2 BridedB&W&FlowersColor-V2.jpg",
  "/images/3 ConVaso-aOrig.jpg",
  "/images/4 ConVaso-Editada.jpg",
  "/images/1 aPommelHorse-Orig.jpg",
  "/images/2 Gemini_Generated_Image_ywocfgywocfgywoc.png",
  "/images/3 Grupo-4-Original.jpg",
  "/images/4 Grupo-4-Menos2.jpg",
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Love What You See?</h3>
            <p className="text-white mb-8 max-w-2xl mx-auto">
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
      </section>
    </div>
  );
}
