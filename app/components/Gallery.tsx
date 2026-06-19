"use client";

import { useEffect, useState } from "react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        py-24
        px-6
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/gallery-background.png')",
      }}
    >
      <div className="max-w-5xl mx-auto bg-white/75 backdrop-blur-sm rounded-[40px] p-10">

        <h2 className="text-5xl text-[#7A263A] text-center mb-4">
          Our Story
        </h2>

        <p className="text-center text-gray-500 mb-10">
          A few cherished moments
        </p>

        <div className="max-w-4xl mx-auto">
          <img
            src={images[current]}
            alt="Wedding Gallery"
            className="
              w-full
              h-[300px]
              md:h-[500px]
              object-cover
              rounded-3xl
              shadow-xl
            "
          />
        </div>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`overflow-hidden rounded-xl border-2 transition-all ${
                current === index
                  ? "border-[#7A263A] scale-105"
                  : "border-transparent opacity-70"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}