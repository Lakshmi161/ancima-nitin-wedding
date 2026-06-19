"use client";

import { useState } from "react";
import FloatingPetals from "./components/FloatingPetals";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import LotusDivider from "./components/LotusDivider";

export default function Home() {
  const [entered, setEntered] = useState(false);

  // OPENING SCREEN
  if (!entered) {
  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/opening-background.png')",
      }}
    >
      <div className="text-center max-w-2xl">

        <img
          src="/ganesha.png"
          alt="Ganesha"
          className="w-20 mx-auto mb-8"
        />

        <img
          src="/logo.png"
          alt="Ancima & Nitin"
          className="w-24 md:w-32 mx-auto mb-6"
        />

        <h1 className="heading-font text-5xl md:text-7xl text-[#7A263A]">
          Ancima & Nitin
        </h1>

        <p className="mt-8 invitation-text">
          Together with our families, we invite you to celebrate our
          wedding and bless us as we begin our new journey together.
        </p>

        <p className="mt-8 tracking-[0.3em] uppercase text-[#C7A04A] text-sm md:text-base">
          23 AUGUST 2026
        </p>

        <button
          onClick={() => setEntered(true)}
          className="
            mt-10
            px-10
            py-4
            rounded-full
            bg-[#7A263A]
            text-white
            font-medium
            tracking-wide
            transition-all
            duration-300
            hover:shadow-xl
            hover:-translate-y-1
          "
        >
          Open Invitation
        </button>

      </div>
    </main>
  );
}
  return (
    <>
      <FloatingPetals />
      <MusicPlayer />

      <main className="bg-[#faf7f2] overflow-x-hidden">

        {/* HERO */}
        <section
          className="
            min-h-screen
            flex
            items-center
            justify-center
            px-6
            bg-cover
            bg-center
            bg-no-repeat
            relative
          "
          style={{
            backgroundImage: "url('/hero-background.png')",
          }}
        >
          <div className="absolute inset-0 bg-white/30"></div>

          <div className="relative z-10 text-center max-w-3xl">

            <img
              src="/ganesha.png"
              alt="Ganesha"
              className="w-20 mx-auto mb-8"
            />

            <h1 className="heading-font text-6xl md:text-8xl text-[#7A263A]">
              Ancima
            </h1>

            <p className="text-3xl my-3 text-[#C7A04A]">
              &
            </p>

            <h1 className="heading-font text-6xl md:text-8xl text-[#7A263A]">
              Nitin
            </h1>
            

            <p className="mt-8 text-gray-700 max-w-xl mx-auto">
              Together with our families,
              we request the honour of your presence
              as we celebrate our wedding.
            </p>

            <p className="heading-font text-3xl md:text-4xl text-[#C7A04A] italic">
  23 August 2026
</p><LotusDivider />

          </div>
        </section>

        {/* MUHURTHAM */}
        {/* Muhurtham */}
<section
  className="py-24 px-6 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/temple-background.png')",
  }}
>
  <div className="max-w-6xl mx-auto bg-white/75 backdrop-blur-sm rounded-[40px] p-8 md:p-12 shadow-xl">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div>
        <img
          src="/temple.png"
          alt="Sree Vadakkumnathan Temple"
          className="
            w-full
            h-[300px]
            md:h-[500px]
            object-cover
            rounded-[40px]
            shadow-xl
          "
        />
      </div>

      {/* Content */}
      <div className="text-center md:text-left">

        <p className="text-[#C7A04A] tracking-[0.3em] uppercase text-sm mb-3">
          Wedding Ceremony
        </p>

        <h2 className="heading-font text-5xl md:text-6xl text-[#7A263A] mb-6"> 
          Muhurtham
        </h2>

        <p className="text-gray-600 leading-8">
          As the temple bells resonate and sacred vows are exchanged,
          we seek your presence and blessings as we begin our journey together.
        </p>

        <div className="mt-8">
          <p className="text-xl text-[#7A263A]">
            23 August 2026
          </p>

          <p className="text-lg text-gray-600 mt-2 mb-4">
            10:45 AM - 11:15 AM
          </p>
        </div>

        <p className="heading-font text-4xl md:text-4xl text-[#7A263A] mb-2">
          Sree Vadakkumnathan Temple
        </p>

        <p className="text-gray-600">
          Thrissur, Kerala
        </p>

        <a
          href="https://maps.app.goo.gl/8s7wGGECJgb2RsRd8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-8
            px-8
            py-3
            rounded-full
            bg-[#C7A04A]
            text-white
            font-medium
            tracking-wide
            transition-all
            duration-300
            hover:bg-[#B18D3A]
            hover:shadow-xl
            hover:-translate-y-1
          "
        >
          View Location
        </a>

      </div>

    </div>

  </div>
</section>
        {/* Lunch */}
<section
  className="py-24 px-6 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/lunch-background.png')",
  }}
>
  <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-[40px] p-8 md:p-12 shadow-xl">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Content */}
      <div className="text-center md:text-left order-2 md:order-1">

        <p className="text-[#C7A04A] tracking-[0.3em] uppercase text-sm mb-3">
          Celebration Lunch
        </p>

        <h2 className="heading-font text-5xl md:text-6xl text-[#7A263A] mb-6">
          Wedding Feast
        </h2>

        <p className="text-gray-600 leading-8">
          Following the ceremony, please join us for a celebratory lunch
          as we gather with family and friends to share joy, laughter,
          and blessings.
        </p>

        <div className="mt-8">
          <p className="text-xl text-[#7A263A] mb-2">
            11:30 AM Onwards
          </p>
        </div>

        <p className="heading-font text-4xl md:text-4xl text-[#7A263A] mb-3">
          Aishwarya Regency
        </p>

        <p className="text-gray-600">
          Kunnath Mana Ln, Naikkanal, <br></br>
           Thrissur, Kerala 680001
        </p>

        <a
          href="https://maps.app.goo.gl/Qr4act5aMnY7h7PM8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            mt-8
            px-8
            py-3
            rounded-full
            bg-[#C7A04A]
            text-white
            font-medium
            tracking-wide
            transition-all
            duration-300
            hover:bg-[#B18D3A]
            hover:shadow-xl
            hover:-translate-y-1
          "
        >
          View Location
        </a>

      </div>

      {/* Image */}
      <div className="order-1 md:order-2">
        <img
          src="/lunch.png"
          alt="Wedding Feast"
          className="
            w-full
            h-[300px]
            md:h-[500px]
            object-cover
            rounded-[40px]
            shadow-xl
          "
        />
      </div>

    </div>

  </div>
</section>

        {/* GALLERY */}
        

        {/* COUNTDOWN */}
        <Countdown />

        
        {/* Thank You */}
<section
  className="py-24 px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('/thankyou-background.png')",
  }}
>
  <div className="max-w-3xl mx-auto bg-white/75 backdrop-blur-sm rounded-[40px] p-12 text-center">

    <p className="text-[#C7A04A] tracking-[0.3em] uppercase text-sm mb-3">
      With Gratitude
    </p>

    <h2 className="heading-font text-5xl md:text-6xl text-[#7A263A] mb-8">
      Thank You
    </h2>

    <p className="text-gray-600 leading-8">
      Your presence, love and blessings mean the world to us.
    </p>

    <p className="mt-6 text-gray-600 leading-8">
      Thank you for being a part of our celebration and for sharing
      in the joy of this special day.
    </p>

    <p className="mt-6 text-gray-600 leading-8">
      We look forward to creating beautiful memories together.
    </p>

    <p className="mt-10 text-[#7A263A] text-lg tracking-[0.2em] uppercase">
      With Love
    </p>

    <div className="mt-6 flex justify-center">
      <img
        src="/logo.png"
        alt="Ancima and Nitin"
        className="
          w-28
          md:w-40
          lg:w-48
          object-contain
        "
      />
    </div>

    <h3 className="heading-font text-4xl md:text-5xl text-[#7A263A] mt-4">
  Ancima & Nitin
</h3> 

  </div>
</section>
        

      </main>
    </>
  );
}