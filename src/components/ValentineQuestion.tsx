import { useState, useCallback, useEffect, useRef } from "react";

const ValentineQuestion = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const runAway = useCallback(() => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 300;
    setNoPos({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
    setHasMoved(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        runAway();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [runAway]);

  if (accepted) {
    return <CelebrationBurst />;
  }

  return (
    <div className="relative flex flex-col items-center gap-8 py-16 px-4 min-h-[300px]">
      <h2
        className="text-4xl md:text-5xl text-primary text-center"
        style={{ fontFamily: "var(--font-script)" }}
      >
        Will you be my Valentine? 💕
      </h2>

      <div className="flex items-center gap-8 relative">
        <button
          onClick={() => setAccepted(true)}
          className="px-10 py-4 rounded-full bg-primary text-primary-foreground text-xl font-semibold shadow-lg hover:scale-110 transition-transform duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Yes! 💖
        </button>

        <button
          ref={btnRef}
          onMouseEnter={runAway}
          onMouseOver={runAway}
          onTouchStart={runAway}
          onFocus={runAway}
          onClick={(e) => { e.preventDefault(); runAway(); }}
          className="px-10 py-4 rounded-full bg-muted text-muted-foreground text-xl font-semibold shadow"
          style={{
            fontFamily: "var(--font-display)",
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            position: hasMoved ? "absolute" : "relative",
            zIndex: 50,
            transition: "transform 0.12s ease-out",
          }}
        >
          No
        </button>
      </div>

      {hasMoved && (
        <p className="text-muted-foreground italic animate-fade-in-up text-center">
          Hehe, you can't say no! 😏
        </p>
      )}
    </div>
  );
};

/* ---- Celebration Burst ---- */

interface Particle {
  id: number;
  emoji: string;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const CelebrationBurst = () => {
  const emojis = ["🌹", "❤️", "💐", "🌸", "💕", "🌺", "🥰", "💖", "🌷", "✨"];
  const particles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    emoji: emojis[i % emojis.length],
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 20 + Math.random() * 30,
    duration: 1 + Math.random() * 2,
    delay: Math.random() * 1.5,
  }));

  return (
    <div className="relative py-16 px-4 text-center min-h-[400px] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-50">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute animate-celebration-pop"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              fontSize: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 space-y-6 animate-fade-in-up">
        <div className="text-6xl md:text-8xl">🥰</div>
        <h2
          className="text-5xl md:text-6xl text-primary"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Yaaay! 💖
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>
          I knew you'd say yes! Happy Valentine's Day, my love! 🌹
        </p>
      </div>
    </div>
  );
};

export default ValentineQuestion;
