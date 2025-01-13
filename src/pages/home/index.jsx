import React from "react";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Welcome from "./components/Welcome";
import HowItWorks from "./components/HowItWorks";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Welcome />
      <Stats />
      <HowItWorks />
    </div>
  );
};

export default HomePage;
