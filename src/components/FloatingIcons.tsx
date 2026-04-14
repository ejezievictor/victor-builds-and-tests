const icons = [
  { label: "Flutter",   color: "#54C5F8", x: "10%",  y: "20%", delay: "0s",    size: 42 },
  { label: "Selenium",  color: "#43B02A", x: "85%",  y: "15%", delay: "0.5s",  size: 36 },
  { label: "Appium",   color: "#6B4FBB", x: "80%",  y: "70%", delay: "1s",    size: 38 },
  { label: "Postman",   color: "#FF6C37", x: "15%",  y: "75%", delay: "1.5s",  size: 34 },
  { label: "Dart",      color: "#00B4AB", x: "50%",  y: "10%", delay: "2s",    size: 32 },
  { label: "Jira",      color: "#0052CC", x: "92%",  y: "45%", delay: "0.8s",  size: 30 },
  { label: "Firebase",  color: "#FFCA28", x: "5%",   y: "50%", delay: "1.2s",  size: 32 },
  { label: "Git",       color: "#F05032", x: "70%",  y: "88%", delay: "0.3s",  size: 30 },
];

const FloatingIcons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {icons.map((icon) => (
      <div
        key={icon.label}
        className="absolute hidden lg:flex flex-col items-center gap-1 opacity-20 hover:opacity-50 transition-opacity duration-300"
        style={{
          left: icon.x,
          top: icon.y,
          animationName: "floatY",
          animationDuration: `${4 + Math.random() * 3}s`,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDelay: icon.delay,
        }}
      >
        <div
          className="rounded-xl flex items-center justify-center font-poppins font-bold text-white text-xs"
          style={{
            width: icon.size,
            height: icon.size,
            background: `${icon.color}22`,
            border: `1px solid ${icon.color}44`,
            color: icon.color,
            fontSize: icon.size * 0.28,
          }}
        >
          {icon.label.slice(0, 2).toUpperCase()}
        </div>
        <span className="text-[9px] font-inter" style={{ color: icon.color }}>{icon.label}</span>
      </div>
    ))}
  </div>
);

export default FloatingIcons;
