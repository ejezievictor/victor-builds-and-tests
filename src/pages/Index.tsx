import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ChevronDown, MapPin, Calendar, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";
import TypingText from "@/components/TypingText";
import ScrollAnimation from "@/components/ScrollAnimation";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";

// Import project images
import wabiRideImage from "@/assets/wabi-ride-mockup.jpg";
import winDrawLoseImage from "@/assets/win-draw-lose-mockup.jpg";
import beGoodImage from "@/assets/be-good-mockup.jpg";
import victorProfileImage from "@/assets/victor-profile.jpg";

const Index = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "Flutter & Dart", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "HTML & CSS", percentage: 90 },
    { name: "QA Testing", percentage: 92 },
    { name: "Project Management", percentage: 88 },
    { name: "WordPress", percentage: 80 },
    { name: "Microsoft Excel", percentage: 95 },
    { name: "Video Editing", percentage: 75 },
  ];

  const projects = [
    {
      title: "Wabi Ride",
      description: "A comprehensive ride-hailing application with real-time tracking, payment integration, and admin dashboard. Built with Flutter for mobile and web technologies for the admin panel.",
      image: wabiRideImage,
      technologies: ["Flutter", "Dart", "Web Development", "QA Testing"],
      liveUrl: "#",
    },
    {
      title: "Win Draw Lose",
      description: "Sports prediction platform focusing on football matches with advanced analytics, user statistics, and prediction tracking. Currently in active development.",
      image: winDrawLoseImage,
      technologies: ["Flutter", "Dart", "Sports Analytics", "QA Testing"],
      liveUrl: "#",
    },
    {
      title: "Be Good",
      description: "A wellness and productivity application designed to help users build better habits and achieve their goals through intuitive design and motivational features.",
      image: beGoodImage,
      technologies: ["Flutter", "Dart", "UI/UX Design"],
      liveUrl: "#",
    },
  ];

  const experiences = [
    {
      title: "Flutter Developer | QA Tester",
      company: "Win Draw Lose",
      period: "Present",
      description: [
        "Currently developing and testing a sports-related prediction app",
        "Implementing robust testing strategies for mobile applications",
        "Collaborating with team to ensure quality deliverable"
      ],
      current: true,
    },
    {
      title: "QA Tester | Product Manager",
      company: "AFTECH",
      period: "2024 – 2025",
      description: [
        "Led product testing and quality assurance processes",
        "Managed cross-functional teams for successful product launches",
        "Implemented testing protocols that improved product reliability"
      ],
    },
    {
      title: "QA Tester",
      company: "Lup Investment",
      period: "2024",
      description: [
        "Performed comprehensive manual testing to ensure platform reliability",
        "Documented and tracked bugs through resolution",
        "Collaborated with development team to improve product quality"
      ],
    },
    {
      title: "Flutter Developer | Web Developer | QA Tester",
      company: "Wabi Ride",
      period: "2023 – 2025",
      description: [
        "Built and optimized the Wabi Ride mobile app using Flutter",
        "Developed and maintained the admin dashboard website",
        "Conducted comprehensive QA testing, ensuring seamless user experience"
      ],
    },
    {
      title: "Flutter Developer",
      company: "Be Good",
      period: "2023 – 2024",
      description: [
        "Developed responsive and visually appealing Flutter applications",
        "Implemented user-friendly interfaces and smooth animations",
        "Collaborated with design team to deliver pixel-perfect implementations"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_70%)] bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollAnimation>
              <h1 className="font-poppins font-bold text-5xl sm:text-6xl lg:text-7xl mb-6">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-text">Victor Ejezie</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-inter h-16 flex items-center justify-center">
                <TypingText 
                  text="Building Beautiful Apps. Breaking Bugs. Driving Quality." 
                  speed={50}
                  className="font-medium"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={600}>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
                Mobile Developer & Project Manager specializing in Flutter development, 
                quality assurance, and creating seamless digital experiences.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation delay={900}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary text-foreground hover:text-primary px-8 py-3 text-lg font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">About Me</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                Get to know the developer behind the code
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative">
                <img
                  src={victorProfileImage}
                  alt="Victor Ejezie"
                  className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-2xl"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-inter">Nigeria</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-inter">2+ Years Experience</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="font-inter">Flutter Developer | QA Tester | Project Manager</span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                    I'm a versatile tech professional with expertise in Flutter development, web technologies, 
                    and quality assurance (QA). My toolkit spans Dart, Flutter, JavaScript, HTML, CSS, and 
                    advanced Microsoft Excel skills (VLOOKUP, HLOOKUP, Pivot Tables, and more).
                  </p>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                    I thrive on creating pixel-perfect mobile experiences, managing projects with precision, 
                    and ensuring product quality at every stage. A quick learner and natural problem solver, 
                    I enjoy leading teams, shaping product design, and making impactful decisions.
                  </p>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                    Beyond work, you'll find me playing chess, football, or volleyball—because strategy 
                    and teamwork aren't just for the office.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">Skills & Expertise</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ScrollAnimation>
                <h3 className="font-poppins font-semibold text-2xl mb-8 text-primary">Technical Skills</h3>
              </ScrollAnimation>
              <div className="space-y-4">
                {skills.slice(0, 4).map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>

            <div>
              <ScrollAnimation>
                <h3 className="font-poppins font-semibold text-2xl mb-8 text-primary">Additional Skills</h3>
              </ScrollAnimation>
              <div className="space-y-4">
                {skills.slice(4).map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100 + 400}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">Featured Projects</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                Some of the projects I've worked on recently
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">Experience</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                My professional journey and key achievements
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline experiences={experiences} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">Let's Work Together</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can bring your ideas to life
              </p>
            </div>
          </ScrollAnimation>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground font-inter">
              © 2025 Victor Ejezie. Built with passion using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;