import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
            <p className="text-xl md:text-2xl text-neutral-700 mb-12 leading-relaxed">
              We live in a very dynamic and demanding world that is always pushing family members in different directions. There are only few occasions during the year ( Christmas, Mother's Day, Father's Day ) that bring our family together. Those few occasions are the ones that create memories. Maybe it was a family gathering, maybe your son's birthday party, maybe your son's graduation, it may be your anniversary, or it may be even be memories from when you were young... Wouldn't it be nice to have those special memories available to you when you need them?
            </p>

            <p className="text-xl md:text-2xl text-neutral-700 mb-16 leading-relaxed">
              We can bring your memories to life in the form of a Photo Book, or as a slideshow. In addition, we provide our Tell Your Story service in which we work with you to combine your memories as part of the photos in the Photo Book or in the Slideshow.
            </p>

            {/* Photo Book Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-heading">
                Photo Book
              </h2>

              {/* Carousel - Full Width */}
              <div className="mb-8">
                <PhotoBookCarousel />
              </div>

              {/* Text Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Do you want to share and remember?
                </h3>
                <p className="text-xl md:text-2xl text-neutral-700 mb-6">
                  Select your special photos.<br />
                  Let us create a beautiful Photo Book for you.
                </p>

                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Different options available:
                </h3>
                <ul className="space-y-2 text-lg md:text-xl text-neutral-700">
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

              <div className="text-center">
                <Link
                  href="/galleries/albums"
                  className="text-primary hover:text-primary-dark font-semibold underline text-lg md:text-xl"
                >
                  Photo Gallery
                </Link>
              </div>
            </div>

            {/* Slideshow Section */}
            <div className="mt-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-heading">
                Slideshow
              </h2>

              {/* Video Player */}
              <div className="mb-8">
                <video
                  className="w-full rounded-lg shadow-lg"
                  controls
                  poster="/videos/fun-day-at-the-beach-poster.jpg"
                >
                  <source src="/videos/fun-day-at-the-beach-sample.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-xl md:text-2xl text-neutral-700 mb-6 leading-relaxed">
                Do you have a special celebration?<br />
                Select some especial photos and<br />
                Let us create for you a beautiful
              </p>

              <p className="text-3xl md:text-4xl font-bold text-accent mb-8">
                slideshow with transitions and music.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
                <ul className="space-y-3 text-lg md:text-xl text-neutral-700">
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

      {/* Express Your Feelings Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading">
              Express Your Feelings
            </h2>
            <p className="text-lg text-neutral-700 mb-12 leading-relaxed text-center">
              Sometimes the simplest gift can give somebody the best satisfaction. Our Express Your Feelings service can give your loved one that pleasure by just combining pictures in an elegant and beautiful way.
            </p>

            {/* Main Example Image */}
            <div className="mb-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl border-4 border-white ring-4 ring-primary/20 mb-8">
                <Image
                  src="/images/4f051043e8e59706.jpg"
                  alt="Custom photo collage in the shape of a letter filled with cherished family memories and moments"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-lg text-primary font-semibold">
                Transform your memories into beautiful custom photo letters, numbers, and shapes
              </p>
            </div>

            {/* Service Description */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                  Creative Photo Arrangements
                </h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We specialize in creating unique photo collages arranged into meaningful letters, numbers, or custom shapes. Perfect for expressing love, celebrating milestones, or creating one-of-a-kind gifts that will be treasured forever.
                </p>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Whether it's an initial, a special date, or a custom design, we'll carefully arrange your favorite photos to create a stunning visual representation of your memories.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                  What We Offer
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Custom letters and initials filled with photos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Numbers for anniversaries and birthdays</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Custom shapes and designs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Professional printing and framing options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple size options available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Perfect For Section */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center font-heading">
                Perfect Gift Ideas For
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Wedding gifts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Anniversary celebrations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Birthday milestones
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mother's & Father's Day
                  </li>
                </ul>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Graduation celebrations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Retirement parties
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Baby's first year
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Memorial tributes
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
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Create beautiful photo books or slideshows today
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
