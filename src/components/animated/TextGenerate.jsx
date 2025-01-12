import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import ShinyText from "./ShinyText";

const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  multiColored = true,
  animated = false,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isMultiColored = multiColored && idx > 2;

          if (animated && isMultiColored) {
            return (
              <motion.div
                key={`${word}-${idx}`}
                className="inline-block opacity-0"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: duration, delay: idx * 0.2 }}
              >
                <ShinyText text={word} textColor="#0bf40abb" shineColor="#0bf40a" className="me-2" />
              </motion.div>
            );
          }

          return (
            <motion.span
              key={`${word}-${idx}`}
              className={`${isMultiColored ? "text-green-400" : "dark:text-white text-black"} opacity-0`}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: duration, delay: idx * 0.2 }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold`}>
      <div className="mt-4">
        <div className={`dark:text-white text-black text-2xl leading-snug tracking-wide ${className}`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
