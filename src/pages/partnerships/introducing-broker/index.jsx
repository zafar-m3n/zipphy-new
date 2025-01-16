import React, { useEffect } from "react";
import Icon from "@/components/ui/Icon";
import images from "@/assets";
import { features } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import ShinyText from "@/components/animated/ShinyText";
import TextGenerateEffect from "@/components/animated/TextGenerate";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import useWidth from "@/hooks/useWidth";

const Broker = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  useEffect(() => {
    document.title = "Zipphy | Partnerships";
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={isMobile ? true : false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 space-y-4">
            <ShinyText
              text="Introducing Zipphy Broker Program"
              textColor="#0bf40abb"
              shineColor="#0bf40a"
              className="text-2xl md:text-[2rem] font-bold"
            />
            <p className="text-gray-300 md:text-lg text-justify">
              The Zipphy Broker Program offers unmatched opportunities for both individuals and businesses to grow in
              the trading world. With cutting-edge tools and personalized support, we empower our brokers to succeed.
              Join us and gain seamless access to global markets, innovative trading solutions, and unparalleled
              resources for your financial growth.
            </p>
            <button
              onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
              className="flex items-center space-x-1 border border-[#0bf40a33] px-4 py-2 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_15px_#0bf40a] hover:border-[#0bf40a]"
            >
              <p>Register Now</p>
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={images.introducingBroker}
              alt="Introducing Broker Program"
              className="w-full rounded-lg animate-fadeInUp"
            />
          </div>
        </div>
      </AnimatedContent>
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={isMobile ? false : true}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <div className="text-center">
          <TextGenerateEffect
            className="text-center text-2xl md:text-[2rem] font-bold leading-tight tracking-tight text-white"
            words="What Zipphy Offers You"
            animated={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <SpotlightCard borderColor="#93939377" className="relative">
                <div className="relative flex flex-col space-y-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon={feature.icon} width={150} className="text-[#0bf40a] opacity-15" />
                  </div>
                  <GradientText
                    colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="!mx-0 text-xl font-semibold z-10"
                  >
                    {feature.title}
                  </GradientText>
                  <p className="text-sm text-gray-300 text-justify z-10">{feature.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Broker;
