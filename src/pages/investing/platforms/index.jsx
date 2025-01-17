import React, { useEffect } from "react";
import { platforms } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";

const Platforms = () => {
  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {platforms.map((platform, index) => (
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={index % 2 === 0 ? true : false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.0}
          animateOpacity
          scale={1.0}
          threshold={0.1}
        >
          <section key={index} className={`relative text-secondary lg:px-8`}>
            <div className="flex flex-col lg:flex-row items-center">
              <div className={`lg:w-1/2 space-y-6 ${index % 2 === 0 ? "lg:order-1 order-1" : "lg:order-2 order-1"}`}>
                <ShinyText
                  text={platform.name}
                  textColor="#0bf40abb"
                  shineColor="#0bf40a"
                  className="text-2xl md:text-[2rem] font-bold"
                />
                <p className="text-sm md:text-lg text-justify">{platform.description}</p>
                <ul className="space-y-4">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
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
                      <p className="text-justify text-sm md:text-base">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`lg:w-1/2 flex justify-center ${
                  index % 2 === 0 ? "lg:justify-end lg:order-2 order-2" : "lg:justify-start lg:order-1 order-1"
                } relative mt-10 lg:mt-0`}
              >
                <img src={platform.image} alt={platform.name} className="rounded-lg animate-fadeInUp w-full max-w-md" />
              </div>
            </div>
          </section>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default Platforms;
