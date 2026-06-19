"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-08-23T10:45:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
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
          backgroundImage: "url('/Countdown-background.png')",
        }}
      >
        <div className="max-w-4xl mx-auto  backdrop-blur-sm rounded-[40px] p-10 text-center">

          <div className="text-6xl mb-6">💍</div>

          <h2 className="text-5xl text-[#7A263A] mb-6">
            Happily Married
          </h2>

          
          <p className="text-lg text-gray-600 leading-8">
            Thank you for your love, blessings and presence
            as we began this beautiful journey together.
          </p>

          <p className="mt-10 text-[#7A263A] text-2xl">
            Ancima & Nitin
          </p>

        </div>
      </section>
    );
  }

  return (
    <section
      className="
        py-16 md:py-24 px-4 md:px-6
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/Countdown-background.png')",
      }}
    >
      <div className="max-w-5xl mx-auto  backdrop-blur-sm rounded-[40px] p-8 md:p-12">

        <h2 className="heading-font text-4xl md:text-6xl text-[#7A263A] text-center mb-10">
          Counting Down To Forever
        </h2>

        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="
  bg-white/80
  backdrop-blur-sm
  rounded-2xl
  p-5
  w-[140px]
  md:w-[160px]
  shadow-md
"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#7A263A]">
                {item.value}
              </div>

              <div className="text-gray-500 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}