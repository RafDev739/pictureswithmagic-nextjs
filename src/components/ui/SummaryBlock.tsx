import CTAButton from './CTAButton';

interface SummaryBlockProps {
  title: string;
  description: string;
  benefits: string[];
  className?: string;
}

export default function SummaryBlock({
  title,
  description,
  benefits,
  className = '',
}: SummaryBlockProps) {
  return (
    <div className={`bg-primary/5 rounded-xl p-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
        {title}
      </h2>
      <p className="text-lg text-neutral-700 mb-6">
        {description}
      </p>

      {/* Benefits List */}
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-neutral-700 flex-1">{benefit}</span>
          </li>
        ))}
      </ul>

      <CTAButton variant="primary" size="lg" />
    </div>
  );
}
