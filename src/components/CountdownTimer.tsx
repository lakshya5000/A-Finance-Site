import { useEffect, useState } from "react";

interface TimeRemaining {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // TODO: Change this to your actual relationship start date
  const startDate = new Date("2025-11-03"); // CHANGE THIS DATE!
  
  const [timeElapsed, setTimeElapsed] = useState<TimeRemaining>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      // Calculate years and months
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      
      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate remaining days after years and months
      const tempDate = new Date(startDate);
      tempDate.setFullYear(startDate.getFullYear() + years);
      tempDate.setMonth(startDate.getMonth() + months);
      const remainingDays = Math.floor((now.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));

      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-rose-200">
        <h2
          className="text-4xl md:text-5xl text-rose-600 text-center mb-8"
          style={{ fontFamily: "var(--font-script)" }}
        >
          Our Love Story
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {/* Years */}
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4 text-center">
            <div className="text-4xl md:text-5xl font-bold text-rose-600">
              {timeElapsed.years}
            </div>
            <div className="text-sm md:text-base text-rose-500 mt-2 font-semibold">
              Years
            </div>
          </div>

          {/* Months */}
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-4 text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-600">
              {timeElapsed.months}
            </div>
            <div className="text-sm md:text-base text-pink-500 mt-2 font-semibold">
              Months
            </div>
          </div>

          {/* Days */}
          <div className="bg-gradient-to-br from-rose-100 to-red-100 rounded-2xl p-4 text-center">
            <div className="text-4xl md:text-5xl font-bold text-rose-600">
              {timeElapsed.days}
            </div>
            <div className="text-sm md:text-base text-rose-500 mt-2 font-semibold">
              Days
            </div>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-4 text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-600">
              {timeElapsed.hours}
            </div>
            <div className="text-sm md:text-base text-red-500 mt-2 font-semibold">
              Hours
            </div>
          </div>

          {/* Minutes */}
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-4 text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-600">
              {timeElapsed.minutes}
            </div>
            <div className="text-sm md:text-base text-pink-500 mt-2 font-semibold">
              Minutes
            </div>
          </div>

          {/* Seconds */}
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4 text-center">
            <div className="text-4xl md:text-5xl font-bold text-rose-600">
              {timeElapsed.seconds}
            </div>
            <div className="text-sm md:text-base text-rose-500 mt-2 font-semibold">
              Seconds
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-lg text-rose-500 italic">
          ...and counting every moment with you ❤️
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;