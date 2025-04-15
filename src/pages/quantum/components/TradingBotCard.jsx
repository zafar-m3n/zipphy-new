import React from "react";
import ShinyText from "@/components/animated/ShinyText";
import GradientText from "@/components/animated/GradientText";

const TradingBotCard = ({ bot }) => {
  return (
    <div className="relative flex flex-col p-8 rounded-xl bg-opacity-30 bg-[#f2f2f2] border border-[#0bf40a] shadow-xl backdrop-blur-md mb-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0bf40a] to-[#010101] opacity-20 rounded-xl" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 mb-4">
        <div>
          <ShinyText
            text={bot.name}
            textColor="#0bf40abb"
            shineColor="#0bf40a"
            className="text-2xl md:text-[2rem] font-bold"
          />
          <p className="text-sm text-white">{bot.level}</p>
        </div>
        <div className="text-3xl font-bold text-white">
          <GradientText
            colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
            animationSpeed={3}
            showBorder={true}
            className="px-4 py-2 !mx-0"
          >
            ${bot.price}
          </GradientText>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#f2f2f2] text-sm">
        <div>
          <h3 className="font-semibold mb-1">Supported Markets</h3>
          <p className="mb-4">{bot.supportedMarkets.join(", ")}</p>
          <div className="border-t border-[#0bf40a] my-4" />
          <h3 className="font-semibold mb-1">Duration</h3>
          <p>{bot.duration}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Specifications</h3>
          <ul className="list-disc list-inside space-y-1">
            {bot.specifications.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Risk Management</h3>
          <p className="mb-4">{bot.riskManagement}</p>
          <div className="border-t border-[#0bf40a] my-4" />
          <h3 className="font-semibold mb-1">Profit Optimization</h3>
          <p>{bot.profitOptimization}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Cashback / Bonus</h3>
          <p className="mb-4">{bot.cashbackBonus}</p>
          <div className="border-t border-[#0bf40a] my-4" />
          <h3 className="font-semibold mb-1">ROI</h3>
          <p>{bot.roi}</p>
        </div>
      </div>
    </div>
  );
};

export default TradingBotCard;
