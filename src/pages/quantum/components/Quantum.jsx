import React from "react";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import useWidth from "@/hooks/useWidth";

const Quantum = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  const benefits = [
    {
      title: "Superhuman Speed & Precision",
      description:
        "Quantum AI processes vast amounts of market data in real-time, executing trades at lightning speed—far beyond human capability. This ensures you never miss an opportunity, even in the most volatile markets.",
      icon: "mdi:flash",
    },
    {
      title: "AI-Powered Smart Trading Decision",
      description:
        "Unlike traditional bots that follow preset rules, Quantum AI learns, adapts, and evolves with every market movement. It detects hidden patterns, adjusts strategies dynamically, and makes intelligent, data-driven decisions for optimal trade execution.",
      icon: "mdi:brain",
    },
    {
      title: "Eliminate Emotional Trading",
      description:
        "Fear and greed are a trader’s worst enemies. Quantum AI trades with pure logic and precision, removing emotional bias and ensuring disciplined execution based on hard data, not human impulses.",
      icon: "mdi:emoticon-neutral-outline",
    },
    {
      title: "Predictive Market Intelligence",
      description:
        "Quantum AI doesn’t just react to price movements—it predicts them. By analyzing historical trends, global financial news, and real-time economic indicators, it forecasts market shifts before they happen, giving you a crucial edge.",
      icon: "mdi:chart-line",
    },
    {
      title: "Trade Anytime, Anywhere",
      description:
        "With Quantum AI, you’re always connected to the market. Access and monitor your AI from any device, anywhere in the world. Whether you’re at home, in the office, or on the go, your trading AI works 24/7 to capture opportunities.",
      icon: "mdi:robot",
    },
  ];

  return (
    <section className="container mx-auto p-8 lg:p-16">
      <h2 className="text-[2rem] font-bold text-secondary text-center mb-8">How Quantum AI Works</h2>
      <p className="text-center text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
        In a world where markets move in the blink of an eye, keeping up can feel impossible. That’s where{" "}
        <span className="font-bold">Quantum AI</span> comes in. This game-changing AI does the heavy lifting for you—{" "}
        <span className="font-bold">
          analyzing trends, predicting moves, and executing trades with unmatched speed and precision.
        </span>{" "}
        It thinks faster, reacts smarter, and helps you trade more efficiently than ever before.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {benefits.map((benefit, index) => (
          <AnimatedContent
            key={index}
            distance={100}
            direction={isMobile ? "horizontal" : "vertical"}
            reverse={isMobile}
            config={{ tension: 50, friction: 25 }}
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
          >
            <SpotlightCard borderColor="#93939377" className="w-full sm:w-[325px]">
              <div className="relative flex flex-col space-y-4">
                <Icon icon={benefit.icon} width={48} className="text-[#0bf40a]" />
                <GradientText
                  colors={["#0bf40a", "#0ae0f4"]}
                  animationSpeed={3}
                  showBorder
                  className="px-4 py-2 !mx-0 text-sm"
                >
                  {benefit.title}
                </GradientText>
                <p className="text-sm text-gray-300 text-justify">{benefit.description}</p>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Quantum;
