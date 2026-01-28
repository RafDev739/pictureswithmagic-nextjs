import Link from 'next/link';
import ProcessStep from '@/components/ui/ProcessStep';
import CTAButton from '@/components/ui/CTAButton';

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium max-w-2xl mx-auto">
            Our simple 3-step process to get started
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <ProcessStep
            stepNumber={1}
            icon={
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Complimentary Phone Call"
            description="Contact us to discuss your project. We'll answer your questions and learn about your photo preservation needs."
          />

          <ProcessStep
            stepNumber={2}
            icon={
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Discovery Session"
            description="I have a discovery session with you to make an inventory of the material and have a better idea of the size of the collection and types of media in it."
          />

          <ProcessStep
            stepNumber={3}
            icon={
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Plan & Approval"
            description="After the discovery session, I prepare a detailed plan and send it to you for approval before we begin preserving your memories."
          />
        </div>

        {/* Link to Process Page */}
        <div className="text-center mb-8">
          <p className="text-xl text-neutral-600 mb-2">
            Want to understand our process better? See the detailed steps for each service type.
          </p>
          <Link
            href="/process#how-it-works"
            className="text-lg text-primary hover:text-primary-dark font-medium inline-flex items-center"
          >
            Learn more about our process
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton variant="primary" size="lg" />
        </div>
      </div>
    </section>
  );
}
