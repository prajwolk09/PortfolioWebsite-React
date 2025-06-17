import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { NoiseBackground } from "../components/NoiseBackground";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effect */}
      <NoiseBackground />

      {/* Navbar */}
      {<Navbar />}

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>

      {/* Footer */}
      <FooterSection/>
    </div>
  );
};