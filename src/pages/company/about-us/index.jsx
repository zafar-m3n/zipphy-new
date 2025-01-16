import React, { useEffect } from "react";
import Icon from "@/components/ui/Icon";
import { steps, companyInfo } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import ShinyText from "@/components/animated/ShinyText";
import useWidth from "@/hooks/useWidth";

const AboutUsPage = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  useEffect(() => {
    document.title = "Zipphy | Company";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {companyInfo.map((section, index) => (
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={index % 2 === 0 ? true : false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <section key={index} className={`relative text-secondary lg:px-8`}>
            <div className="flex flex-col lg:flex-row items-center">
              <div className={`lg:w-1/2 space-y-6 ${index % 2 === 0 ? "lg:order-1 order-1" : "lg:order-2 order-1"}`}>
                <ShinyText
                  text={section.title}
                  textColor="#0bf40abb"
                  shineColor="#0bf40a"
                  className="text-2xl md:text-[2rem] font-bold"
                />
                <p className="text-sm md:text-lg text-justify">{section.text}</p>
              </div>
              <div
                className={`lg:w-1/2 flex justify-center ${
                  index % 2 === 0 ? "lg:justify-end lg:order-2 order-2" : "lg:justify-start lg:order-1 order-1"
                } relative mt-10 lg:mt-0`}
              >
                <img src={section.image} alt={section.title} className="rounded-lg animate-fadeInUp w-full max-w-md" />
              </div>
            </div>
          </section>
        </AnimatedContent>
      ))}

      <section className="container mx-auto p-0 lg:p-8">
        <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">How To Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedContent
              key={index}
              distance={100}
              direction={isMobile ? "horizontal" : "vertical"}
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <SpotlightCard borderColor="#93939377" className="relative">
                <div className="relative flex flex-col space-y-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon={step.icon} width={200} className="text-[#0bf40a] opacity-15" />
                  </div>
                  <GradientText
                    colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="px-4 py-2 !mx-0"
                  >
                    Step {index + 1}
                  </GradientText>
                  <h3 className="text-xl font-semibold z-10">{step.title}</h3>
                  <p className="text-sm text-gray-300 text-justify z-10">{step.description}</p>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
