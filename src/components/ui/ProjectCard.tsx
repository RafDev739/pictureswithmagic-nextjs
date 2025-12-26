interface ProjectCardProps {
  title: string;
  scenario: string;
  solution: string;
  icon: string;
  className?: string;
}

const iconComponents: Record<string, React.ReactNode> = {
  archive: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  ),
  heart: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  organize: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  restore: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  learn: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
};

export default function ProjectCard({
  title,
  scenario,
  solution,
  icon,
  className = '',
}: ProjectCardProps) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow ${className}`}>
      {/* Icon */}
      <div className="w-12 h-12 text-accent mb-4">
        {iconComponents[icon] || iconComponents.archive}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-neutral-900 mb-3 font-heading">
        {title}
      </h3>

      {/* Scenario */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-primary mb-1">The Scenario:</p>
        <p className="text-neutral-600 text-sm">
          {scenario}
        </p>
      </div>

      {/* Solution */}
      <div>
        <p className="text-sm font-semibold text-accent mb-1">Our Solution:</p>
        <p className="text-neutral-600 text-sm">
          {solution}
        </p>
      </div>
    </div>
  );
}
