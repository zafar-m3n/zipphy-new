import React from "react";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Welcome from "./components/Welcome";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Welcome />
      <Stats />
    </div>
  );
};

export default HomePage;
