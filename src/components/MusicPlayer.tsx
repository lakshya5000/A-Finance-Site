import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // TODO: Replace this URL with your own song
  // You can upload your song to your project's public folder or use a URL
  const songUrl = "our-song.mp3";
  const songTitle = "Her"; // CHANGE THIS
  const artist = "Gian ♥ Lakshya"; // CHANGE THIS

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto-play when component mounts
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay might be blocked by browser
        console.log("Autoplay blocked, user needs to interact first");
      }
    };

    playAudio();

    // Update duration when metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // Update current time
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-rose-200">
        <audio ref={audioRef} src={songUrl} loop />

        <div className="flex items-center gap-4 md:gap-6">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" />}
          </button>

          {/* Song Info and Progress */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <div className="min-w-0 flex-1">
                <h3
                  className="text-xl md:text-2xl text-rose-600 font-semibold truncate"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  {songTitle}
                </h3>
                <p className="text-sm md:text-base text-rose-400 truncate">{artist}</p>
              </div>
              
              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="flex-shrink-0 ml-4 w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center hover:bg-rose-200 transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-400 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-2 bg-rose-200 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-rose-500
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:shadow-lg
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-rose-500
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, rgb(244, 63, 94) 0%, rgb(244, 63, 94) ${
                    (currentTime / duration) * 100
                  }%, rgb(254, 205, 211) ${(currentTime / duration) * 100}%, rgb(254, 205, 211) 100%)`,
                }}
              />
              <span className="text-xs text-rose-400 w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Music Note Animation */}
        {isPlaying && (
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-rose-400 text-2xl animate-bounce" style={{ animationDelay: "0s" }}>
              🎵
            </span>
            <span className="text-rose-400 text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>
              🎶
            </span>
            <span className="text-rose-400 text-2xl animate-bounce" style={{ animationDelay: "0.4s" }}>
              🎵
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;