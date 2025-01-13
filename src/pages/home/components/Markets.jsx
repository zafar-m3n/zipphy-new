import React from "react";
import AnimatedContent from "@/components/animated/AnimatedContent";
import TiltedScroll from "@/components/animated/TiltedScroll";
import { useNavigate } from "react-router-dom";

const Markets = () => {
  const navigate = useNavigate();

  const items = [
    { id: "1", text: "Stocks", icon: "heroicons:x-mark", onClick: () => navigate("/markets/stocks") },
    { id: "2", text: "Forex", icon: "heroicons:check", onClick: () => navigate("/markets/forex") },
    { id: "3", text: "Commodities", icon: "heroicons:check", onClick: () => navigate("/markets/commodities") },
    { id: "4", text: "Crypto", icon: "heroicons:check", onClick: () => navigate("/markets/crypto") },
    { id: "5", text: "Indices", icon: "heroicons:check", onClick: () => navigate("/markets/indices") },
    { id: "6", text: "Stocks", icon: "heroicons:x-mark", onClick: () => navigate("/markets/stocks") },
    { id: "7", text: "Forex", icon: "heroicons:check", onClick: () => navigate("/markets/forex") },
    { id: "8", text: "Commodities", icon: "heroicons:check", onClick: () => navigate("/markets/commodities") },
    { id: "9", text: "Crypto", icon: "heroicons:check", onClick: () => navigate("/markets/crypto") },
    { id: "10", text: "Indices", icon: "heroicons:check", onClick: () => navigate("/markets/indices") },
  ];

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
      <section className="container mx-auto p-8 lg:p-16">
        <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">Explore the Markets</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 space-y-6">
            <p className="text-sm md:text-base text-justify">
              Discover the exciting opportunities across global financial markets. From stocks to cryptocurrencies, our
              platform provides access to a diverse range of trading options.
            </p>
            <p className="text-sm md:text-base text-justify">
              Stay ahead with real-time analytics, expert insights, and advanced trading tools that cater to both
              beginners and seasoned traders alike.
            </p>
            <p className="text-sm md:text-base text-justify">
              Whatever your trading goals are, explore and conquer with confidence. Dive into each market and uncover
              the potential that suits your trading style.
            </p>
          </div>
          <div className="flex-1">
            <TiltedScroll items={items} />
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Markets;
