import React, { useEffect } from "react";
import images from "@/assets";
import ShinyText from "@/components/animated/ShinyText";
import GradientText from "@/components/animated/GradientText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import HowItWorks from "../components/HowItWorks";
import WhyZipphy from "../components/WhyZipphy";
import Markets from "../components/Markets";

const Cryptocurrency = () => {
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
              Cryptocurrency
            </GradientText>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Cryptocurrency With Zipphy</h1>
            <ShinyText
              text="Digital Assets, Trade Confidently"
              textColor="#0bf40abb"
              shineColor="#0bf40a"
              className="text-xl md:text-2xl font-bold italic mt-4"
            />
            <p className="text-gray-300 mt-4 text-justify">
              Get into the world’s most revolutionary financial market, access the best cryptocurrency to invest in, and
              start investing in Crypto with Zipphy – a globally trusted and regulated financial service provider.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              Our platform provides seamless access to a diverse range of cryptocurrencies, including established giants
              like Bitcoin and Ethereum, as well as promising altcoins.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src={images.Mcrypto}
              alt="Cryptocurrency Trading"
              className="w-full rounded-lg shadow-lg animate-float"
            />
          </div>
        </div>
      </AnimatedContent>
      <Markets />
      <WhyZipphy />
      <HowItWorks />
    </div>
  );
};

export default Cryptocurrency;
