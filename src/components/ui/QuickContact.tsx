import { siteConfig } from '@/config/site';

export default function QuickContact() {
  return (
    <div className="bg-primary/5 rounded-xl p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4 font-heading">
        Prefer to Call or Email?
      </h3>

      <div className="space-y-4">
        {/* Phone */}
        <div>
          <p className="text-sm text-neutral-600 mb-1">Call us directly:</p>
          <a
            href={`tel:${siteConfig.cta.phone.replace(/\D/g, '')}`}
            className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.cta.phone}
          </a>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm text-neutral-600 mb-1">Send us an email:</p>
          <a
            href={`mailto:${siteConfig.cta.email}`}
            className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2 break-all"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {siteConfig.cta.email}
          </a>
        </div>

        {/* Business Hours */}
        <div className="pt-4 border-t border-neutral-300">
          <p className="text-sm font-semibold text-neutral-900 mb-2">Business Hours:</p>
          <div className="text-sm text-neutral-600 space-y-1">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
