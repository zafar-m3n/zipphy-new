import React, { useEffect, useState } from "react";
import JoinUs from "./components/JoinUs";
import { accounts, botAccounts } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import PaymentMethods from "@/components/PaymentMethods";
import ManualTradingAccountCard from "./components/ManualTradingAccountCard";
import BotTradingAccountCard from "./components/BotTradingAccountCard";

const AccountTypes = () => {
  const [expanded, setExpanded] = useState({});
  const [selectedTab, setSelectedTab] = useState("manual");

  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      <ShinyText
        text="Account Types"
        textColor="#0bf40abb"
        shineColor="#0bf40a"
        className="text-2xl md:text-[2rem] font-bold mb-4 md:mb-8 text-center w-full"
      />

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => {
            setSelectedTab("manual");
            setExpanded({}); // reset expanded when switching to manual
          }}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selectedTab === "manual"
              ? "bg-[#0bf40a] text-[#010101]"
              : "bg-transparent border border-[#0bf40a] text-[#0bf40a] hover:bg-[#0bf40a] hover:text-[#010101]"
          }`}
        >
          Manual Trading Accounts
        </button>
        <button
          onClick={() => {
            setSelectedTab("bot");
            setExpanded({}); // reset expanded when switching to bot
          }}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            selectedTab === "bot"
              ? "bg-[#0bf40a] text-[#010101]"
              : "bg-transparent border border-[#0bf40a] text-[#0bf40a] hover:bg-[#0bf40a] hover:text-[#010101]"
          }`}
        >
          Bot Trading Accounts
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 md:mb-8">
        {selectedTab === "manual" &&
          accounts.map((account, index) => (
            <AnimatedContent
              key={`manual-${index}`}
              distance={100}
              direction="horizontal"
              reverse={false}
              config={{ tension: 50, friction: 25 }}
              initialOpacity={0.0}
              animateOpacity
              scale={1.0}
              threshold={0.1}
            >
              <ManualTradingAccountCard
                account={account}
                index={index}
                expanded={expanded}
                toggleExpand={toggleExpand}
              />
            </AnimatedContent>
          ))}

        {selectedTab === "bot" &&
          botAccounts.map((account, index) => (
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

      <PaymentMethods />
      <JoinUs />
    </div>
  );
};

export default AccountTypes;
