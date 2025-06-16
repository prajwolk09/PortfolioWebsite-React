import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { NoiseBackground } from "../components/NoiseBackground";
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
      </main>

      {/* Footer */}
    </div>
  );
};