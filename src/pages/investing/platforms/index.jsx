import React, { useEffect } from "react";
// import ContactForm from "@/components/ContactForm";

const Platforms = () => {
  const platforms = [
    {
      name: "MetaTrader 5 Desktop",
      description:
        "Discover endless trading opportunities with MetaTrader 5 Desktop. Designed for serious traders, it provides real-time market access, robust charting tools, and algorithmic trading capabilities. Execute trades seamlessly while managing diverse financial instruments from a single platform. Perfect for traders looking to harness professional-grade tools for maximum precision.",
      features: [
        "Real-time market data",
        "Comprehensive charting tools",
        "Algorithmic trading support",
        "Access to trading robots and indicators",
      ],
      image: "/images/new-mt5-platforms.jpg",
    },
    {
      name: "MetaTrader 5 Mobile",
      description:
        "Stay ahead of the market wherever you are with MetaTrader 5 Mobile. This platform empowers traders with advanced tools for analysis, real-time market updates, and secure trade execution, all from your smartphone. Enjoy flexibility and control over your portfolio, whether at home or on the move.",
      features: [
        "On-the-go trading",
        "Advanced charting tools",
        "Real-time notifications",
        "Available for Android & iOS",
      ],
      image: "/images/metatraders3.webp",
    },
    {
      name: "WebTrader",
      description:
        "Experience the convenience of trading without downloads or installations with our WebTrader. Access powerful tools, analyze market trends, and execute trades securely—all directly from your browser. WebTrader is perfect for traders who value simplicity and accessibility.",
      features: [
        "Browser-based trading",
        "No installations required",
        "Advanced analysis tools",
        "Secure execution capabilities",
      ],
      image: "/images/webtrader.png",
    },
  ];

  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {platforms.map((platform, index) => (
          <section
            key={index}
            className={`relative text-secondary p-8 lg:p-16`}
          >
            <div className="flex flex-col lg:flex-row items-center">
              {/* Alternate Layout */}
              {index % 2 === 0 ? (
                <>
                  {/* Text Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary">{platform.name}</h2>
                    <p className="text-sm md:text-lg text-justify">{platform.description}</p>
                    <ul className="space-y-4">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <span className="text-accent">
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

                  {/* Image Content */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="rounded-lg animate-fadeInUp w-full max-w-md"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image Content */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-start relative mt-10 lg:mt-0">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="rounded-lg animate-fadeInUp w-full max-w-md"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary">{platform.name}</h2>
                    <p className="text-sm md:text-lg text-justify">{platform.description}</p>
                    <ul className="space-y-4">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <span className="text-accent">
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
                </>
              )}
            </div>
          </section>
        ))}
      </div>
      {/* <ContactForm /> */}
    </>
  );
};

export default Platforms;
