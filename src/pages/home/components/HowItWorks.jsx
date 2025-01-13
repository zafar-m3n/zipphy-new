import React from "react";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import useWidth from "@/hooks/useWidth";

const steps = [
  {
    title: "Open a Zipphy Account",
    description:
      "Begin your journey by signing up for a Zipphy account. Provide your name, email address, and phone number, and complete the verification process to access our cutting-edge online trading platform.",
    icon: "solar:user-id-linear",
  },
  {
    title: "Fund your account",
    description:
      "Easily and securely deposit funds into your account using a variety of payment options, including credit cards, bank transfers, eWallets, and more. All transactions are protected with top-tier security protocols.",
    icon: "tabler:credit-card",
  },
  {
    title: "Start Trading Today!",
    description:
      "Once your KYC form is approved, you’re all set to start trading. Gain access to over 15,000 financial products, including stocks, commodities, forex, and indices, with advanced trading tools at your fingertips.",
    icon: "flowbite:chart-outline",
  },
];

const HowItWorks = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  return (
    <section className="container mx-auto p-8 lg:p-16">
      <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <AnimatedContent
            key={index}
            distance={100}
            direction={isMobile ? "horizontal" : "vertical"}
            reverse={isMobile ? true : false}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
            <SpotlightCard spotlightColor="#0bf40a77" borderColor="#93939377" className="relative">
              <div className="relative flex flex-col space-y-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon icon={step.icon} width={200} className="text-[#0bf40a] opacity-15" />
                </div>
                <GradientText
                  colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                  animationSpeed={3}
                  showBorder={true}
                  className="px-4 py-2 mx-0 z-10"
                >
                  Step {index + 1}
                </GradientText>
                <h3 className="text-xl font-semibold z-10">{step.title}</h3>
                <p className="text-sm text-gray-300 text-justify z-10">{step.description}</p>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
