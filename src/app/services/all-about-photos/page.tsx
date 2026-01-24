import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "@/components/ui/BeforeAfter";
import CTAButton from "@/components/ui/CTAButton";
import PhotoGrid from "@/components/ui/PhotoGrid";

export const metadata: Metadata = {
  title: "All About Photos | Restoration & Enhancement Services | Boca Raton",
  description: "Comprehensive photo restoration services including photo repair, object removal, and cosmetic digital surgery. Transform damaged or outdated photos into beautiful memories.",
  keywords: ["photo restoration", "photo repair", "photo enhancement", "object removal", "digital surgery", "Boca Raton"],
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

export default function AllAboutPhotosPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary-dark mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
              All About Photos
            </h1>
          </div>
        </div>
      </section>

      {/* Photo Restoration Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
              Photo Restoration
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-5xl">
              Those old photos stored in boxes, with all those memories. As part of our photo restoration service, we can make those old photos look as good as new, and as part of our scanning services, we bring them to the digital world for you to share with your family.
            </p>
            <PhotoGrid images={restorationImages} columns={4} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* All About Me */}
            <BeforeAfter
              title="All About Me"
              description="There is always that photo where you wish you could take away some persons / objects from the photo. As part of our photo montage services, we can make people and objects disappear."
              beforeImage="/images/cbb2f5d05180c52d.jpg"
              afterImage="/images/11a4abd9a5d221f4.jpg"
              beforeAlt="Before editing: photo with unwanted objects or people"
              afterAlt="After editing: clean photo with objects removed"
            />

            <div className="text-center mb-16">
              <Link
                href="/galleries/alterations"
                className="text-primary hover:text-primary-dark font-semibold underline text-lg"
              >
                Photo Gallery
              </Link>
            </div>

            {/* Cosmetic Digital Surgery */}
            <BeforeAfter
              title="Cosmetic Digital Surgery"
              description="You want your photo to look the best. We make sure of that. As part of our photo restoration services, we can apply cosmetic surgery to your photo to take away wrinkles and blemishes."
              beforeImage="/images/4f051043e8e59706.jpg"
              afterImage="/images/c17554ce283757c8.jpg"
              beforeAlt="Before cosmetic enhancement: portrait with visible wrinkles and blemishes"
              afterAlt="After cosmetic enhancement: smoothed and enhanced portrait"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Love What You See?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Let us transform your photos into beautiful memories
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
