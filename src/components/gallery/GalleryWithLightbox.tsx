'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryWithLightboxProps {
  images: string[];
  altPrefix: string;
}

export default function GalleryWithLightbox({ images, altPrefix }: GalleryWithLightboxProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => handleImageClick(i)}
            className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all cursor-pointer"
          >
            <Image
              src={image}
              alt={`${altPrefix} ${i + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
}
