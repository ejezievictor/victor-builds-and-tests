import { useEffect, useState } from "react";

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onDone, 600);
          }, 200);
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated rings */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
        <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDelay: "0.2s" }} />
        <div className="absolute inset-4 rounded-full border-2 border-primary/40 animate-ping" style={{ animationDelay: "0.4s" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-poppins font-bold shimmer-text">VE</div>
        </div>
      </div>

      <div className="font-poppins font-bold text-2xl gradient-text mb-2">Victor Ejezie</div>
      <div className="text-muted-foreground font-inter text-sm mb-8">QA Engineer · Flutter Developer</div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-150"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, hsl(191 100% 50%), hsl(270 100% 65%))",
            boxShadow: "0 0 8px hsl(191 100% 50% / 0.6)",
          }}
        />
      </div>
      <div className="text-muted-foreground text-xs font-inter mt-2">
        {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  );
};

export default LoadingScreen;
