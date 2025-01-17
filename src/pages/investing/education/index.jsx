import React, { useState, useEffect } from "react";
import { promotionsData } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";

const Education = () => {
  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <ShinyText
          text="Educational Resources"
          textColor="#0bf40abb"
          shineColor="#0bf40a"
          className="text-2xl md:text-[2rem] font-bold mb-4 text-center w-full"
        />
      </AnimatedContent>
    </div>
  );
};

export default Education;
