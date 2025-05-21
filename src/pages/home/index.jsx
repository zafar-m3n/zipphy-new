import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Welcome from "./components/Welcome";
import HowItWorks from "./components/HowItWorks";
import Markets from "./components/Markets";
import WhyZipphy from "./components/WhyZipphy";
import FAQs from "./components/FAQs";
import JoinUs from "./components/JoinUs";
import MiniChartRow from "./components/MiniChartRow";
import ClientSlider from "./components/ClientsSlider";
import AwardsSection from "./components/AwardsSection";
import ReviewsSection from "./components/ReviewsSection";

const HomePage = () => {
  useEffect(() => {
    document.title = "Zipphy | Home";
  }, []);
  return (
    <div>
      <HeroSection />
      <Welcome />
      <AwardsSection />
      <HowItWorks />
      <MiniChartRow />
      <WhyZipphy />
      <Stats />
      <ClientSlider />
      <Markets />
      <ReviewsSection />
      <FAQs />
      <JoinUs />
    </div>
  );
};

export default HomePage;
