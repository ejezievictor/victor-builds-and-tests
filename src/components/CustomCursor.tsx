import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let hovered = false;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      ringX += (dotX - ringX) * 0.15;
      ringY += (dotY - ringY) * 0.15;

      const scale = hovered ? 1.6 : 1;
      const dot = dotRef.current;
      const ring = ringRef.current;

      if (dot) dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      if (ring) ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px) scale(${scale})`;

      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => { hovered = true; };
    const onLeave = () => { hovered = false; };

    const addListeners = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addListeners();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{ transition: "none" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/60 rounded-full pointer-events-none z-[9998] will-change-transform"
        style={{ transition: "scale 0.15s ease" }}
      />
    </>
  );
};

export default CustomCursor;
