import ServiceAreaBadge from '@/components/ui/ServiceAreaBadge';
import TrustBadge from '@/components/ui/TrustBadge';

export default function BookingHero() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-background-sky to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Service Area Badge */}
          <div className="flex justify-center mb-6">
            <ServiceAreaBadge variant="inline" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
            Book Your Free Consultation
          </h1>

          <p className="text-xl text-neutral-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help preserve your precious memories. No obligation, just a friendly conversation about your project.
          </p>

          {/* Trust Badge */}
          <div className="flex justify-center">
            <TrustBadge
              stat1="100% Free"
              stat1Label="consultation"
              stat2="No Obligation"
              stat2Label="to continue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
