import React from "react";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Welcome from "./components/Welcome";
import HowItWorks from "./components/HowItWorks";
import Markets from "./components/Markets";
import WhyZipphy from "./components/WhyZipphy";
import FAQs from "./components/FAQs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Welcome />
      <HowItWorks />
      <WhyZipphy />
      <Stats />
      <Markets />
      <FAQs />
    </div>
  );
};

export default HomePage;
