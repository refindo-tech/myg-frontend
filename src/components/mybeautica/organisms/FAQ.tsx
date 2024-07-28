import React, { useState } from "react";
import icons from "@/components/icons/icon";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQComponentProps = {
  faqItems: FAQItem[];
};

const FAQComponent: React.FC<FAQComponentProps> = ({ faqItems }) => {
  const [openFAQIndices, setOpenFAQIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openFAQIndices.includes(index)) {
      setOpenFAQIndices(openFAQIndices.filter((i) => i !== index));
    } else {
      setOpenFAQIndices([...openFAQIndices, index]);
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="w-full flex justify-center items-center relative">
          <div className="bg-red-300 rounded-full w-20 h-10 absolute z-0 right-1/2 -top-21 blur-2xl" />
          <h1 className="text-[65px] text-default-700 font-normal mb-8 font-playfair">
            FAQs
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-white border-b flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h4
                  className={`font-semibold font-openSans ${
                    openFAQIndices.includes(index) ? "text-ungu" : ""
                  }`}
                >
                  {item.question}
                </h4>
                <span
                  className={`text-xl ${
                    openFAQIndices.includes(index) ? "text-ungu" : ""
                  }`}
                >
                  {openFAQIndices.includes(index) ? (
                    <icons.MinusIcon />
                  ) : (
                    <icons.PlusIcon />
                  )}
                </span>
              </button>
              {openFAQIndices.includes(index) && (
                <div className="p-4 bg-white text-zinc font-openSans">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;
