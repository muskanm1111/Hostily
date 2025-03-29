import Image from "next/image";
import React from "react";

const Gallery = () => {
  // Image sources (you'll want to replace these with your actual image paths)
  const images = [
    "/gallery-1 (1).jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={src}
                alt={`Interior design ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
