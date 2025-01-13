import React from "react";
import { stats } from "@/data/data";
import GradientText from "@/components/animated/GradientText";
import SpotlightCard from "@/components/animated/SpotlightCard";
import CountUp from "@/components/animated/Countup";

const Stats = () => {
  return (
    <div className="container mx-auto px-6 py-8 md:py-0 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center space-y-8 md:mb-8">
      <GradientText
        colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
        animationSpeed={3}
        showBorder={true}
        className="px-4 py-2"
      >
        The Industry Leading Platform
      </GradientText>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ stat, title, suffix, separator }, index) => (
          <SpotlightCard key={index} spotlightColor="#0bf40aa4" borderColor="#0bf40a44">
            <div className="flex flex-col items-center space-y-2">
              <CountUp
                to={parseFloat(stat)}
                suffix={suffix || ""}
                separator={separator || ""}
                className="text-4xl font-bold text-white"
              />
              <h2 className="text-lg font-medium text-gray-300">{title}</h2>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Stats;
