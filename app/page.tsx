"use client";

import { useState } from "react";
import FloatingPetals from "./components/FloatingPetals";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import LotusDivider from "./components/LotusDivider";
import OrnamentDivider from "./components/OrnamentDivider";

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
    min-h-[90vh]
    flex
    items-center
   
    px-6
    py-20
    bg-cover
    bg-center
    bg-no-repeat
    relative
  "
  style={{
    backgroundImage: "url('/hero-background.png')",
  }}
>
  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-white/15" />

  <div
  className="
    relative
    z-10
    text-center
    max-w-3xl
    mx-auto
    flex
    flex-col
    items-center
  "
>

    {/* Ganesha */}
    <img
      src="/ganesha.png"
      alt="Ganesha"
      className="
        w-16
        md:w-20
        mx-auto
        mb-6
      "
    />

    {/* Bride */}
    <h1
      className="
        heading-font
        text-[3.8rem]
        md:text-7xl
        text-[#7A263A]
        leading-none
      "
    >
      Ancima
    </h1>

    {/* Ampersand */}
    <p
      className="
        heading-font
        text-4xl
        text-[#C7A04A]
        my-2
      "
    >
      &
    </p>

    {/* Groom */}
    <h1
      className="
        heading-font
        text-[3.8rem]
        md:text-7xl
        text-[#7A263A]
        leading-none
      "
    >
      Nitin
    </h1>

    {/* Divider */}
    <div className="mt-4 mb-5">
      <OrnamentDivider />
    </div>

    {/* Invitation */}
    <p
      className="
        max-w-md
        mx-auto
        text-gray-700
        text-lg
        leading-8
        mt-2
      "
    >
      Together with our families,
      <br />
      we request the honour of your presence
      <br />
      as we celebrate our wedding.
    </p>

    {/* Date */}
    

    {/* Small Floral Divider */}
    <div className="flex justify-center mt-8">
      <div className="w-20 h-px bg-[#D4AF37]/40" />
    </div>

  </div>
</section>

        {/* MUHURTHAM */}
        {/* MUHURTHAM */}
<section
  className="py-20 px-5 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('/temple-background.png')",
  }}
>
  <div
    className="
      max-w-5xl
      mx-auto
      bg-[#FFFDF8]/1
      backdrop-blur-md
      border
      border-white/10
      rounded-[42px]
      shadow-[0_25px_80px_rgba(0,0,0,0.12)]
      p-6
      md:p-10
    "
  >
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

      {/* Temple Image */}
      <div className="flex justify-center">
        <div className="bg-white-5 p-2 rounded-[34px] shadow-xl">
          <img
            src="/temple.png"
            alt="Sree Vadakkumnathan Temple"
            className="
              w-full
              max-w-md
              h-[220px]
              sm:h-[280px]
              md:h-[500px]
              object-cover
              rounded-[28px]
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center md:text-left">

        {/* Heading */}
        <p
          className="
            uppercase
            tracking-[0.45em]
            text-[12px]
            text-[#C7A04A]
            font-medium
            mb-3
          "
        >
          Wedding Ceremony
        </p>

        <h2
          className="
            heading-font
            text-4xl
            md:text-6xl
            text-[#7A263A]
            leading-none
            mb-6
          "
        >
          Muhurtham
        </h2>

        {/* Description */}
        <p
          className="
            text-gray-600
            leading-8
            text-[17px]
            max-w-md
            mx-auto
            md:mx-0
          "
        >
          As the temple bells resonate and sacred vows are exchanged,
          we seek your presence and blessings as we begin our journey
          together.
        </p>

        {/* Date */}
        <div className="my-8">

          <p
            className="
              text-3xl
              heading-font
              text-[#7A263A]
            "
          >
            23 August 2026
          </p>

          <p
            className="
              mt-2
              text-lg
              text-gray-500
            "
          >
            10:45 AM – 11:15 AM
          </p>

        </div>

        {/* Venue */}
        <h3
          className="
            heading-font
            text-3xl
            md:text-5xl
            leading-tight
            text-[#7A263A]
          "
        >
          Sree Vadakkumnathan
          <br />
          Temple
        </h3>

        <p
          className="
            mt-3
            text-lg
            text-gray-500
          "
        >
          Thrissur, Kerala
        </p>

        {/* Button */}
        <a
          href="https://maps.app.goo.gl/8s7wGGECJgb2RsRd8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            mt-10
            px-8
            py-3.5
            rounded-full
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#C9A227]
            text-white
            font-medium
            tracking-wide
            shadow-lg
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-2xl
          "
        >
          View Location
        </a>

      </div>

    </div>
  </div>
</section>
        {/* Lunch */}
{/* LUNCH */}
<section
  className="py-20 px-5 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('/lunch-background.png')",
  }}
>
  <div
    className="
      max-w-5xl
      mx-auto
      bg-[#FFFDF8]/15
      backdrop-blur-md
      border
      border-white/10
      rounded-[42px]
      shadow-[0_25px_80px_rgba(0,0,0,0.12)]
      p-6
      md:p-10
    "
  >
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

      {/* Content */}
      <div
        className="
          text-center
          md:text-left
          order-2
          md:order-1
        "
      >
        {/* Section Label */}
        <p
          className="
            uppercase
            tracking-[0.45em]
            text-[12px]
            text-[#C7A04A]
            font-medium
            mb-3
          "
        >
          Celebration Lunch
        </p>

        {/* Heading */}
        <h2
          className="
            heading-font
            text-4xl
            md:text-6xl
            text-[#7A263A]
            leading-none
            mb-6
          "
        >
          Wedding Feast
        </h2>

        {/* Description */}
        <p
          className="
            text-gray-600
            leading-8
            text-[17px]
            max-w-md
            mx-auto
            md:mx-0
          "
        >
          Following the ceremony, please join us for a celebratory
          lunch as we gather with family and friends to share joy,
          laughter and blessings.
        </p>

        {/* Time */}
        <div className="my-8">
          <p
            className="
              heading-font
              text-3xl
              text-[#7A263A]
            "
          >
            11:30 AM Onwards
          </p>
        </div>

        {/* Venue */}
        <h3
          className="
            heading-font
            text-3xl
            md:text-5xl
            leading-tight
            text-[#7A263A]
            mb-4
          "
        >
          Aishwarya Regency
        </h3>

        <p
          className="
            text-gray-500
            text-lg
            leading-8
          "
        >
          Kunnath Mana Lane
          <br />
          Naikkanal, Thrissur
          <br />
          Kerala 680001
        </p>

        {/* Button */}
        <a
          href="https://maps.app.goo.gl/Qr4act5aMnY7h7PM8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            mt-10
            px-8
            py-3.5
            rounded-full
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#C9A227]
            text-white
            font-medium
            tracking-wide
            shadow-lg
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-2xl
          "
        >
          View Location
        </a>
      </div>

      {/* Image */}
      <div
        className="
          flex
          justify-center
          order-1
          md:order-2
        "
      >
        <div className="bg-white-5 p-2 rounded-[34px] shadow-xl">
          <img
            src="/lunch.png"
            alt="Wedding Feast"
            className="
              w-full
              max-w-md
              h-[220px]
              sm:h-[280px]
              md:h-[500px]
              object-cover
              rounded-[28px]
            "
          />
        </div>
      </div>

    </div>
  </div>
</section>

        {/* GALLERY */}
        

        {/* COUNTDOWN */}
        <Countdown />

        
        {/* Thank You */}
        {/* THANK YOU */}
<section
  className="py-20 px-5 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('/thankyou-background.png')",
  }}
>
  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-white/10" />

  <div
    className="
      relative
      z-10
      max-w-2xl
      mx-auto
      bg-[#FFFDF8]/70
      backdrop-blur-md
      border
      border-white/5
      rounded-[42px]
      shadow-[0_25px_80px_rgba(0,0,0,0.12)]
      px-8
      py-10
      text-center
    "
  >
    {/* Section Label */}
    <p
      className="
        uppercase
        tracking-[0.45em]
        text-[#C7A04A]
        text-xs
        mb-4
      "
    >
      With Grateful Hearts
    </p>

    {/* Heading */}
    <h2
      className="
        heading-font
        text-5xl
        md:text-6xl
        text-[#7A263A]
        mb-8
      "
    >
      Thank You
    </h2>

    {/* Message */}
    <p
      className="
        text-gray-600
        text-[17px]
        leading-8
        max-w-lg
        mx-auto
      "
    >
      Your presence, love and blessings mean the world to us.
      <br />
      <br />
      Thank you for celebrating this beautiful day with us.
      We are grateful to share these cherished moments with
      our family and friends, and we look forward to beginning
      this new chapter surrounded by your love and blessings.
    </p>

    {/* Divider */}
    <div className="flex justify-center my-8">
      <div className="w-20 h-px bg-[#D4AF37]/40" />
    </div>

    {/* Closing */}
    <p
      className="
        uppercase
        tracking-[0.35em]
        text-[#7A263A]
        text-sm
      "
    >
      With Love
    </p>

    {/* Logo */}
    <img
      src="/logo.png"
      alt="Ancima & Nitin"
      className="
        w-24
        md:w-28
        mx-auto
        mt-5
        mb-5
        object-contain
      "
    />

    {/* Names */}
    <h3
      className="
        heading-font
        text-4xl
        md:text-5xl
        text-[#7A263A]
      "
    >
      Ancima & Nitin
    </h3>
  </div>
</section>


        

      </main>
    </>
  );
}