import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetter from "@/components/LoveLetter";
import InfiniteSlider from "@/components/InfiniteSlider";
import ValentineQuestion from "@/components/ValentineQuestion";
import TeddyBearOpening from "@/components/TeddyBearOpening";
import CountdownTimer from "@/components/CountdownTimer";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [teddyClicked, setTeddyClicked] = useState(false);

  if (!teddyClicked) {
    return <TeddyBearOpening onOpen={() => setTeddyClicked(true)} />;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-red-100">
      <FloatingHearts />

      {/* Add some flowers floating around */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-5xl opacity-30 animate-float-butterfly"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {['🌹', '🌸', '🌺', '💐', '🌷', '🌻'][i]}
          </span>
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl">
        {/* Main heart */}
        <div className="animate-fade-in-up text-6xl md:text-8xl animate-pulse-glow inline-block">
          ❤️
        </div>

        {/* Script title */}
        <h1
          className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl text-primary"
          style={{ fontFamily: "var(--font-script)", animationDelay: "0.3s" }}
        >
          Happy Valentine's Day
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up text-xl md:text-2xl text-muted-foreground"
          style={{ animationDelay: "0.5s" }}
        >
          To the love of my life
        </p>

        {/* Love letter */}
        <LoveLetter />
      </div>

      {/* Infinite photo slider */}
      <div className="relative z-10 w-full mt-12 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
        <InfiniteSlider />
      </div>

      {/* Countdown Timer - NEW */}
      <div className="relative z-10 w-full mt-12 animate-fade-in-up" style={{ animationDelay: "1.5s" }}>
        <CountdownTimer />
      </div>

      {/* Music Player - NEW */}
      <div className="relative z-10 w-full mt-8 animate-fade-in-up" style={{ animationDelay: "1.8s" }}>
        <MusicPlayer />
      </div>

      {/* Valentine question */}
      <div className="relative z-10 w-full mt-12 animate-fade-in-up" style={{ animationDelay: "2.1s" }}>
        <ValentineQuestion />
      </div>
    </div>
  );
};

export default Index;