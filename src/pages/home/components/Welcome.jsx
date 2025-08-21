import React from "react";
import { stocks } from "@/data/data";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";
import ShinyText from "@/components/animated/ShinyText";

const Welcome = () => {
  const maxValue = Math.max(...stocks.map((stock) => stock.value));

  const getGlassBackgroundColor = (name) => {
    switch (name) {
      case "MCD":
        return "rgba(255, 223, 116, 0.5)";
      case "IBM":
        return "rgba(178, 102, 255, 0.5)";
      case "TSLA":
        return "rgba(255, 102, 102, 0.5)";
      case "META":
        return "rgba(102, 178, 255, 0.5)";
      case "MSFT":
        return "rgba(102, 255, 178, 0.5)";
      case "AMZN":
        return "rgba(255, 255, 255, 0.5)";
        case "XAUUSD": // Gold
        return "rgba(255, 223, 0, 0.5)";
        case "WTI": // Oil
        return "rgba(255, 255, 255, 0.5)";
      case "BTC": // Bitcoin
        return "rgba(255, 159, 64, 0.5)";
      default:
        return "rgba(255, 255, 255, 0.5)";
    }
  };

  const getGlassBorderColor = (name) => {
    // Border color should match the background color
    return getGlassBackgroundColor(name);
  };

  return (
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
      <section className="container mx-auto flex flex-col lg:flex-row lg:space-x-6 items-center justify-between p-8 lg:p-16 animate-appear-left animation-range-entryCover animation-timeline-view">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-[2rem] font-bold text-secondary">
            Trading Dreams Powered by
            <ShinyText text="Zipphy" textColor="#0bf40abb" shineColor="#0bf40a" className="ms-2 text-[2rem] italic" />
          </h2>
          <p className="text-sm md:text-base text-justify">
            Venture into a realm of endless financial potential with Zipphy. Crafted for both newcomers and seasoned
            traders, our platform offers an unmatched trading journey. Dive into a variety of markets, from stocks to
            crypto, with cutting-edge tools and live analytics designed to guide you toward success.
          </p>
          <p className="text-sm md:text-base text-justify">
            At Zipphy, we don’t just connect traders—we empower them to conquer the globe.
          </p>
          <button
            onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
            className="flex items-center space-x-2 border border-[#0bf40a33] px-6 py-3 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_20px_#0bf40a] hover:border-[#0bf40a]"
          >
            <p className="text-lg font-medium">Get Started</p>
            <Icon icon="heroicons:arrow-top-right-on-square" width={20} />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {stocks.map((stock, index) => {
              const size = `${(stock.value / maxValue) * 150 + 50}px`;
              return (
                <div
                  className={`p-4 absolute animate-float flex flex-col justify-between ${stock.position} rounded-lg shadow-lg backdrop-blur-md border`}
                  key={stock.id}
                  style={{
                    width: size,
                    height: size,
                    animationDelay: `${index * 0.3}s`,
                    backgroundColor: getGlassBackgroundColor(stock.name),
                    borderColor: getGlassBorderColor(stock.name),
                  }}
                >
                  <img src={stock.logo} alt={stock.name} className="h-12 w-12 rounded-full object-contain" />
                  <p className={`uppercase font-bold ${stock.text}`}>{stock.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Welcome;
