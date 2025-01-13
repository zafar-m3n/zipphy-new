import React from "react";
import { stocks } from "@/data/data";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";
import ShinyText from "@/components/animated/ShinyText";

const HowItWorks = () => {
  return (
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
      <section className="container mx-auto p-8 lg:p-16">
        <h2 className="text-xl md:text-3xl xl:text-5xl font-bold text-center">How It Works</h2>
      </section>
    </AnimatedContent>
  );
};

export default HowItWorks;
