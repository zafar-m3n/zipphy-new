import React from "react";
import { paymentMethods } from "@/data/data";

const PaymentMethods = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8 items-center justify-center py-4 md:py-8">
      <h2 className="text-2xl md:text-4xl font-bold col-span-12 md:col-span-4 ">Our Secure Payment Methods</h2>
      <div className="col-span-12 md:col-span-8">
        <div className="overflow-hidden relative">
          <div className="flex animate-slider space-x-16 h-36 items-center justify-center">
            {[...paymentMethods, ...paymentMethods, ...paymentMethods].map((method, index) => (
              <div
                key={index}
                className="w-24 h-24 border border-[#0bf40a33] rounded-lg text-white bg-[#0bf40a11] backdrop-blur-lg rotate-45 flex-none flex items-center justify-center"
              >
                <img src={method.image} alt={method.name} className="w-16 h-16 rotate-[-45deg] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
