import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import PhotoBookCarousel from "@/components/PhotoBookCarousel";
import Carousel from "@/components/ui/Carousel";

export const metadata: Metadata = {
  title: "Bring Your Memories to Life | Photo Books & Slideshows | Boca Raton",
  description: "Create beautiful photo books and custom slideshows with music. Transform your digital photos into tangible keepsakes and memorable presentations.",
  keywords: ["photo books", "custom slideshows", "photo albums", "memory books", "photo presentations", "Boca Raton"],
};

export default function BringToLifePage() {
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
              Bring Your Memories to Life
            </h1>
          </div>
        </div>
      </section>

      {/* Restoration Examples Carousel */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Carousel
              images={[
                { src: "/images/carousel/carousel-restoration-1.png", alt: "Photo restoration example 1" },
                { src: "/images/carousel/carousel-restoration-2.png", alt: "Photo restoration example 2" },
                { src: "/images/carousel/carousel-restoration-3.png", alt: "Photo restoration example 3" },
              ]}
              interval={4000}
            />
          </div>
        </div>
      </section>

      <section className="pt-4 pb-16 md:pt-6 md:pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-neutral-700 mb-12 leading-relaxed">
              We live in a very dynamic and demanding world that is always pushing family members in different directions. There are only few occasions during the year ( Christmas, Mother's Day, Father's Day ) that bring our family together. Those few occasions are the ones that create memories. Maybe it was a family gathering, maybe your son's birthday party, maybe your son's graduation, it may be your anniversary, or it may be even be memories from when you were young... Wouldn't it be nice to have those special memories available to you when you need them?
            </p>

            <p className="text-xl text-neutral-700 mb-16 leading-relaxed">
              We can bring your memories to life in the form of a Photo Book, or as a slideshow. In addition, we provide our Tell Your Story service in which we work with you to combine your memories as part of the photos in the Photo Book or in the Slideshow.
            </p>

            {/* Photo Book Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-heading">
                Photo Book
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    Do you want to share and remember?
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Select your special photos.<br />
                    Let us create a beautiful Photo Book for you.
                  </p>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    Different options available:
                  </h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Cover type
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Paper type
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Custom design pages
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Tell Your Story service
                    </li>
                  </ul>
                </div>

                <PhotoBookCarousel />
              </div>

              <div className="text-center">
                <Link
                  href="/galleries/albums"
                  className="text-primary hover:text-primary-dark font-semibold underline text-lg"
                >
                  Photo Gallery
                </Link>
              </div>
            </div>

            {/* Slideshow Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-heading">
                Slideshow
              </h2>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Do you have a special celebration?<br />
                Select some especial photos and<br />
                Let us create for you a beautiful
              </p>

              <p className="text-2xl font-bold text-accent mb-8">
                slideshow with transitions and music.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Package Customization available
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Royalty free music is used for slide shows. To use your music, Royalty fee may apply
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Bring Your Memories to Life?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Create beautiful photo books or slideshows today
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
