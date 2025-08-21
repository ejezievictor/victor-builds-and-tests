import { Code, Smartphone, Database, Globe, TestTube, Users } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const TechSkills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
      skills: ["JavaScript", "HTML5", "CSS3", "WordPress", "Responsive Design"]
    },
    {
      title: "Development Tools",
      icon: Code,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      skills: ["Git", "VS Code", "Android Studio", "Figma", "Video Editing"]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      skills: ["Excel Advanced", "VLOOKUP", "Pivot Tables", "Reporting"]
    },
    {
      title: "Quality Assurance",
      icon: TestTube,
      color: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-400",
      skills: ["Manual Testing", "Test Planning", "Bug Tracking", "Quality Control", "User Testing"]
    },
    {
      title: "Project Management",
      icon: Users,
      color: "from-teal-500/20 to-green-500/20",
      iconColor: "text-teal-400",
      skills: ["Team Leadership", "Agile", "Product Design", "Decision Making", "Communication"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <ScrollAnimation key={category.title} delay={categoryIndex * 100}>
          <div className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl`}></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <ScrollAnimation key={skill} delay={categoryIndex * 100 + skillIndex * 50}>
                    <div className="flex items-center group/skill">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/skill:scale-125 group-hover/skill:bg-secondary transition-all duration-300"></div>
                      <span className="text-muted-foreground font-inter group-hover/skill:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default TechSkills;