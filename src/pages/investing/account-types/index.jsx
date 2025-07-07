import React, { useEffect, useState } from "react";
import JoinUs from "./components/JoinUs";
import { accounts } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import PaymentMethods from "@/components/PaymentMethods";
import ManualTradingAccountCard from "./components/ManualTradingAccountCard";

const AccountTypes = () => {
  const [expanded, setExpanded] = useState({});

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
        text="Manual Trading Account Types"
        textColor="#0bf40abb"
        shineColor="#0bf40a"
        className="text-2xl md:text-[2rem] font-bold mb-4 md:mb-8 text-center w-full"
      />

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 md:mb-8">
        {accounts.map((account, index) => (
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
            <ManualTradingAccountCard account={account} index={index} expanded={expanded} toggleExpand={toggleExpand} />
          </AnimatedContent>
        ))}
      </div>

      <PaymentMethods />
      <JoinUs />
    </div>
  );
};

export default AccountTypes;
