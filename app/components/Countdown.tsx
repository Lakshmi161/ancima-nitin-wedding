"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-08-23T10:45:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true,
        });

        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) /
            1000
        ),
        finished: false,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section
      className="
        relative
        py-24
        px-6
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/countdown-background.png')",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <p
          className="
            uppercase
            tracking-[0.45em]
            text-[#C7A04A]
            text-xs
            mb-4
          "
        >
          Our Wedding
        </p>

        <h2
          className="
            heading-font
            text-4xl
            md:text-6xl
            text-[#7A263A]
            leading-tight
            mb-16
          "
        >
          Counting Down To Forever
        </h2>

        {timeLeft.finished ? (
          <div>
            <h2
              className="
                heading-font
                text-5xl
                text-[#7A263A]
              "
            >
              We Are Married ❤
            </h2>

            <p
              className="
                mt-6
                text-gray-600
                text-lg
              "
            >
              Thank you for being part of our beautiful journey.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop */}
            {/* Desktop */}
<div
  className="
    hidden
    md:flex
    justify-center
    items-center
  "
>
  {timerItems.map((item, index) => (
    <div
      key={item.label}
      className="flex items-center"
    >
      <div className="px-8 text-center">
        <h3
          className="
            heading-font
            text-7xl
            text-[#7A263A]
            leading-none
          "
        >
          {String(item.value).padStart(2, "0")}
        </h3>

        <p
          className="
            mt-3
            uppercase
            tracking-[0.25em]
            text-sm
            text-gray-600
          "
        >
          {item.label}
        </p>
      </div>

      {index < timerItems.length - 1 && (
        <div className="h-20 w-px bg-[#D4AF37]/40 mx-2" />
      )}
    </div>
  ))}
</div>

{/* Mobile */}
<div
  className="
    md:hidden
    grid
    grid-cols-4
    gap-2
    mt-8
    items-start
  "
>
  {timerItems.map((item, index) => (
    <div
      key={item.label}
      className="relative text-center"
    >
      <h3
        className="
          heading-font
          text-[2.6rem]
          leading-none
          text-[#7A263A]
        "
      >
        {String(item.value).padStart(2, "0")}
      </h3>

      <p
        className="
          mt-2
          uppercase
          tracking-[0.18em]
          text-[10px]
          text-gray-600
        "
      >
        {item.label}
      </p>

      {index < timerItems.length - 1 && (
        <div
          className="
            absolute
            right-0
            top-4
            translate-x-3
            text-[#D4AF37]
            text-2xl
            font-light
          "
        >
          |
        </div>
      )}
    </div>
  ))}
</div>
          </>
        )}
      </div>
    </section>
  );
}