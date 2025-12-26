interface ReviewStatsProps {
  totalReviews: number;
  averageRating: number;
  serviceBreakdown?: {
    scanning: number;
    organization: number;
    restoration: number;
    albums: number;
  };
  className?: string;
}

export default function ReviewStats({
  totalReviews,
  averageRating,
  serviceBreakdown,
  className = '',
}: ReviewStatsProps) {
  // Generate star rating display
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;

  return (
    <div className={`bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Average Rating */}
        <div className="text-center">
          <div className="text-5xl font-bold text-primary mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < fullStars
                    ? 'text-accent fill-current'
                    : i === fullStars && hasHalfStar
                    ? 'text-accent fill-current opacity-50'
                    : 'text-neutral-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-neutral-600">Average Rating</p>
        </div>

        {/* Total Reviews */}
        <div className="text-center">
          <div className="text-5xl font-bold text-accent mb-2">
            {totalReviews}+
          </div>
          <p className="text-sm text-neutral-600">Happy Clients</p>
          <p className="text-xs text-neutral-500 mt-1">
            Families Served Since 2010
          </p>
        </div>

        {/* Service Breakdown */}
        {serviceBreakdown && (
          <div>
            <p className="text-sm font-semibold text-neutral-700 mb-3 text-center md:text-left">
              Reviews by Service
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Photo Scanning</span>
                <span className="font-semibold text-primary">{serviceBreakdown.scanning}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Organization</span>
                <span className="font-semibold text-primary">{serviceBreakdown.organization}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Restoration</span>
                <span className="font-semibold text-primary">{serviceBreakdown.restoration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Photo Albums</span>
                <span className="font-semibold text-primary">{serviceBreakdown.albums}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
