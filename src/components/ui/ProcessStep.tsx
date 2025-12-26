interface ProcessStepProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessStep({
  stepNumber,
  icon,
  title,
  description,
  className = '',
}: ProcessStepProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Step Number Badge */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-white font-bold text-lg">{stepNumber}</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all h-full">
        {/* Icon */}
        <div className="w-16 h-16 text-primary mb-4 mx-auto">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors mb-3 text-center font-heading">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 group-hover:text-primary transition-colors text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
