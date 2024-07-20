import React, { useState } from 'react';
import { Accordion, AccordionItem, Spacer } from "@nextui-org/react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleExpansion = (title: string) => {
    setExpandedItems(prevState =>
      prevState.includes(title)
        ? prevState.filter(item => item !== title)
        : [...prevState, title]
    );
  };

  return (
    <section className="w-full max-w-[1420px] mx-auto bg-white p-16 xl:px-32">
      <div className="w-full flex justify-center items-center relative">
        <div className="bg-red-300 rounded-full w-20 h-10 absolute z-0 right-1/2 -top-21 blur-2xl" />
        <h1 className="text-[65px] text-default-700 font-normal mb-8 font-playfair">
          FAQs
        </h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        {/* Split the faqs into two columns */}
        <div className="w-full md:pr-4">
          <Accordion selectionMode="multiple">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index}
                title={
                  <span
                    className={`text-lg font-bold ${
                      expandedItems.includes(faq.question) ? 'text-rose-400' : 'text-zinc-700'
                    }`}
                    
                  >
                    {faq.question}
                  </span>
                }
                onPress={() => handleExpansion(faq.question)}
                className=""
              >
                <p className='text-base font-normal text-zinc-700'>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-full">
          <Accordion selectionMode="multiple">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index}
                title={
                  <span
                    className={`text-lg font-bold ${
                      expandedItems.includes(faq.question) ? 'text-rose-400' : 'text-zinc-700'
                    }`}
                  >
                    {faq.question}
                  </span>
                }
                onPress={() => handleExpansion(faq.question)}
                className=""
              >
                <p className='text-base font-normal text-zinc-700'>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
    </section>


  );
};

export default FAQSection;
