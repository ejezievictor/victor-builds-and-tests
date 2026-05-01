import { useRef, MouseEvent } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
  portrait?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  delay = 0,
  portrait = false,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;

    // Spotlight effect
    const spotlight = card.querySelector(".spotlight") as HTMLElement;
    if (spotlight) {
      spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,212,255,0.08), transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    const spotlight = card.querySelector(".spotlight") as HTMLElement;
    if (spotlight) spotlight.style.background = "transparent";
  };

  return (
    <ScrollAnimation delay={delay}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative"
        style={{ transition: "transform 0.1s ease", transformStyle: "preserve-3d" }}
      >
        {/* Animated border glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-60 blur transition-opacity duration-500" />

        <Card className="relative bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden h-full">
          {/* Spotlight overlay */}
          <div className="spotlight absolute inset-0 z-10 pointer-events-none rounded-xl transition-all duration-200" />

          <div className={`relative overflow-hidden flex items-center justify-center ${portrait ? "h-72" : ""}`}
            style={portrait ? { background: "linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0a2a3a 70%, #061420 100%)" } : {}}
          >
            <img
              src={image}
              alt={title}
              className={`transition-transform duration-500 group-hover:scale-105 ${portrait ? "h-72 w-auto object-contain" : "w-full h-48 object-cover group-hover:scale-110"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardHeader>
            <CardTitle className="font-poppins text-xl text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground font-inter leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              {liveUrl && (
                <Button
                  size="sm"
                  className="flex-1 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300"
                  asChild
                >
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button size="sm" variant="outline"
                  className="flex-1 border-border/50 hover:border-primary/40 hover:text-primary transition-all duration-300"
                  asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              {!liveUrl && !githubUrl && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/40 bg-muted/30 text-muted-foreground text-xs font-inter w-full justify-center">
                  <Lock className="w-3 h-3" />
                  Private Repository
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCard;
