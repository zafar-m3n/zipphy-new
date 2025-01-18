import React from "react";
import MiniChart from "@/components/MiniChart";
import AnimatedContent from "@/components/animated/AnimatedContent";

const MiniChartRow = () => {
  const symbols = ["FX:EURUSD", "CAPITALCOM:GOLD", "BITSTAMP:BTCUSD", "NASDAQ:TSLA"];

  return (
    <div className="container mx-auto p-8 lg:p-16">
      <AnimatedContent
        distance={100}
        direction={"horizontal"}
        reverse={false}
        config={{ tension: 50, friction: 25 }}
        initialOpacity={0.0}
        animateOpacity
        scale={1.0}
        threshold={0.1}
      >
        <h2 className="text-[2rem] font-bold text-secondary text-center mb-6">Live Market Updates</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap lg:flex-nowrap">
          {symbols.map((symbol, index) => (
            <div key={index} className="w-full md:w-1/4 animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <MiniChart symbol={symbol} />
            </div>
          ))}
        </div>
      </AnimatedContent>
    </div>
  );
};

export default MiniChartRow;
