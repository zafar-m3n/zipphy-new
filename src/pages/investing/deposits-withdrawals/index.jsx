import React, { useEffect } from "react";
import images from "@/assets";
import GradientText from "@/components/animated/GradientText";
import ShinyText from "@/components/animated/ShinyText";

const Deposits = () => {
  const accountData = [
    {
      type: "Classic",
      minimumDeposit: "$100",
      minimumWithdrawal: "$25",
      timeFrame: "1-3 Business Days",
    },
    {
      type: "Funded",
      minimumDeposit: "$1000",
      minimumWithdrawal: "$500",
      timeFrame: "1-2 Business Days",
    },
    {
      type: "Trader",
      minimumDeposit: "$5000",
      minimumWithdrawal: "$1000",
      timeFrame: "Within 24 Hours",
    },
    {
      type: "Expert",
      minimumDeposit: "$10,000",
      minimumWithdrawal: "$2000",
      timeFrame: "Within 24 Hours",
    },
    {
      type: "Exclusive",
      minimumDeposit: "$25,000",
      minimumWithdrawal: "$5000",
      timeFrame: "Within 12 Hours",
    },
    {
      type: "Premium",
      minimumDeposit: "$50,000",
      minimumWithdrawal: "$10,000",
      timeFrame: "Instant",
    },
  ];

  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <img
                src={images.seamless1}
                alt="Trader 1"
                className="w-40 lg:w-52 rounded-lg shadow-lg absolute top-[10%] left-[10%] animate-float"
                style={{ animationDelay: "0s" }}
              />
              <img
                src={images.seamless3}
                alt="Trader 3"
                className="w-44 lg:w-56 rounded-lg shadow-lg top-20 left-40 lg:bottom-[25%] lg:left-[25%] absolute animate-float"
                style={{ animationDelay: "1s" }}
              />
              <img
                src={images.seamless2}
                alt="Trader 2"
                className="w-52 lg:w-64 rounded-lg shadow-lg absolute bottom-20 right-40 lg:top-[20%] lg:right-[20%] transform -translate-x-1/2 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <img
                src={images.seamless4}
                alt="Trader 4"
                className="w-48 lg:w-60 rounded-lg shadow-lg absolute bottom-[10%] left-[45%] lg:left-[60%] animate-float"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <GradientText
              colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
              animationSpeed={3}
              showBorder={true}
              className="px-4 py-2 !mx-0"
            >
              Efficiency
            </GradientText>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Seamless Financial Transactions</h1>
            <p className="text-gray-300 mt-4 text-justify">
              At Zipphy, we understand the importance of smooth and secure financial transactions in the world of
              trading. Our platform offers a user-friendly interface for hassle-free deposits and withdrawals. Easily
              fund your account to start trading or withdraw your profits with confidence.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              We provide a variety of secure payment methods, ensuring that your financial transactions are conducted
              seamlessly. Enjoy a smooth experience for both deposits and withdrawals, allowing you to focus on your
              trading strategies with peace of mind.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <ShinyText
            text="Deposit & Withdrawal Details"
            textColor="#0bf40abb"
            shineColor="#0bf40a"
            className="ms-2 text-[2rem] italic mb-4"
          />
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200 bg-white/20 backdrop-blur-md rounded-lg shadow-lg">
              <thead>
                <tr className="bg-[#010101]/80 text-[#0bf40a]">
                  <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Minimum Deposit</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Minimum Withdrawal</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Dep - With - Time Frame</th>
                </tr>
              </thead>
              <tbody>
                {accountData.map((account, index) => (
                  <tr
                    key={index}
                    className={`bg-[#010101]/60 text-[#ffffff] ${index % 2 === 0 ? "bg-opacity-50" : "bg-opacity-70"}`}
                  >
                    <td className="border border-gray-200 px-4 py-2">{account.type}</td>
                    <td className="border border-gray-200 px-4 py-2">{account.minimumDeposit}</td>
                    <td className="border border-gray-200 px-4 py-2">{account.minimumWithdrawal}</td>
                    <td className="border border-gray-200 px-4 py-2">{account.timeFrame}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
    </>
  );
};

export default Deposits;
