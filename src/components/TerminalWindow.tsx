import { useState, useEffect } from "react";

const lines = [
  { text: "$ appium run test:suite --platform all", type: "cmd" },
  { text: "", type: "blank" },
  { text: "Running 12 tests across Android & iOS...", type: "info" },
  { text: "", type: "blank" },
  { text: "AUTH", label: "User authentication flow", type: "pass", time: "23ms" },
  { text: "PAYMENT", label: "Payment integration check", type: "pass", time: "45ms" },
  { text: "GPS", label: "Real-time GPS tracking", type: "pass", time: "67ms" },
  { text: "API", label: "REST API schema validation", type: "pass", time: "12ms" },
  { text: "UI", label: "Cross-platform render", type: "pass", time: "89ms" },
  { text: "EDGE", label: "Edge case handling", type: "pass", time: "31ms" },
  { text: "", type: "blank" },
  { text: "12 passed, 0 failed  •  267ms", type: "success" },
];

const TerminalWindow = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    if (visibleCount < lines.length) {
      const delay = lines[visibleCount]?.type === "blank" ? 150 :
                    lines[visibleCount]?.type === "cmd"   ? 600 :
                    lines[visibleCount]?.type === "info"  ? 400 :
                    lines[visibleCount]?.type === "success"? 300 : 220;
      const t = setTimeout(() => setVisibleCount((c) => c + 1), delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLooping(true);
        setVisibleCount(0);
        setLooping(false);
      }, 3500);
      return () => clearTimeout(t);
    }
  }, [visibleCount, looping]);

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Glow behind terminal */}
      <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl pointer-events-none" />

      {/* Terminal frame */}
      <div className="relative rounded-xl overflow-hidden border border-border/60 shadow-2xl"
        style={{ background: "hsl(222 25% 3%)" }}>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40"
          style={{ background: "hsl(222 25% 5%)" }}>
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-muted-foreground text-xs font-inter">victor@qa-machine ~ test-suite</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-xs leading-6 min-h-[240px]">
          {lines.slice(0, visibleCount).map((line, i) => {
            if (line.type === "blank") return <div key={i} className="h-2" />;

            if (line.type === "cmd") return (
              <div key={i} className="text-primary">
                {line.text}
                {i === visibleCount - 1 && <span className="animate-pulse">▋</span>}
              </div>
            );

            if (line.type === "info") return (
              <div key={i} className="text-muted-foreground">{line.text}</div>
            );

            if (line.type === "pass") return (
              <div key={i} className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span className="text-green-400/60 text-[10px] w-12 shrink-0">{line.text}</span>
                <span className="text-foreground/80 flex-1">{line.label}</span>
                <span className="text-muted-foreground text-[10px]">{line.time}</span>
              </div>
            );

            if (line.type === "success") return (
              <div key={i} className="mt-1 text-green-400 font-semibold">
                ✓ {line.text}
              </div>
            );

            return null;
          })}

          {/* Blinking cursor at end */}
          {visibleCount >= lines.length && (
            <div className="text-primary mt-1">
              $ <span className="animate-pulse">▋</span>
            </div>
          )}
        </div>
      </div>

      {/* PASS badge floating */}
      <div
        className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-poppins font-bold text-background"
        style={{ background: "linear-gradient(135deg, hsl(142 70% 45%), hsl(142 70% 35%))",
                 boxShadow: "0 0 16px hsl(142 70% 45% / 0.5)" }}
      >
        ALL PASS
      </div>
    </div>
  );
};

export default TerminalWindow;
