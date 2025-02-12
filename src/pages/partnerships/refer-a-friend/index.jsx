import React, { useEffect } from "react";
import images from "@/assets";
import { referSteps } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import ShinyText from "@/components/animated/ShinyText";
import TextGenerateEffect from "@/components/animated/TextGenerate";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import useWidth from "@/hooks/useWidth";

const ReferFriend = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  useEffect(() => {
    document.title = "Zipphy | Partnerships";
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={isMobile ? true : false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2 space-y-4">
              <ShinyText
                text="Refer a Friend and Earn Rewards"
                textColor="#0bf40abb"
                shineColor="#0bf40a"
                className="text-2xl md:text-[2rem] font-bold"
              />
              <p className="text-gray-300 md:text-lg text-justify">
                Our referral program is designed to reward both you and your friends. Share your unique referral link,
                and the more your friends trade, the more you both benefit. Start earning today by inviting your friends
                to join the platform!
              </p>
              <button
                onClick={() => window.open("https://app.fizmofxmarkets.com/signup", "_blank")}
                className="flex items-center space-x-1 border border-[#0bf40a33] px-4 py-2 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_15px_#0bf40a] hover:border-[#0bf40a]"
              >
                <p>Register Now</p>
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={images.referFriend} alt="Refer a Friend" className="w-full rounded-lg" />
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={isMobile ? false : true}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <div className="text-center space-y-8">
            <TextGenerateEffect
              className="text-center text-2xl md:text-[2rem] font-bold leading-tight tracking-tight text-white"
              words="Invite Your Friends in 3 Easy Steps"
              animated={false}
            />
            <p className="text-gray-300 md:text-lg">
              Help your friends get started while earning rewards for yourself. It's a win-win!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {referSteps.map((step) => (
                <SpotlightCard borderColor="#0bf40a77" spotlightColor="#93939377" className="relative">
                  <div className="relative flex flex-col space-y-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GradientText
                        colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="px-4 py-2 !mx-0 text-9xl opacity-50"
                      >
                        {step.number}
                      </GradientText>
                    </div>
                    <h3 className="text-xl font-semibold z-10 bg-[#010101]/50">{step.title}</h3>
                    <p className="text-sm text-gray-300 text-justify z-10">{step.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => window.open("https://app.fizmofxmarkets.com/signup", "_blank")}
                className="bg-[#ffffff33] text-white px-4 py-2 rounded-lg backdrop-blur-lg border border-white/20 transition-all duration-300 hover:bg-[#ffffff55] hover:border-white hover:shadow-[0_0_15px_#ffffff]"
              >
                Register Now
              </button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </>
  );
};

export default ReferFriend;
