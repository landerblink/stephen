"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PhotoGrid() {
  const images = [
    "/assets/stephen/image_1.jpg",
    "/assets/stephen/image_2.jpg",
    "/assets/stephen/image_3.jpg",
    "/assets/stephen/image_4.jpg",
    "/assets/stephen/image_5.jpg",
    "/assets/stephen/image_6.jpg",
    "/assets/stephen/image_7.jpg",
    "/assets/stephen/image_8.jpg",
    "/assets/stephen/image_9.png",
    "/assets/stephen/image_10.jpeg",
    "/assets/stephen/image_11.jpg",
    "/assets/stephen/image_12.jpg",
    "/assets/stephen/image_13.jpg",
    "/assets/stephen/image_14.jpg",
    "/assets/stephen/image_15.jpg",
    "/assets/stephen/image_16.jpg",
    "/assets/stephen/image_17.jpg",
  ];

  const [shuffled, setShuffled] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle only on client, so SSR and CSR won’t mismatch
    const shuffledArr = [...images].sort(() => Math.random() - 0.5);
    setShuffled(shuffledArr);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] p-6">
      <h1 className="text-3xl font-bold mb-10 text-center text-[#E60023] tracking-tight">
        Stephen’s Visual Journey
      </h1>

      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
        {shuffled.map((src, idx) => (
          <div
            key={idx}
            className="relative mb-4 break-inside-avoid overflow-hidden rounded-xl group"
          >
            <Image
              src={src}
              alt={`photo-${idx}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-lg"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
