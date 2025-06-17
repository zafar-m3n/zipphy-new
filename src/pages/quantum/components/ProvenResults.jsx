import React from "react";
import CountUp from "react-countup";

const ProvenResults = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Smart Trading is Safe Trading</h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Successful trading isn’t just about making profits—it’s about protecting your capital. Quantum AI integrates
            sophisticated risk management features, including:
          </p>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#0bf40a] text-lg">➤</span>
              <span>
                <strong>Automated Stop-Loss & Take-Profit</strong> – Lock in gains and minimize losses.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0bf40a] text-lg">➤</span>
              <span>
                <strong>Diversification Strategies</strong> – Spread risk across multiple assets for stability.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0bf40a] text-lg">➤</span>
              <span>
                <strong>Real-Time Risk Adjustments</strong> – Adapt strategies instantly as market conditions change.
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3 space-y-12 text-center md:text-left">
          <div>
            <h3 className="text-8xl font-extrabold text-white">
              <CountUp end={98} duration={2} suffix="%" />
            </h3>
            <p className="text-gray-400 mt-2">Trade Accuracy</p>
          </div>
          <div>
            <h3 className="text-8xl font-extrabold text-white">
              <CountUp end={6721} duration={2.5} separator="," suffix="+" />
            </h3>
            <p className="text-gray-400 mt-2">Zipphy AI Traders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
