import React, { useEffect } from "react";
import Icon from "@/components/ui/Icon";
import images from "@/assets";
import AnimatedContent from "@/components/animated/AnimatedContent";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import TextGenerateEffect from "@/components/animated/TextGenerate";
import useWidth from "@/hooks/useWidth";

const ContactPage = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  useEffect(() => {
    document.title = "Zipphy | Company";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <TextGenerateEffect
        className="text-center text-xl md:text-[2rem] font-bold leading-tight tracking-tight text-white mb-8"
        words="Contact Us"
      />
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2">
          <img src={images.contact} alt="Contact Us" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <form className="bg-[#010101] bg-opacity-50 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:bg-white/30 focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:bg-white/30 focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:bg-white/30 focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:bg-white/30 focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message..."
                className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 text-white placeholder-white/50 focus:bg-white/30 focus:border-secondary focus:ring-secondary focus:outline-none py-2 px-3 transition duration-300"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-[#ffffff33] text-white px-4 py-2 rounded-lg backdrop-blur-lg border border-white/20 transition-all duration-300 hover:bg-[#ffffff55] hover:border-white hover:shadow-[0_0_15px_#ffffff]">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedContent
          distance={100}
          direction={isMobile ? "horizontal" : "vertical"}
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <SpotlightCard borderColor="#93939377" className="relative">
            <div className="relative flex flex-col space-y-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon icon="heroicons:map-pin" width={200} className="text-[#0bf40a] opacity-15" />
              </div>
              <GradientText
                colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                animationSpeed={3}
                showBorder={true}
                className="px-4 py-2 !mx-0"
              >
                Australia
              </GradientText>
              <h3 className="text-xl font-semibold z-10">57 Carters Road, Dural NSW 2158, Sydney, Australia</h3>
            </div>
          </SpotlightCard>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction={isMobile ? "horizontal" : "vertical"}
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <SpotlightCard borderColor="#93939377" className="relative">
            <div className="relative flex flex-col space-y-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon icon="heroicons:map-pin" width={200} className="text-[#0bf40a] opacity-15" />
              </div>
              <GradientText
                colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                animationSpeed={3}
                showBorder={true}
                className="px-4 py-2 !mx-0"
              >
                United Kingdom
              </GradientText>
              <h3 className="text-xl font-semibold z-10">22 Broomfield Place, Steven, United Kingdom</h3>
            </div>
          </SpotlightCard>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction={isMobile ? "horizontal" : "vertical"}
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <SpotlightCard borderColor="#93939377" className="relative">
            <div className="relative flex flex-col space-y-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon icon="heroicons:envelope" width={200} className="text-[#0bf40a] opacity-15" />
              </div>
              <GradientText
                colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                animationSpeed={3}
                showBorder={true}
                className="px-4 py-2 !mx-0"
              >
                Email
              </GradientText>
              <h3 className="text-xl font-semibold z-10">support@zipphy.com</h3>
              <br />
            </div>
          </SpotlightCard>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default ContactPage;
