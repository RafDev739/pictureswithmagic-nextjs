interface TrustBadgeProps {
  stat1: string;
  stat1Label: string;
  stat2?: string;
  stat2Label?: string;
  className?: string;
}

export default function TrustBadge({
  stat1,
  stat1Label,
  stat2,
  stat2Label,
  className = ''
}: TrustBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg ${className}`}>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div className="text-base md:text-lg">
          <span className="font-bold text-neutral-900">{stat1}</span>
          <span className="text-neutral-600 ml-1">{stat1Label}</span>
        </div>
      </div>
      {stat2 && stat2Label && (
        <>
          <div className="w-px h-6 bg-neutral-300"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="text-base md:text-lg">
              <span className="font-bold text-neutral-900">{stat2}</span>
              <span className="text-neutral-600 ml-1">{stat2Label}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
