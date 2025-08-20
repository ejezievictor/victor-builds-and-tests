import { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay + 500);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <ScrollAnimation delay={delay}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-foreground font-medium font-inter">{skill}</span>
          <span className="text-primary font-semibold">{percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out shadow-sm"
            style={{ width: `${animatedPercentage}%` }}
          />
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default SkillBar;