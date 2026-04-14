import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      // Ring lags behind dot for smooth trailing effect
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => {
      if (ringRef.current) ringRef.current.style.transform += " scale(1.5)";
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.transform = ringRef.current.style.transform.replace(" scale(1.5)", "");
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transition: "none" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/60 rounded-full pointer-events-none z-[9998]"
        style={{ transition: "transform 0.1s ease, width 0.2s ease, height 0.2s ease" }}
      />
    </>
  );
};

export default CustomCursor;
