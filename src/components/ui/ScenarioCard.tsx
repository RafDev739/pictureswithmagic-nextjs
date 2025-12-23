import Link from "next/link";

interface ScenarioCardProps {
  question: string;
  answer: string;
  ctaText: string;
  ctaLink: string;
  variant?: "primary" | "secondary";
}

export default function ScenarioCard({
  question,
  answer,
  ctaText,
  ctaLink,
  variant = "primary",
}: ScenarioCardProps) {
  return (
    <div className="bg-white border-l-4 border-primary rounded-lg p-8 shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 font-heading">
        {question}
      </h3>
      <p className="text-neutral-700 mb-6 leading-relaxed">
        {answer}
      </p>
      <Link
        href={ctaLink}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-accent text-white hover:bg-accent-dark"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
