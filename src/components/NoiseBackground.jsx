import { useEffect, useState } from "react";
import "./NoiseBackground.css";

export const NoiseBackground = () => {
  const [isLightMode, setIsLightMode] = useState(!document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightMode(!document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return <div className={`noise-background ${isLightMode ? "light" : ""}`} />;
};