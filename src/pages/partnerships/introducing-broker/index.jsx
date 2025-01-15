import React, { useEffect } from "react";
import Icon from "@/components/ui/Icon";
import images from "@/assets";
import { features } from "@/data/data";

const Broker = () => {
  useEffect(() => {
    document.title = "Zipphy | Partnerships";
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Section 1: Introducing Zipphy Broker Program */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Introducing Zipphy Broker Program</h2>
            <p className="text-gray-600 mt-4 md:text-lg">
              The Zipphy Broker Program offers unmatched opportunities for both individuals and businesses to grow in
              the trading world. With cutting-edge tools and personalized support, we empower our brokers to succeed.
              Join us and gain seamless access to global markets, innovative trading solutions, and unparalleled
              resources for your financial growth.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={images.introducingBroker}
              alt="Introducing Broker Program"
              className="w-full rounded-lg animate-fadeInUp"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">What Zipphy Offers You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <div className="relative text-center p-6 rounded-lg shadow-lg" key={index}>
                <div className="absolute inset-0 text-9xl font-bold text-accent -z-10 flex items-center justify-center">
                  <Icon icon={feature.icon} />
                </div>
                <h3 className="text-xl font-bold text-secondary mt-8">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <ContactForm /> */}
    </>
  );
};

export default Broker;
