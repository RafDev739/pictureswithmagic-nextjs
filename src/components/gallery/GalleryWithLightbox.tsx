'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryImage {
  src: string;
  alt?: string;
  description?: string;
  category?: string;
}

interface GalleryWithLightboxProps {
  images: string[] | GalleryImage[];
  altPrefix?: string;
  columns?: 2 | 3 | 4;
  aspectRatio?: 'square' | 'video';
}

export default function GalleryWithLightbox({
  images,
  altPrefix = "Gallery image",
  columns = 4,
  aspectRatio = 'square'
}: GalleryWithLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  // Normalize images to object format
  const normalizedImages = images.map((img, i) =>
    typeof img === 'string'
      ? { src: img, alt: `${altPrefix} ${i + 1}` }
      : { ...img, alt: img.alt || `${altPrefix} ${i + 1}` }
  );

  const columnClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }[columns];

  return (
    <>
      <div className={`grid ${columnClass} gap-4`}>
        {normalizedImages.map((image, i) => (
          <div
            key={i}
            onClick={() => handleImageClick(i)}
            className={`group relative ${aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'} overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4">
                {image.description && (
                  <p className="text-sm mb-2">{image.description}</p>
                )}
                <p className="text-xs">Click to enlarge</p>
              </div>
            </div>

            {/* Category Tag */}
            {image.category && (
              <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {image.category}
              </div>
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={normalizedImages.map((img) => ({
          src: img.src,
          alt: img.alt,
          description: img.description
        }))}
      />
    </>
  );
}
