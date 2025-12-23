interface TestimonialCardProps {
  name: string;
  text: string;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  text,
  avatar,
}: TestimonialCardProps) {
  // Get initials from name for avatar
  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
      {/* Header with name */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-primary font-semibold text-lg">
            {getInitials(name)}
          </span>
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-lg text-neutral-900">{name}</h3>
        </div>
      </div>

      {/* Testimonial text */}
      <div className="relative">
        <svg
          className="absolute -top-2 -left-1 w-8 h-8 text-primary/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-neutral-700 italic leading-relaxed pl-6">
          {text}
        </p>
      </div>
    </div>
  );
}
