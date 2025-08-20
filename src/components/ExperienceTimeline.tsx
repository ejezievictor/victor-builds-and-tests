import ScrollAnimation from "./ScrollAnimation";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  current?: boolean;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ScrollAnimation key={index} delay={index * 200}>
            <div className="relative flex items-start gap-6">
              {/* Timeline dot */}
              <div className={`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                experience.current 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/30' 
                  : 'bg-background border-primary'
              }`}>
                {experience.current && (
                  <div className="w-3 h-3 bg-background rounded-full animate-pulse" />
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-poppins font-semibold text-lg text-foreground">
                      {experience.title}
                    </h3>
                    {experience.current && (
                      <span className="text-primary text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <span className="text-primary font-medium font-inter">
                      {experience.company}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {experience.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground font-inter text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;