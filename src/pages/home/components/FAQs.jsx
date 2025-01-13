import React, { useState, useRef } from "react";
import Icon from "@/components/ui/Icon";
import AnimatedContent from "@/components/animated/AnimatedContent";
import useWidth from "@/hooks/useWidth";

const FAQs = () => {
  const { width, breakpoints } = useWidth();
  const isMobile = width < breakpoints.md;

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqs = [
    {
      question: "What is Zipphy?",
      answer:
        "Zipphy is a cutting-edge trading platform that provides access to a wide range of financial markets, including stocks, forex, commodities, and crypto.",
    },
    {
      question: "How secure is Zipphy?",
      answer:
        "Security is our top priority. Zipphy uses advanced encryption and fraud protection to ensure your assets and personal information are safe.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, Zipphy is transparent about its pricing. There are no hidden fees—just clear, upfront costs.",
    },
    {
      question: "What payment methods do you support?",
      answer:
        "Zipphy supports a variety of payment methods, including credit/debit cards, bank transfers, and popular e-wallets.",
    },
    {
      question: "Can I trade on mobile?",
      answer: "Yes, Zipphy offers a fully responsive platform that works seamlessly on mobile and desktop devices.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AnimatedContent
      distance={100}
      direction="horizontal"
      reverse={true}
      config={{ tension: 50, friction: 25 }}
      initialOpacity={0.0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
    >
      <section className="container mx-auto p-8 lg:p-16">
        <h2 className="text-[2rem] font-bold text-secondary text-center mb-12">
          Answers to the most frequently asked questions
        </h2>
        <div className="md:max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 transition-all duration-300 shadow-md ${
                activeIndex === index || hoveredIndex === index
                  ? "bg-[#ffffff33] backdrop-blur-lg border border-white/20 hover:shadow-[0_0_15px_#ffffff] hover:bg-[#ffffff55] hover:border-white shadow-[0_0_15px_#ffffff]"
                  : "bg-[#ffffff33] backdrop-blur-lg border border-white/20"
              }`}
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <Icon
                  icon={activeIndex === index ? "heroicons:chevron-up" : "heroicons:chevron-down"}
                  className="text-white"
                  width={24}
                />
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                }}
              >
                <p className="mt-4 text-gray-200 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
};

export default FAQs;
