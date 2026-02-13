const LoveLetter = () => {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
      <div className="max-w-lg mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border shadow-xl">
        <p className="text-muted-foreground italic text-center text-lg leading-relaxed">
          "Every love story is beautiful, but ours is special."
        </p>
        <div className="mt-6 text-center">
          <p className="text-foreground/80 leading-relaxed">
            You make every day feel like Valentine's Day. 
            Thank you for being the most amazing person in my life. 
            I love you more than words could ever say. 💕
          </p>
        </div>
        <p
          className="text-right mt-6 text-2xl text-primary"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Your Love ♥
        </p>
      </div>
    </div>
  );
};

export default LoveLetter;
