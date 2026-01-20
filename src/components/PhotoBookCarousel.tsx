"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/images/carousel/photobook-2.jpg",
  "/images/carousel/photobook-6.jpg",
  "/images/carousel/photobook-7.jpg",
  "/images/carousel/photobook-10.jpg",
  "/images/carousel/photobook-12.jpg",
  "/images/carousel/photobook-14.jpg",
  "/images/carousel/photobook-15.jpg",
  "/images/carousel/photobook-16.jpg",
  "/images/carousel/photobook-17.jpg",
  "/images/carousel/photobook-18.jpg",
];

export default function PhotoBookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Photo book sample ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
