import React from "react";
import Icon from "@/components/ui/Icon";
import { steps } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import useWidth from "@/hooks/useWidth";

const HowItWorks = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  return (
    <section className="container mx-auto p-8 lg:p-16">
      <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <AnimatedContent
            key={index}
            distance={100}
            direction={isMobile ? "horizontal" : "vertical"}
            reverse={isMobile ? true : false}
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
  );
};

export default HowItWorks;
