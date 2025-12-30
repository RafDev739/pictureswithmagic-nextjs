import Link from 'next/link';
import ServiceAreaBadge from '@/components/ui/ServiceAreaBadge';
import SummaryBlock from '@/components/ui/SummaryBlock';
import FeatureList from '@/components/ui/FeatureList';
import ServiceFAQ from '@/components/ui/ServiceFAQ';
import CTAButton from '@/components/ui/CTAButton';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  // Hero section
  serviceName: string;
  tagline: string;

  // Summary block
  summaryTitle: string;
  summaryDescription: string;
  benefits: string[];

  // Visual section (optional)
  visualSection?: React.ReactNode;

  // Features section
  features?: Feature[];

  // Detailed content (optional)
  detailedContent?: React.ReactNode;

  // FAQ section
  faqs: FAQItem[];
}

export default function ServicePageTemplate({
  serviceName,
  tagline,
  summaryTitle,
  summaryDescription,
  benefits,
  visualSection,
  features,
  detailedContent,
  faqs,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              {serviceName}
            </h1>
            <p className="text-xl text-neutral-600">
              {tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Block (Above the Fold) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SummaryBlock
              title={summaryTitle}
              description={summaryDescription}
              benefits={benefits}
            />
          </div>
        </div>
      </section>

      {/* Visual Section (if provided) */}
      {visualSection && (
        <section className="py-12 md:py-16 bg-background-sky">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {visualSection}
          </div>
        </section>
      )}

      {/* Features Section (if provided) */}
      {features && features.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 font-heading text-center">
                What We Offer
              </h2>
              <FeatureList features={features} />
            </div>
          </div>
        </section>
      )}

      {/* Detailed Content (if provided) */}
      {detailedContent && (
        <section className="py-12 md:py-16 bg-background-sky">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {detailedContent}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceFAQ faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule your free consultation today and let's preserve your precious memories together
          </p>
          <CTAButton variant="primary" size="lg" />
        </div>
      </section>
    </div>
  );
}
