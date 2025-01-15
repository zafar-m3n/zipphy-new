import React, { useEffect } from "react";
import { promotionsData } from "@/data/data";
import ShinyText from "@/components/animated/ShinyText";
import AnimatedContent from "@/components/animated/AnimatedContent";

const Promotions = () => {
  useEffect(() => {
    document.title = "Zipphy | Promotions";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {promotionsData.map((promotion, index) => (
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
          <div
            key={promotion.id}
            className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2">
                  <ShinyText
                    text={promotion.title}
                    textColor="#0bf40abb"
                    shineColor="#0bf40a"
                    className="text-2xl md:text-[2rem] font-bold mb-4"
                  />
                  <h2 className="text-lg md:text-xl font-bold text-secondary mb-4">{promotion.subheading}</h2>
                  {promotion.text.map((paragraph, idx) => (
                    <p key={idx} className="text-sm text-justify mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <img src={promotion.image} alt={promotion.title} className={`${promotion.imageClass} rounded-lg`} />
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2 order-2 md:order-1 flex items-center justify-center">
                  <img src={promotion.image} alt={promotion.title} className={`${promotion.imageClass} rounded-lg`} />
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <ShinyText
                    text={promotion.title}
                    textColor="#0bf40abb"
                    shineColor="#0bf40a"
                    className="text-2xl md:text-[2rem] font-bold mb-4"
                  />
                  <h2 className="text-lg md:text-xl font-bold text-secondary mb-4">{promotion.subheading}</h2>
                  {promotion.text.map((paragraph, idx) => (
                    <p key={idx} className="text-sm text-justify mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
};

export default Promotions;
