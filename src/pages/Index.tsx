import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ChevronDown, MapPin, Calendar, Trophy, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import TypingText from "@/components/TypingText";
import ScrollAnimation from "@/components/ScrollAnimation";
import TechSkills from "@/components/TechSkills";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";

// Import project images
import wabiRideImage from "@/assets/wabi-ride-mockup.jpg";
import winDrawLoseImage from "@/assets/win-draw-lose-real.jpg";
import beGoodImage from "@/assets/be-good-mockup.jpg";
import aftechImage from "@/assets/aftech-lky7bet.jpg";
import lupImage from "@/assets/lup-yipeebet.jpg";
import victorProfileImage from "@/assets/victor-profile-real.jpg";

const Index = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Win Draw Lose",
      description: "Sports prediction platform focused on football analytics, user statistics, and match prediction tracking. Currently in active development.",
      image: winDrawLoseImage,
      technologies: ["Flutter", "Dart", "Firebase", "QA Testing", "Appium"],
      liveUrl: "",
    },
    {
      title: "AFTECH (LKY7BET)",
      description: "High-traffic gaming platform with sports betting, casino games, and live gaming features. Led QA testing and product management for successful launches with comprehensive testing protocols.",
      image: aftechImage,
      technologies: ["QA Testing", "Product Management", "Jira", "API Testing"],
      liveUrl: "",
    },
    {
      title: "Lup Investment (YipeeBet)",
      description: "Investment and gaming platform with aviator games and betting features. Performed comprehensive manual and API testing ensuring platform reliability before launch.",
      image: lupImage,
      technologies: ["Manual Testing", "API Testing", "Postman", "Jira"],
      liveUrl: "",
    },
    {
      title: "Wabi Ride",
      description: "A comprehensive ride-hailing application with real-time GPS tracking, payment integration, and admin dashboard. Built with Flutter and fully QA tested across Android and iOS.",
      image: wabiRideImage,
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "QA Testing"],
      liveUrl: "https://github.com/ejezievictor/in-ride",
    },
    {
      title: "Be Good App",
      description: "A wellness and productivity application designed to help users build better habits and achieve their goals through intuitive design and motivational features.",
      image: beGoodImage,
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "",
    },
  ];

  const experiences = [
    {
      title: "Flutter Developer & QA Engineer (Contract)",
      company: "Win Draw Lose",
      period: "Feb 2025 – Present",
      description: [
        "Engineering core app features including analytics dashboards and prediction tracking using Flutter and Dart",
        "Designing and executing test cases across critical user flows, edge cases, and regression scenarios",
        "Building Appium automation suite for mobile regression testing",
        "Validating REST API endpoints via Postman to ensure data integrity",
      ],
      current: true,
    },
    {
      title: "QA Engineer & Product Manager (Full-Time)",
      company: "AFTECH",
      period: "May 2024 – Jun 2025",
      description: [
        "Led QA strategy and testing operations for a high-traffic gaming platform spanning sports betting, casino, and live games",
        "Managed cross-functional teams to coordinate successful feature releases",
        "Introduced structured QA checklists and release gates that reduced post-release defect rates",
        "Tracked and resolved defects end-to-end using Jira",
      ],
    },
    {
      title: "QA Engineer (Full-Time · Ran alongside AFTECH)",
      company: "Lup Investment",
      period: "May 2024 – Dec 2024",
      description: [
        "Performed manual testing and API validation across investment and gaming features",
        "Documented and tracked bugs through full resolution cycle using structured bug reporting",
        "Partnered with developers to stabilise the platform before major releases",
      ],
    },
    {
      title: "Flutter Developer & QA Engineer (Contract)",
      company: "Wabi Ride",
      period: "Feb 2023 – Jan 2025",
      description: [
        "Built the full Wabi Ride mobile app in Flutter with real-time GPS tracking and payment integration",
        "Developed and maintained the admin dashboard web interface",
        "Conducted end-to-end manual and automated QA testing across Android and iOS",
        "Resolved critical performance bottlenecks, improving app stability",
      ],
    },
  ];

  const certifications = [
    {
      title: "Software Testing Masterclass (2026) — From Novice to Expert",
      issuer: "Udemy",
      date: "April 2026",
      credentialId: "UC-603a588e-2ff8-418a-be62-7e6aa2b2e11f",
      url: "https://ude.my/UC-603a588e-2ff8-418a-be62-7e6aa2b2e11f",
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
                QA Engineer specializing in manual & automation testing, API testing,
                and mobile development with Flutter. 3 years of experience shipping
                reliable software across gaming, sports prediction, and ride-hailing products.
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
                  asChild
                >
                  <a
                    href="https://drive.google.com/uc?export=download&id=10gwo3RyC_6MaLpbnv4s3inp6yD_vu8gB"
                    download="Victor_Ejezie_CV.pdf"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
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
                Get to know the engineer behind the quality
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
                  <span className="font-inter">Lagos, Nigeria</span>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-inter">3 Years Experience</span>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="font-inter">QA Engineer | Flutter Developer | Product Manager</span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                    I'm a QA Engineer with a background in Flutter development — which means I don't
                    just find bugs, I understand why they happen. I've worked on gaming platforms,
                    sports prediction apps, and ride-hailing products, always focused on shipping
                    software that works reliably for real users.
                  </p>

                  <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                    I specialise in manual testing, automation (Appium, Selenium), and API testing
                    using Postman. I've also led cross-functional teams as a Product Manager, giving
                    me a full view of how products are built and delivered.
                  </p>

                  <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                    Outside work, you'll find me playing chess, football, or volleyball — strategy
                    and teamwork aren't just for the office.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-card/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <div className="inline-block">
                <h2 className="font-poppins font-bold text-5xl mb-6 gradient-text relative">
                  Skills & Expertise
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
                </h2>
              </div>
              <p className="text-muted-foreground text-xl font-inter max-w-3xl mx-auto leading-relaxed">
                Technologies and tools I use to build and test exceptional digital products
              </p>
            </div>
          </ScrollAnimation>

          <TechSkills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">Featured Projects</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                Products I've built, tested, and shipped
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 gradient-text">Certifications</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto">
                Continuous learning and professional development
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-lg text-foreground mb-1">
                            {cert.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                            <span className="text-primary font-medium">{cert.issuer}</span>
                            <span className="text-muted-foreground">·</span>
                            <span className="text-muted-foreground">{cert.date}</span>
                          </div>
                          <p className="text-muted-foreground text-xs mt-2 font-inter">
                            Credential ID: {cert.credentialId}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
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
              © 2026 Victor Ejezie. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
