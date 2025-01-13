import React from "react";
import { benefits } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import GradientText from "@/components/animated/GradientText";
import ShinyText from "@/components/animated/ShinyText";

const WhyZipphy = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      config={{ tension: 50, friction: 25 }}
      initialOpacity={0.0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
    >
      <section className="container mx-auto p-8 lg:p-16">
        <h2 className="text-[2rem] font-bold text-secondary text-center mb-6">
          Why Trade with
          <ShinyText text="Zipphy" textColor="#0bf40abb" shineColor="#0bf40a" className="ms-2 text-[2rem] italic" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:max-w-5xl mx-auto">
          <div
            className="md:col-span-3 rounded-3xl border bg-[#010101] overflow-hidden p-8"
            style={{
              borderColor: "#93939377",
              boxShadow: `0 0 20px #93939377`,
            }}
          >
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={false}
              className="!mx-0"
            >
              {benefits[0].title}
            </GradientText>
            <p className="text-gray-300">{benefits[0].description}</p>
          </div>

          <div
            className="rounded-3xl border bg-[#010101] overflow-hidden p-8"
            style={{
              borderColor: "#0bf40a77",
              boxShadow: `0 0 20px #0bf40a77`,
            }}
          >
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={false}
              className="!mx-0"
            >
              {benefits[1].title}
            </GradientText>
            <p className="text-gray-300">{benefits[1].description}</p>
          </div>

          <div
            className="md:col-span-2 rounded-3xl border bg-[#010101] overflow-hidden p-8"
            style={{
              borderColor: "#0bf40a77",
              boxShadow: `0 0 20px #0bf40a77`,
            }}
          >
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={false}
              className="!mx-0"
            >
              {benefits[2].title}
            </GradientText>
            <p className="text-gray-300">{benefits[2].description}</p>
          </div>

          <div
            className="md:col-span-2 rounded-3xl border bg-[#010101] overflow-hidden p-8"
            style={{
              borderColor: "#93939377",
              boxShadow: `0 0 20px #93939377`,
            }}
          >
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={false}
              className="!mx-0"
            >
              {benefits[3].title}
            </GradientText>
            <p className="text-gray-300">{benefits[3].description}</p>
          </div>
          <div
            className="rounded-3xl border bg-[#010101] overflow-hidden p-8"
            style={{
              borderColor: "#93939377",
              boxShadow: `0 0 20px #93939377`,
            }}
          >
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={false}
              className="!mx-0"
            >
              {benefits[4].title}
            </GradientText>
            <p className="text-gray-300">{benefits[4].description}</p>
          </div>
          <div
            className="md:col-span-3 rounded-3xl border bg-[#010101] overflow-hidden p-8"
            style={{
              borderColor: "#0bf40a77",
              boxShadow: `0 0 20px #0bf40a77`,
            }}
          >
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={false}
              className="!mx-0"
            >
              {benefits[5].title}
            </GradientText>
            <p className="text-gray-300">{benefits[5].description}</p>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default WhyZipphy;
