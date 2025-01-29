import React from "react";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";
import ShinyText from "@/components/animated/ShinyText";
import useWidth from "@/hooks/useWidth";
import { awards } from "@/data/data";

const AwardsSection = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;
  return (
    <section className="mx-auto container">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Awards</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto max-w-[90rem]">
        {awards.map((award, index) => (
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
            <div className="flex flex-col items-center" key={index}>
              <div className="flex items-center justify-center">
                <Icon icon="hugeicons:laurel-wreath-left-01" width={96} className="text-[#0bf40a]" />
                <div className="flex flex-col items-center text-center space-y-2">
                  <h3 className="text-3xl font-bold text-accent">{award.year}</h3>
                  <p className="text-gray-300 text-sm">{award.title}</p>
                </div>
                <Icon icon="hugeicons:laurel-wreath-right-01" width={96} className="text-[#0bf40a]" />
              </div>
              <ShinyText text={award.event} textColor="#0bf40abb" shineColor="#0bf40a" className="italic" />
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
