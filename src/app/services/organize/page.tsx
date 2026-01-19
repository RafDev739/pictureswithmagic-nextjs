import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PhotoGrid from "@/components/ui/PhotoGrid";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Organize Your Memories | Photo Organization Services | Florida",
  description: "Professional photo organization for printed and digital collections. Certified Photo Manager helping you find, sort, and preserve 100+ years of memories. Serving South Florida.",
  keywords: ["photo organization", "digital photo management", "printed photo organization", "memory preservation", "photo manager", "Florida"],
};

export default function OrganizePage() {
  const disorganizedPhotos = [
    { src: "/images/typical-collection.jpg", alt: "Typical photo collection with albums and binders" },
    { src: "/images/typical-collection-2.jpg", alt: "Collection of slides, film reels, and photo albums" },
    { src: "/images/photos-in-box.jpg", alt: "Photos stored in decorative box" },
    { src: "/images/magnetic-album.jpg", alt: "Open magnetic photo album with family photos" },
    { src: "/images/preparing-to-scan.png", alt: "Photos with white gloves ready for scanning" },
    { src: "/images/organized-storage.png", alt: "Organized photo storage boxes with labels" },
    { src: "/images/labeled-boxes.png", alt: "Labeled photo storage boxes" },
    { src: "/images/organized-result.jpg", alt: "Organized photo collection with albums, boxes, and digital backup" },
  ];

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
              Organize Your Memories
            </h1>
          </div>
        </div>
      </section>

      {/* 8-Image Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-12">
            <PhotoGrid images={disorganizedPhotos} columns={4} />
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Your memories... They can be old printed photos given to you by your parents or relatives, stored in the garage or in the attic... They can be old films legacy of your old ancestors... They can be photos stored in your cameras or smartphones... They can be from your parent's wedding... They can be from your son's graduation... They can be photos stored in your computers... They can be from your work's Christmas party... They can be from when you were young... And more, and more, and more...
            </p>

            <p className="text-lg text-primary font-semibold mb-8">
              As a Certified Member of The Photo Managers, we use their methodologies and techniques to ensure that your photos are neatly catalogued, safe and accessible. Also, we provide with the training on how to organize photos using our techniques and methodologies.
            </p>

            <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
              I Think I Can. For those individuals that like to be involved in the whole organization process, we will work with them using the organization process.
            </p>

            <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
              Be All Yours. For those busy individuals that do not have the time, we will organize their photos with minimal participation on their side.
            </p>

            {/* Digital Photos Organization Services */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
                Digital Photos Organization Services
              </h2>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Your digital collection nowadays probably includes photos scattered between different devices and even in the cloud. With the aid of cloud phones as our primary camera, photos are stored everywhere; in social media, in photo streams, in evaluation memories and some others are just used them to illustrate something or share an idea or fact and have no value after we shared them. But there they are!
              </p>

              <p className="text-lg text-neutral-700 mb-6">
                We will help you to keep your collection in shape with the following options for Printed & Digital Photos:
              </p>

              <ul className="space-y-3 text-lg text-neutral-700 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Select which methodology to be used
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Set up your computer environment
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Create a core Folder structure for your collection
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Find duplicates
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Select photo management software
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tag / Keyword photos
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Backup procedure
                </li>
              </ul>
            </div>

            {/* Printed Photos Organization Services */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
                Printed Photos Organization Services
              </h2>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Organizing a photo collection can be a daunting process. You can have thousand of scattered photos in your collection. Some albums can be falling apart and your precious photos are stuck on them. You can have lots of duplicates, heritage photos or really good bad photos. You can have lots of albums to discard and organize to finally make sense of your precious collection. Your photos are a testimony of your life. Therefore, your collection of photos is unique and precious but more importantly, irreplaceable.
              </p>

              <p className="text-lg text-primary font-semibold mb-8">
                As a Certified Member of The Photo Managers, we use their methodologies and techniques to ensure that your photos are neatly catalogued, safe and accessible. Also, we provide with the training on how to organize photos using our techniques and methodologies.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md border border-neutral-200">
                  <Image
                    src="/images/scattered-photos-collection.png"
                    alt="Scattered photos and box of photos needing organization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md border border-neutral-200">
                  <Image
                    src="/images/organized-photos-result.png"
                    alt="Organized photo storage, scanning equipment, and albums"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-primary">
                  An assessment is performed as a first step for every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Organize Your Memories?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get started with a free assessment today
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
