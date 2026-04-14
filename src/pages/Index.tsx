import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ChevronDown, MapPin, Calendar, Trophy, Award, Briefcase, Code2, CheckCircle2, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import TypingText from "@/components/TypingText";
import ScrollAnimation from "@/components/ScrollAnimation";
import TechSkills from "@/components/TechSkills";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactForm from "@/components/ContactForm";
import Particles from "@/components/Particles";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingIcons from "@/components/FloatingIcons";
import TerminalWindow from "@/components/TerminalWindow";
import { useState } from "react";

import wabiRideImage from "@/assets/wabi-ride-mockup.jpg";
import winDrawLoseImage from "@/assets/win-draw-lose-real.jpg";
import beGoodImage from "@/assets/be-good-mockup.jpg";
import aftechImage from "@/assets/aftech-lky7bet.jpg";
import lupImage from "@/assets/lup-yipeebet.jpg";
import victorProfileImage from "@/assets/victor-profile-real.jpg";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { icon: Calendar,     value: "3",  label: "Years Experience" },
    { icon: Briefcase,    value: "4",  label: "Companies" },
    { icon: Code2,        value: "5",  label: "Products Shipped" },
    { icon: CheckCircle2, value: "1",  label: "Certification" },
  ];

  const projects = [
    {
      title: "Win Draw Lose",
      description: "Sports prediction platform focused on football analytics, user statistics, and match prediction tracking. Currently in active development.",
      image: winDrawLoseImage,
      technologies: ["Flutter", "Dart", "Firebase", "QA Testing", "Appium"],
    },
    {
      title: "AFTECH (LKY7BET)",
      description: "High-traffic gaming platform with sports betting, casino games, and live gaming. Led QA testing and product management for successful launches.",
      image: aftechImage,
      technologies: ["QA Testing", "Product Management", "Jira", "API Testing"],
    },
    {
      title: "Lup Investment (YipeeBet)",
      description: "Investment and gaming platform with aviator games and betting features. Comprehensive manual and API testing ensuring platform reliability.",
      image: lupImage,
      technologies: ["Manual Testing", "API Testing", "Postman", "Jira"],
    },
    {
      title: "Wabi Ride",
      description: "Full ride-hailing app with real-time GPS tracking, payment integration, and admin dashboard. Built with Flutter, fully QA tested on Android and iOS.",
      image: wabiRideImage,
      technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "QA Testing"],
      githubUrl: "https://github.com/ejezievictor/in-ride",
    },
    {
      title: "Be Good App",
      description: "Wellness and productivity app helping users build better habits through intuitive design, goal tracking, and motivational features.",
      image: beGoodImage,
      technologies: ["Flutter", "Dart", "Firebase"],
    },
  ];

  const testimonials = [
    {
      quote: "Victor's QA coverage was thorough and methodical. His automation framework consistently caught regressions that would have gone straight to production.",
      name: "Team Lead",
      role: "AFTECH",
      stars: 5,
    },
    {
      quote: "Working with Victor as both Flutter developer and QA lead meant we shipped a stable, polished product on time. He genuinely understands the full product lifecycle.",
      name: "Co-founder",
      role: "Wabi Ride",
      stars: 5,
    },
    {
      quote: "Victor bridges development and quality assurance perfectly. He doesn't just file bug reports — he understands root causes and works directly with engineers to fix them.",
      name: "Product Manager",
      role: "Win Draw Lose",
      stars: 5,
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
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navigation />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-grid">
        {/* Particle canvas */}
        <Particles />
        <FloatingIcons />

        {/* Animated orbs */}
        <div className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(191 100% 50% / 0.08), transparent 70%)", filter: "blur(40px)" }} />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(270 100% 65% / 0.08), transparent 70%)", filter: "blur(40px)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text content */}
            <div className="text-center lg:text-left">
              <ScrollAnimation>
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-inter">
                  👋 Available for QA Engineer roles
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h1 className="font-poppins font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                  <span className="text-foreground">Hi, I'm </span>
                  <br />
                  <span className="shimmer-text">Victor Ejezie</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <div className="text-xl sm:text-2xl text-muted-foreground mb-6 font-inter flex items-center justify-center lg:justify-start">
                  <TypingText
                    text="Building Apps. Breaking Bugs. Driving Quality."
                    speed={50}
                    className="font-medium"
                  />
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={500}>
                <p className="text-base text-muted-foreground mb-10 font-inter leading-relaxed">
                  QA Engineer specializing in manual & automation testing, API testing,
                  and mobile development with Flutter. 3 years shipping reliable software
                  across gaming, sports prediction, and ride-hailing products.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={700}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <Button
                    size="lg"
                    onClick={scrollToProjects}
                    className="relative overflow-hidden bg-primary text-background px-8 py-3 text-base font-medium group w-full sm:w-auto"
                  >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                  <Button size="lg" variant="outline"
                    className="border-primary/40 hover:border-primary text-foreground hover:text-primary px-8 py-3 text-base font-medium hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
                    asChild
                  >
                    <a href="/Victor_Ejezie_CV.pdf" download="Victor_Ejezie_CV.pdf">
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>

              {/* Stats row */}
              <ScrollAnimation delay={900}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stats.map((stat, i) => (
                    <div key={i} className="stat-card">
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-poppins font-bold shimmer-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground font-inter mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* Right: terminal window */}
            <ScrollAnimation delay={400}>
              <div className="hidden lg:block">
                <TerminalWindow />
              </div>
            </ScrollAnimation>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 section-title gradient-text">About Me</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto mt-6">
                Get to know the engineer behind the quality
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                <img
                  src={victorProfileImage}
                  alt="Victor Ejezie"
                  className="relative w-80 h-80 object-cover rounded-2xl mx-auto shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="space-y-6">
                {[
                  { icon: MapPin,    text: "Lagos, Nigeria" },
                  { icon: Calendar,  text: "3 Years Experience" },
                  { icon: Trophy,    text: "QA Engineer | Flutter Developer | Product Manager" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-inter group-hover:text-foreground transition-colors duration-300">{text}</span>
                  </div>
                ))}

                <div className="space-y-4 pt-2">
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

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="font-poppins font-bold text-5xl mb-4 section-title gradient-text">Skills & Expertise</h2>
              <p className="text-muted-foreground text-xl font-inter max-w-3xl mx-auto leading-relaxed mt-8">
                Technologies and tools I use to build and test exceptional digital products
              </p>
            </div>
          </ScrollAnimation>
          <TechSkills />
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <section id="projects" className="py-24 bg-card/20 relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 section-title gradient-text">Featured Projects</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto mt-6">
                Products I've built, tested, and shipped
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────── */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(191 100% 50% / 0.04), transparent 70%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 section-title gradient-text">Experience</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto mt-6">
                My professional journey and key achievements
              </p>
            </div>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline experiences={experiences} />
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────────── */}
      <section id="certifications" className="py-24 bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 section-title gradient-text">Certifications</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto mt-6">
                Continuous learning and professional development
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-2xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-60 blur transition-opacity duration-500" />
                    <Card className="relative bg-card/50 backdrop-blur-sm border-border/50 group-hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300 neon-dot">
                            <Award className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-poppins font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {cert.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm">
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
                  </div>
                </a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 section-title gradient-text">What People Say</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto mt-6">
                Feedback from colleagues and collaborators
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-40 blur transition-opacity duration-500" />
                  <Card className="relative bg-card/50 backdrop-blur-sm border-border/50 h-full group-hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.stars }).map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Quote icon */}
                      <Quote className="w-8 h-8 text-primary/20 mb-3 shrink-0" />

                      {/* Quote text */}
                      <p className="text-muted-foreground font-inter leading-relaxed text-sm flex-1 italic">
                        "{t.quote}"
                      </p>

                      {/* Attribution */}
                      <div className="mt-6 pt-4 border-t border-border/40">
                        <div className="font-poppins font-semibold text-foreground text-sm">{t.name}</div>
                        <div className="text-primary text-xs font-inter mt-0.5">{t.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(270 100% 65% / 0.05), transparent 70%)", filter: "blur(60px)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl mb-4 section-title gradient-text">Let's Work Together</h2>
              <p className="text-muted-foreground text-lg font-inter max-w-2xl mx-auto mt-6">
                Have a project in mind? Let's discuss how we can bring your ideas to life
              </p>
            </div>
          </ScrollAnimation>
          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="py-12 border-t border-border/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-poppins font-bold text-xl shimmer-text mb-2">Victor Ejezie</div>
          <p className="text-muted-foreground font-inter text-sm">
            © 2026 Victor Ejezie · Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
