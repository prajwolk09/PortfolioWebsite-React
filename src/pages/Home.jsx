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
      {/* Main Content */}
      {/* Footer */}
    </div>
  );
};