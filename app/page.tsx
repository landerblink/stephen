"use client";

import Image from "next/image";

export default function PhotoGrid() {
  // List of images from /public/assets/stephen/
  const images = [
    "/assets/stephen/image_1.jpg",
    "/assets/stephen/image_2.jpg",
    "/assets/stephen/image_3.jpg",
    "/assets/stephen/image_4.jpg",
    "/assets/stephen/image_5.jpg",
    "/assets/stephen/image_6.jpg",
    "/assets/stephen/image_7.jpg",
    "/assets/stephen/image_8.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#1f1f1f] p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Compilation</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative rounded-xl break-inside-avoid group p-1"
          >
            {/* Background effect */}
            <div className="absolute inset-0 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-orange-400/40 blur-2xl shadow-2xl"></div>

            {/* Image */}
            <Image
              src={src}
              alt={`photo-${idx}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
