import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/ui/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials | Client Reviews | Pictures With Magic",
  description: "Read testimonials from our satisfied clients about our photo preservation, scanning, organization, and restoration services. Real stories from real customers.",
  keywords: ["testimonials", "client reviews", "photo preservation reviews", "customer feedback", "Pictures With Magic reviews"],
};

const testimonials = [
  {
    name: "Evelyn S.",
    text: "Over the past few years I've had the joy of working with Mili Parra Castro on two major Legacy Books which honor the lives of my parents and my husband's parents. Mili provided the ongoing creative leadership, scanning, and the printing of two gorgeous albums that blessed my family immeasurably. During the periods of creating these books I was often in another State and she and I worked together via Dropbox which allowed me to respond to initial placements and enter in with my personal picture preferences. It was a lot of fun working with Mili who was forever willing and able and always generous with her best advice and many talents! The books followed my parents through their childhood years into their lives with my early childhood and married years with their grandchildren. These Legacy Books turned out to be fabulous keepsakes for my grandkids which allowed all to reflect on their heritage as they couldn't have done otherwise. Our immediate & extended family enjoyed having copies with wonderful memories and new insights concerning their own lives. It also allowed us to get rid of tons of scrapbooks which our two sons wouldn't have known what to do with once they were given to them!! I'm so thankful that I found Mili to help me with my picture projects and I actually can't wait to start condensing the other 20 picture albums in my closet – the ones my kids would have trouble digesting! She makes it easy, fun, and always beautiful! Her equipment allows for restoration of old pictures and really nothing is impossible under her direction. Mili always aims to please and is a true blessing to work with.",
  },
  {
    name: "Suzanne B.",
    text: "Working with Mili has been a lifesaver! She added a level of professionalism and 'can do' spirit to what I viewed as an overwhelming task…scanning, labeling and organizing 100 + years of pictures, letters, and memorabilia. I am so relieved that I now can pass on these family treasures to future generations in an easy to access fashion. I couldn't have done it without Mili.",
  },
  {
    name: "Maria Isabel Colmenares",
    text: "When I left my country and I had to pack two suitcases with my belongings, my thought was, and my photo albums? They were part of my history, the history of my family....I took apart my photo albums and put all my memories in a briefcase. I started working and building my new life and my photos still were in the briefcase, until I found out that there was someone whose job was to organize and preserve all those pictures. The truth is that they live up to their name: \"Magic\". I'm happy because now I don't have my photos and memories in a briefcase. I have them scanned and saved and in a few albums that I can enjoy and share whenever I want. I am delighted with the work they did and highly recommend them.",
  },
  {
    name: "Amy Flynn",
    text: "Mili from Pictures With Magic is a dream to work with. Communications by email or phone were easy and she always responded quickly. I had a huge mess on my computer, with multiple photo libraries and different applications and no idea how to get it all in order. I had to get rid of thousands of duplicates and get a system in place to organize my photos and keep them that way into the future. It was an overwhelming job for me. Mili came to my house, looked over the problem, and emailed me a proposal for straightening it all out and leaving me with a working system. It was expensive, but it was a large job that took numerous visits and many hours of work on her part. She would have happily showed me what to do and let me do it myself if I preferred, and I could have saved money that way, but I wanted her to do it so I could start fresh. She recommended programs, but was open to using whichever ones I preferred. She gave me written updates each visit on exactly what she had done and what was left to do. In the end, she was easy and pleasant to work with, and my photos are all organized into an easy to use system complete with multiple backups. I would highly recommend her if you need help creating and maintaining a practical and useful system for your priceless photos.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              Testimonials
            </h1>
            <p className="text-xl text-neutral-600">
              See what our clients say about our photo preservation services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and preserve your precious memories today
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
