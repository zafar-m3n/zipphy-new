import React, { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import TextGenerateEffect from "@/components/animated/TextGenerate";
import GradientText from "@/components/animated/GradientText";

const Stats = () => {
  return (
    <div className="container mx-auto px-6 py-8 md:py-0 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center space-y-8">
      <GradientText
        colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
        animationSpeed={3}
        showBorder={true}
        className="p-2"
      >
        <Icon icon="system-uicons:diamond" width={24} className="text-white" />
        The Industry Leading Platform
      </GradientText>
    </div>
  );
};

export default Stats;
