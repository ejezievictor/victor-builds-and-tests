import ScrollAnimation from "./ScrollAnimation";

const TechSkills = () => {
  const technicalSkills = [
    "Flutter & Dart",
    "JavaScript", 
    "HTML & CSS",
    "WordPress"
  ];

  const additionalSkills = [
    "QA Testing",
    "Project Management", 
    "Microsoft Excel",
    "Video Editing"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <ScrollAnimation>
          <h3 className="font-poppins font-semibold text-2xl mb-8 text-primary">Technical Skills</h3>
        </ScrollAnimation>
        <div className="grid grid-cols-2 gap-4">
          {technicalSkills.map((skill, index) => (
            <ScrollAnimation key={skill} delay={index * 100}>
              <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                    </div>
                    <p className="font-inter font-medium text-foreground group-hover:text-primary transition-colors">{skill}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <div>
        <ScrollAnimation>
          <h3 className="font-poppins font-semibold text-2xl mb-8 text-primary">Additional Skills</h3>
        </ScrollAnimation>
        <div className="grid grid-cols-2 gap-4">
          {additionalSkills.map((skill, index) => (
            <ScrollAnimation key={skill} delay={index * 100 + 400}>
              <div className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse" />
                    </div>
                    <p className="font-inter font-medium text-foreground group-hover:text-secondary transition-colors">{skill}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;