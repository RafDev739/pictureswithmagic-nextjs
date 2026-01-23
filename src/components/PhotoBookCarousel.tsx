"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  "/images/carousel/1 Carmen Teresa 90.jpeg",
  "/images/carousel/1 Darian.jpeg",
  "/images/carousel/1 Historia de Familia ParadisiIMG_7012.jpeg",
  "/images/carousel/1 La Mesa Redonda.jpeg",
  "/images/carousel/2 Darian 15.jpeg",
  "/images/carousel/2 Jordan.jpeg",
  "/images/carousel/2 Miagros in Family Album.jpeg",
  "/images/carousel/2 Paradisis.jpeg",
  "/images/carousel/3 Andrea Wedding 1.jpeg",
  "/images/carousel/3 Derrick.jpeg",
  "/images/carousel/3 Nicolas 15 years.jpeg",
  "/images/carousel/3 Paradisis.jpeg",
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
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
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
            className="object-cover brightness-150"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
