import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl,
  delay = 0 
}: ProjectCardProps) => {
  return (
    <ScrollAnimation delay={delay}>
      <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardHeader>
          <CardTitle className="font-poppins text-xl text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground font-inter">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2">
            {liveUrl && (
              <Button size="sm" className="flex-1" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" className="flex-1" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
};

export default ProjectCard;