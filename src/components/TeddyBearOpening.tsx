import { useState } from "react";

interface TeddyBearOpeningProps {
  onOpen: () => void;
}

const TeddyBearOpening = ({ onOpen }: TeddyBearOpeningProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100">
      {/* Floating hearts in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-20 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${30 + Math.random() * 40}px`,
              animationDuration: `${8 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="relative text-center">
        {/* Instruction text */}
        {!isClicked && (
          <p
            className="absolute -top-24 left-1/2 -translate-x-1/2 text-rose-600 text-2xl md:text-3xl animate-bounce whitespace-nowrap"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Click me! 💕
          </p>
        )}

        <div
          onClick={handleClick}
          className={`relative cursor-pointer transition-all duration-500 ${
            isClicked ? "scale-110" : "hover:scale-105"
          }`}
        >
          {/* Flowers around teddy bear */}
          <div className="relative">
            {/* Top flowers */}
            <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6">
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0s" }}>🌹</span>
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.3s" }}>🌸</span>
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.6s" }}>🌺</span>
            </div>

            {/* Left flowers */}
            <div className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6">
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.2s" }}>💐</span>
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.5s" }}>🌷</span>
            </div>

            {/* Right flowers */}
            <div className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6">
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.4s" }}>🌻</span>
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.7s" }}>🌼</span>
            </div>

            {/* Bottom flowers */}
            <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6">
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.1s" }}>🏵️</span>
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.8s" }}>💮</span>
              <span className="text-5xl md:text-7xl animate-gentle-sway" style={{ animationDelay: "0.3s" }}>🌺</span>
            </div>

            {/* Big Teddy Bear in center */}
            <div className="relative z-10">
              <div className={`text-[16rem] md:text-[20rem] filter drop-shadow-2xl transition-all duration-1000 ${
                isClicked ? "animate-gentle-bounce" : "animate-gentle-bounce"
              }`}>
                🧸
              </div>
            </div>
          </div>
        </div>

        {/* Message when clicked */}
        {isClicked && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in-up">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl">
              <div className="text-6xl mb-3">💕</div>
              <h2
                className="text-5xl md:text-6xl text-rose-600 mb-2"
                style={{ fontFamily: "var(--font-script)" }}
              >
                For You
              </h2>
              <p className="text-xl text-rose-500">My Love</p>
            </div>
          </div>
        )}

        {/* Sparkles when clicked */}
        {isClicked && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="absolute text-3xl animate-sparkle"
                style={{
                  left: `${50 + (Math.random() - 0.5) * 80}%`,
                  top: `${50 + (Math.random() - 0.5) * 80}%`,
                  animationDelay: `${Math.random() * 0.8}s`,
                }}
              >
                ✨
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeddyBearOpening;