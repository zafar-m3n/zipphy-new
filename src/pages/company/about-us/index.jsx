import React, { useEffect } from "react";
import Icon from "@/components/ui/Icon";
import { steps } from "@/data/data";
import AnimatedContent from "@/components/animated/AnimatedContent";
import SpotlightCard from "@/components/animated/SpotlightCard";
import GradientText from "@/components/animated/GradientText";
import useWidth from "@/hooks/useWidth";

const AboutUsPage = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  useEffect(() => {
    document.title = "Zipphy | Company";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary">ABOUT US</h2>
          <p className="text-sm md:text-lg text-justify mt-4">
            Select a trusted broker—one that stands by you. At Zipphy, we are committed to putting our clients first,
            providing reliable services, and offering exceptional support. Whether you’re a seasoned trader or new to
            trading, we prioritize your success and aim to provide the resources and tools you need to thrive.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/images/about.png" alt="About Us" className="w-full rounded-lg shadow-lg animate-fadeInUp" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 order-2 md:order-1">
          <img src="/images/mission.jpg" alt="Our Mission" className="w-full rounded-lg shadow-lg animate-fadeInUp" />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary">Our Mission</h2>
          <p className="text-sm md:text-lg text-justify mt-4">
            At Zipphy, we aim to empower traders by delivering cutting-edge trading technology, innovative tools, and
            exceptional support. Our mission is to provide a robust platform where traders can thrive with confidence
            and achieve their financial aspirations.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary">Our Vision</h2>
          <p className="text-sm md:text-lg text-justify mt-4">
            Our vision is to lead the industry with innovation and reliability, offering a platform that empowers
            traders to excel in their financial journeys. We strive to create a seamless trading experience, helping our
            clients achieve their goals and shape a prosperous future.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/images/vision.jpg" alt="Our Vision" className="w-full rounded-lg shadow-lg animate-fadeInUp" />
        </div>
      </div>

      {/* Empowerment Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 order-2 md:order-1">
          <img
            src="/images/empowerment.jpg"
            alt="Empowerment"
            className="w-full rounded-lg shadow-lg animate-fadeInUp"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary">Empowerment</h2>
          <p className="text-sm md:text-lg text-justify mt-4">
            At Zipphy, every trade counts! We’re dedicated to empowering our clients with tailored solutions and
            personalized support to help them unlock their trading potential. Discover trading as it’s meant to be:
            dependable, transparent, and accessible.
          </p>
        </div>
      </div>

      <section className="container mx-auto p-8 lg:p-16">
        <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">How To Get Started</h2>
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
              <SpotlightCard borderColor="#93939377" className="relative">
                <div className="relative flex flex-col space-y-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon={step.icon} width={200} className="text-[#0bf40a] opacity-15" />
                  </div>
                  <GradientText
                    colors={["#0bf40a", "#0ae0f4", "#0bf40a", "#0bf40a"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="px-4 py-2 !mx-0"
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
    </div>
  );
};

export default AboutUsPage;
