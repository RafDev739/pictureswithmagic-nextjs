import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Recommended tools, software, and products for photo organization, preservation, and archival storage from Pictures With Magic.",
};

const resources = [
  {
    name: "Mylio",
    category: "Photo Management Software",
    description: "Professional photo organization software that helps you organize, find, and protect your photos across all your devices. Perfect for managing large photo collections with powerful search and tagging features.",
    benefits: [
      "Organize photos across multiple devices",
      "Powerful search and face recognition",
      "Automatic backup and sync",
      "Works offline",
    ],
    website: "https://mylio.com",
  },
  {
    name: "My Memories Suite",
    category: "Scrapbooking Software",
    description: "Digital scrapbooking software that makes it easy to create beautiful photo books, cards, and layouts. Transform your digital photos into stunning keepsakes with professional templates and design tools.",
    benefits: [
      "Professional templates and designs",
      "Easy drag-and-drop interface",
      "Create photo books, cards, and calendars",
      "Print at home or order professionally",
    ],
    website: "https://www.mymemories.com",
    discountCode: "STMMMS13376",
  },
  {
    name: "Archival Methods",
    category: "Photo Storage & Preservation",
    description: "Premium archival-quality storage products designed to protect and preserve your photos, documents, and memorabilia for generations. All products are acid-free, lignin-free, and photo-safe.",
    benefits: [
      "Museum-quality archival materials",
      "Acid-free and lignin-free products",
      "Wide selection of albums and storage boxes",
      "UV-protective sleeves and enclosures",
    ],
    website: "https://www.archivalmethods.com",
  },
];

const tips = [
  {
    title: "Store Photos in Cool, Dry Places",
    description: "Keep your printed photos away from heat, humidity, and direct sunlight. Ideal storage temperature is 65-70°F with 30-40% humidity.",
  },
  {
    title: "Use Archival-Quality Materials",
    description: "Always use acid-free, lignin-free albums and storage boxes. Regular paper and cardboard can damage photos over time.",
  },
  {
    title: "Create Multiple Backups",
    description: "Follow the 3-2-1 rule: Keep 3 copies of your digital photos on 2 different types of media with 1 copy stored offsite.",
  },
  {
    title: "Organize as You Go",
    description: "Don't wait until you have thousands of photos. Create a system and stick to it from the start.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-heading">
              Recommended Resources
            </h1>
            <p className="text-xl text-neutral-600">
              Professional tools and products we trust for photo preservation
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Affiliate Disclosure */}
            <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-4 mb-12">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-neutral-700">
                  <strong className="font-semibold">Affiliate Disclosure:</strong> Some of the links on this page are affiliate links. This means we may earn a small commission if you make a purchase through these links, at no additional cost to you. We only recommend products and services we personally use and believe will benefit our clients.
                </p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
                Recommended Products & Services
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                These are the tools and products we personally use and recommend to our clients for photo organization, preservation, and creative projects.
              </p>
            </div>

            <div className="space-y-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {resource.name}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      <p className="text-neutral-700 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold text-neutral-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {resource.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-neutral-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {resource.discountCode && (
                        <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <p className="font-semibold text-neutral-900">Exclusive Discount Code</p>
                              <p className="text-sm text-neutral-700 mt-1">
                                Use code <code className="bg-white px-2 py-1 rounded font-mono font-bold text-accent">{resource.discountCode}</code> at checkout
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-md hover:shadow-lg whitespace-nowrap"
                      >
                        Visit Website
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preservation Tips */}
      <section className="py-16 md:py-24 bg-background-sky-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
                Photo Preservation Tips
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Professional advice for keeping your memories safe for generations to come
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-neutral-200"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let Pictures With Magic guide you through your photo preservation journey. We offer personalized consultations and services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-medium"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
