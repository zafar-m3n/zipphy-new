import React from "react";
import { tradingBots } from "@/data/data";
import TradingBotCard from "./TradingBotCard";
import AnimatedContent from "@/components/animated/AnimatedContent";

const TradingBots = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-8 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Trading Bots</h1>
      {tradingBots.map((bot, index) => (
        <AnimatedContent
          key={index}
          distance={100}
          direction="horizontal"
          reverse={index % 2 !== 0}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <TradingBotCard bot={bot} />
        </AnimatedContent>
      ))}
    </div>
  );
};

export default TradingBots;
