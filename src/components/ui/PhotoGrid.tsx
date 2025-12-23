import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  images: Photo[];
  columns?: 2 | 4 | 6 | 8;
  aspectRatio?: "square" | "video" | "portrait";
}

export default function PhotoGrid({
  images,
  columns = 4,
  aspectRatio = "square",
}: PhotoGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    4: "grid-cols-2 md:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    8: "grid-cols-2 md:grid-cols-4 lg:grid-cols-8",
  };

  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="group cursor-pointer"
        >
          <div className={`relative ${aspectClass[aspectRatio]} overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
