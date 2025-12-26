import ProjectCard from '@/components/ui/ProjectCard';
import { typicalProjects } from '@/data/typicalProjects';
import CTAButton from '@/components/ui/CTAButton';

interface TypicalProjectsProps {
  title?: string;
  description?: string;
  showCTA?: boolean;
  featuredOnly?: boolean;
  limit?: number;
  className?: string;
}

export default function TypicalProjects({
  title = "See Yourself in These Stories?",
  description = "Real scenarios from families we have helped preserve their precious memories",
  showCTA = true,
  featuredOnly = false,
  limit,
  className = '',
}: TypicalProjectsProps) {
  let projectsToShow = featuredOnly
    ? typicalProjects.filter(p => p.featured)
    : typicalProjects;

  if (limit) {
    projectsToShow = projectsToShow.slice(0, limit);
  }

  return (
    <section className={`py-16 md:py-24 bg-background-sky ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-primary font-medium max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projectsToShow.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              scenario={project.scenario}
              solution={project.solution}
              icon={project.icon}
            />
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center">
            <p className="text-lg text-neutral-700 font-bold mb-6">
              Does one of these scenarios sound familiar? Let us help you find the perfect solution.
            </p>
            <CTAButton variant="primary" size="lg" />
          </div>
        )}
      </div>
    </section>
  );
}
