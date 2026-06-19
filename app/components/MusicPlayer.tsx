"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mpeg" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6 z-[9999]
          w-16 h-16 rounded-full
          bg-[#C7A04A]
          text-white
          shadow-xl
          border-2 border-white
          flex items-center justify-center
          text-2xl
          transition-all duration-300
          hover:scale-110
        "
      >
        {playing ? "♫" : "♪"}
      </button>
    </>
  );
}