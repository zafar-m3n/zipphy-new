import React, { useEffect } from "react";
import images from "@/assets";
import ShinyText from "@/components/animated/ShinyText";
import GradientText from "@/components/animated/GradientText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import HowItWorks from "../components/HowItWorks";
import WhyZipphy from "../components/WhyZipphy";
import Markets from "../components/Markets";

const Forex = () => {
  useEffect(() => {
    document.title = "Zipphy | Markets";
  }, []);

  return (
    <div>
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={true}
              className="px-4 py-2 !mx-0"
            >
              Forex
            </GradientText>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Forex With Zipphy</h1>
            <ShinyText
              text="Explore Global Markets, Trade Forex."
              textColor="#0bf40abb"
              shineColor="#0bf40a"
              className="text-xl md:text-2xl font-bold italic mt-4"
            />
            <p className="text-gray-300 mt-4 text-justify">
              Get ready with your hat and sunscreen as we embark on a global journey through the realm of forex! Select
              from over 50 currency pairs, encompassing majors, minors, and exotic options.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              Forex is a world of its own, full of techniques and terminologies unique to the market. It’s also the most
              liquid, meaning there is lots of buying and selling activity happening much of the time. Because it’s so
              liquid, you can buy and sell easily and instantaneously!
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img src={images.Mforex} alt="Forex Trading" className="w-full rounded-lg shadow-lg animate-float" />
          </div>
        </div>
      </AnimatedContent>
      <Markets />
      <WhyZipphy />
      <HowItWorks />
    </div>
  );
};

export default Forex;
