import React from "react";
import { banks } from "@/data/data";

const ClientSlider = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="overflow-hidden relative">
        <div className="flex animate-slider space-x-12">
          {[...banks, ...banks, ...banks].map((bank, index) => (
            <div key={index} className="flex-none">
              <img src={bank.logo} alt={bank.name} className="w-36 h-16 object-contain mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
