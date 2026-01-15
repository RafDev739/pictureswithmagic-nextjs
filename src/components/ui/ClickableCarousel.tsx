"use client";

import { useState } from "react";
import Image from "next/image";

interface ClickableCarouselProps {
  images: string[];
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ClickableCarousel({
  images,
  alt = "Carousel image",
  width = 1200,
  height = 300,
  className = "",
}: ClickableCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer select-none ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      aria-label={`Click to see next image (${currentIndex + 1} of ${images.length})`}
    >
      <Image
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        width={width}
        height={height}
        className="w-full h-auto rounded-lg transition-opacity duration-300"
      />
    </div>
  );
}
