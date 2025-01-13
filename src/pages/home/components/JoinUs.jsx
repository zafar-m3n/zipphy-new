import React from "react";
import Icon from "@/components/ui/Icon";
import Vortex from "@/components/animated/Vortex";

function JoinUs() {
  return (
    <div className="container mx-auto rounded-md h-[30rem] overflow-hidden p-8 lg:p-16">
      <Vortex
        backgroundColor="transparent"
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">Join Our Traders</h2>
        <p className="text-white text-sm md:text-2xl max-w-xl my-6 text-center">
          Learn how to trade and invest in the stock market with our team of experts.
        </p>
          <button
            onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
            className="flex items-center space-x-1 border border-[#0bf40a33] px-4 py-2 rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg transition-all duration-300 hover:bg-[#0bf40a44] hover:shadow-[0_0_15px_#0bf40a] hover:border-[#0bf40a]"
          >
            <p>Register Now</p>
            <Icon icon="heroicons:arrow-top-right-on-square" width={16} />
          </button>
      </Vortex>
    </div>
  );
}

export default JoinUs;
