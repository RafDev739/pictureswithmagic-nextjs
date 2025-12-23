import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  title,
  description,
  beforeAlt = "Before photo",
  afterAlt = "After photo",
}: BeforeAfterProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 font-heading">
        {title}
      </h3>
      {description && (
        <p className="text-lg text-neutral-600 mb-6 max-w-3xl">
          {description}
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Before Image */}
        <div className="relative group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
            />
          </div>
          <span className="absolute top-4 left-4 bg-neutral-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            Before
          </span>
        </div>

        {/* After Image */}
        <div className="relative group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Image
              src={afterImage}
              alt={afterAlt}
              fill
              className="object-cover"
            />
          </div>
          <span className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            After
          </span>
        </div>
      </div>
    </div>
  );
}
