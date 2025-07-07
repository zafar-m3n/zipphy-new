import React, { useEffect, useState } from "react";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import quantumImage from "@/assets/zipphy-ai.png";
import Quantum from "./components/Quantum";
import ProvenResults from "./components/ProvenResults";
import QuantumPartner from "./components/QuantumPartner";
import TradingBots from "./components/TradingBots";
import { botAccounts } from "@/data/data";
import BotTradingAccountCard from "./components/BotTradingAccountCard";

const QuantumAI = () => {
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    document.title = "Zipphy | Quantum AI";
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="container mx-auto ps-4 py-8 space-y-12">
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
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 md:ps-4">
          <div className="md:w-1/2">
            <ShinyText
              text="Trading Beyond Human Limits"
              textColor="#0bf40abb"
              shineColor="#0bf40a"
              className="text-2xl md:text-[2rem] font-bold mb-8"
            />
            <p className="text-sm md:text-base text-justify mb-8 !leading-8">
              In the fast-paced world of financial markets, every second counts.{" "}
              <span className="font-bold">Quantum AI</span> is a cutting-edge artificial intelligence designed to
              analyze, predict, and execute trades with superhuman precision—giving you the competitive edge you need to
              stay ahead.
            </p>
            <p className="text-sm md:text-base text-justify mb-8 !leading-8">
              Unlike conventional trading systems, Quantum AI doesn’t just react to market movements—it anticipates
              them. By leveraging deep learning, real-time data processing, and predictive analytics, Quantum AI
              deciphers complex market behaviors before they unfold. Whether you're a seasoned trader or just starting
              out, this intelligent system empowers you with data-driven confidence, lightning-fast execution, and
              <span className="font-bold"> unparalleled accuracy</span>—ensuring that every trade is backed by the power
              of innovation.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-end">
            <img src={quantumImage} alt="Quantum AI Illustration" className="w-full rounded-lg" />
          </div>
        </div>
      </AnimatedContent>
      <Quantum />
      <TradingBots />{" "}
      <div>
        <ShinyText
          text="Bot Trading Accounts"
          textColor="#0bf40abb"
          shineColor="#0bf40a"
          className="text-2xl md:text-[2rem] font-bold mb-4 md:mb-8 text-center w-full"
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 md:mb-8">
          {botAccounts.map((account, index) => (
            <AnimatedContent
              key={`bot-${index}`}
              distance={100}
              direction="horizontal"
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <BotTradingAccountCard account={account} index={index} expanded={expanded} toggleExpand={toggleExpand} />
            </AnimatedContent>
          ))}
        </div>
      </div>
      <ProvenResults />
      <QuantumPartner />
    </div>
  );
};

export default QuantumAI;
