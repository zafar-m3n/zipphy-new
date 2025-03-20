import React, { useEffect, useState } from "react";
import JoinUs from "./components/JoinUs";
import { accounts } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";
import PaymentMethods from "@/components/PaymentMethods";

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
        text="Account Types"
        textColor="#0bf40abb"
        shineColor="#0bf40a"
        className="text-2xl md:text-[2rem] font-bold mb-4 md:mb-8 text-center w-full"
      />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4 md:mb-8">
        {accounts.map((account, index) => (
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
            <div
              key={index}
              className="relative flex flex-col p-8 rounded-xl bg-opacity-30 bg-[#f2f2f2] border border-[#0bf40a] shadow-xl backdrop-blur-md"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0bf40a] to-[#010101] opacity-20 rounded-xl"></div>
              <div className="pb-4 mb-4 border-b border-[#0bf40a]">
                <h2 className="text-2xl font-semibold text-[#0bf40a] text-center">{account.name}</h2>
                <p className="text-3xl font-bold text-center">{account.price}</p>
              </div>
              <ul
                className={`mb-4 text-[#f2f2f2] space-y-2 transition-all duration-300 ease-in-out ${
                  expanded[index] ? "max-h-[1000px]" : "max-h-[120px] overflow-hidden"
                }`}
              >
                {account.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-[#0bf40a]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm md:text-base">{feature}</p>
                  </li>
                ))}
              </ul>
              {account.features.length > 5 && (
                <button onClick={() => toggleExpand(index)} className="text-[#0bf40a] underline text-sm font-medium">
                  {expanded[index] ? "Show Less" : "Learn More"}
                </button>
              )}
              <div className="mt-auto">
                <button
                  onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
                  className="mt-6 w-full py-3 px-6 bg-[#0bf40a] text-[#010101] font-bold rounded-full hover:bg-[#010101] hover:text-[#0bf40a] transition"
                >
                  {account.cta}
                </button>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
      <PaymentMethods />
      <JoinUs />
    </div>
  );
};

export default AccountTypes;
