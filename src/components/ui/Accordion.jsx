import React, { useState } from "react";
import Icon from "@/components/ui/Icon";

const Accordion = ({ items, allowMultiple = false }) => {
  const [activeIndices, setActiveIndices] = useState(allowMultiple ? [] : null);

  const toggleAccordion = (index) => {
    if (allowMultiple) {
      if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index)); // Close the item
      } else {
        setActiveIndices([...activeIndices, index]); // Open the item
      }
    } else {
      setActiveIndices(activeIndices === index ? null : index); // Toggle single item
    }
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isActive = allowMultiple ? activeIndices.includes(index) : activeIndices === index;

        return (
          <div key={index} className="border-b last:border-none ">
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-gradient-to-r from-accent to-secondary focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-800">{item.title}</span>
              <span className={`transition-transform duration-300 ${isActive ? "" : "-rotate-90"}`}>
                <Icon icon="heroicons:chevron-down" className="h-8 w-8 p-2 rounded text-primary bg-background" />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isActive ? "max-h-screen p-4" : "max-h-0"
              } bg-white text-gray-700`}
            >
              {isActive && <div className="text-justify">{item.content}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
