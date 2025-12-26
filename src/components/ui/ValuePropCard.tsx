interface ValuePropCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export default function ValuePropCard({ icon, title, className = '' }: ValuePropCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-16 h-16 mb-3 text-accent flex items-center justify-center">
        {icon}
      </div>
      <p className="text-base md:text-lg font-semibold text-primary">
        {title}
      </p>
    </div>
  );
}
