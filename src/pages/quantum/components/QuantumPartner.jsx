import React, { useEffect } from "react";
import AnimatedContent from "@/components/animated/AnimatedContent";
import ShinyText from "@/components/animated/ShinyText";
import aiImage2 from "@/assets/zipphy-ai-2.png";
import useWidth from "@/hooks/useWidth";

const QuantumPartner = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  useEffect(() => {
    document.title = "Zipphy | Quantum AI Partnership";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
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
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Image - 25% width on desktop */}
          <div className="md:order-1 order-2 w-full md:w-1/4">
            <img
              src={aiImage2}
              alt="Quantum AI Partnership"
              className="w-full max-h-[350px] object-contain rounded-lg animate-fadeInUp"
            />
          </div>

          {/* Text - 75% width on desktop */}
          <div className="md:order-2 order-1 w-full md:w-3/4 space-y-4">
            <ShinyText
              text="Take Your Trading to the Next Level"
              textColor="#0bf40abb"
              shineColor="#0bf40a"
              className="text-2xl md:text-[2rem] font-bold"
            />
            <p className="text-gray-300 md:text-lg text-justify leading-relaxed">
              The markets never sleep, and neither does Quantum AI. Whether you're looking to maximize profits, minimize
              risk, or trade smarter, this powerful AI is designed to give you the edge you need. With real-time data
              analysis, predictive intelligence, and automated execution, Quantum AI takes the guesswork out of
              trading—so you can focus on what truly matters.
            </p>
            <p className="text-gray-300 md:text-lg text-justify leading-relaxed">
              Ready to trade with confidence? Join the future of AI-powered trading today!
            </p>
            <button
              onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
              className="flex items-center space-x-1 border border-[#0bf40a33] px-4 py-2 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_15px_#0bf40a] hover:border-[#0bf40a]"
            >
              <p>Register Now</p>
            </button>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default QuantumPartner;
