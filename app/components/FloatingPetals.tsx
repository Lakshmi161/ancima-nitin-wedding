"use client";

const petalImages = [
  "/petal1.png",
  "/petal2.png",
  "/petal3.png",
];

export default function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {Array.from({ length: 12 }).map((_, i) => (
        <img
          key={i}
          src={petalImages[i % petalImages.length]}
          alt=""
          className="absolute"
          style={{
            left: `${(i * 8) % 100}%`,
            top: "-60px",

            width: `${30 + (i % 3) * 10}px`,

            animationName: "fall",
            animationDuration: `${10 + (i % 5) * 2}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}