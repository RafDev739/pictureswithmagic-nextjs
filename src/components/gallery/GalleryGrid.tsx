'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  description?: string;
  beforeImage?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick?: (index: number) => void;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function GalleryGrid({
  images,
  onImageClick,
  columns = 3,
  className = '',
}: GalleryGridProps) {
  const columnClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${columnClass} gap-6 ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
          onClick={() => onImageClick?.(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-white text-center p-4">
              {image.description && (
                <p className="text-sm mb-2">{image.description}</p>
              )}
              <p className="text-xs opacity-80">Click to view larger</p>
            </div>
          </div>

          {/* Category Tag */}
          {image.category && (
            <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {image.category}
            </div>
          )}

          {/* Before/After Indicator */}
          {image.beforeImage && (
            <div className="absolute top-3 right-3 bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Before/After
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
