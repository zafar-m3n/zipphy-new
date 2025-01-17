import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Welcome from "./components/Welcome";
import HowItWorks from "./components/HowItWorks";
import Markets from "./components/Markets";
import WhyZipphy from "./components/WhyZipphy";
import FAQs from "./components/FAQs";
import JoinUs from "./components/JoinUs";

const HomePage = () => {
  useEffect(() => {
    document.title = "Zipphy | Home";
  }, []);
  return (
    <div>
      <HeroSection />
      <Welcome />
      <HowItWorks />
      <WhyZipphy />
      <Stats />
      <Markets />
      <FAQs />
      <JoinUs />
    </div>
  );
};

export default HomePage;
