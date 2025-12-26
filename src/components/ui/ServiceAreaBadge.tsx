import { siteConfig } from '@/config/site';

interface ServiceAreaBadgeProps {
  variant?: 'compact' | 'full' | 'inline';
  className?: string;
}

export default function ServiceAreaBadge({ variant = 'compact', className = '' }: ServiceAreaBadgeProps) {
  const { serviceAreaConfig } = siteConfig;

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600 ${className}`}>
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{serviceAreaConfig.primary}</span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`bg-blue-50 border border-blue-100 rounded-lg p-4 ${className}`}>
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-900 mb-2">Service Areas</h3>
            <p className="text-sm text-neutral-700 mb-2">{serviceAreaConfig.primary}</p>
            <p className="text-sm text-neutral-600 mb-3">{serviceAreaConfig.secondary}</p>
            {serviceAreaConfig.localPickupDelivery && (
              <p className="text-sm text-accent font-medium">
                ✓ Local pickup & delivery available
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // inline variant
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm text-neutral-600 ${className}`}>
      <svg
        className="w-4 h-4 text-accent"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {serviceAreaConfig.primary}
    </span>
  );
}
