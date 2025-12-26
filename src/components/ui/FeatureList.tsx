interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

export default function FeatureList({ features, className = '' }: FeatureListProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 text-primary">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-neutral-600">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
