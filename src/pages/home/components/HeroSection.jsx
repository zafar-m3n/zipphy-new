import React, { useEffect, useState } from "react";
import { heroContent } from "@/data/data";
import Icon from "@/components/ui/Icon";
import TextGenerateEffect from "@/components/animated/TextGenerate";

const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center space-y-6 md:h-[calc(100vh-100px)]">
      <h2 className="uppercase tracking-widest text-xs text-center text-green-100 flex items-center space-x-2 max-w-lg">
        <span className="flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-1 shadow-md">
          <Icon icon="game-icons:abstract-119" size={16} className="text-[#0bf40a]" />
          <p className="text-white font-medium">Profits</p>
        </span>
        <span>just a click away</span>
      </h2>
      <TextGenerateEffect
        key={currentTitleIndex}
        className="text-center text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold leading-tight tracking-tight text-white"
        words={heroContent[currentTitleIndex].title}
        animated={true}
      />

      <TextGenerateEffect
        key={`desc-${currentTitleIndex}`}
        className="text-center text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl"
        words={heroContent[currentTitleIndex].description}
        multiColored={false}
      />

      <button
        onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
        className="flex items-center space-x-2 border border-[#0bf40a33] px-6 py-3 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_20px_#0bf40a] hover:border-[#0bf40a]"
      >
        <p className="text-lg font-medium">Get Started</p>
        <Icon icon="heroicons:arrow-top-right-on-square" width={20} />
      </button>
    </div>
  );
};

export default HeroSection;
