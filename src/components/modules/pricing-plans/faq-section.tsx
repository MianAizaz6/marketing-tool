import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { closeIcon, plusIcon } from "../../../static-img-url";
import CTASection from "../home/cta-section";
import Footer from "../../ui-components/footer";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is social media management software?",
    answer:
      "Social media management software helps businesses manage, schedule, and analyze their social media activity from a single platform.",
  },
  {
    question: "Which social platforms do you support?",
    answer:
      "We support major platforms like Facebook, Instagram, Twitter, LinkedIn, TikTok, and more.",
  },
  {
    question: "Is there a mobile/responsive version for this software?",
    answer: "Yes, our platform is fully responsive and mobile-friendly.",
  },
  {
    question: "Do I need design skills to create posts?",
    answer:
      "Not at all! Our platform includes templates and drag-and-drop tools that make content creation easy for anyone.",
  },
];

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleToggle = (uuids: string[]) => {
    setExpandedItems(uuids);
  };
  return (
    <div>
      <section className="bg-[#FAFAFA] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B0D17] mb-8">
            YOUR QUESTIONS, <span className="text-[#FF4A00]">ANSWERED!</span>
          </h2>
          <Accordion onChange={handleToggle} allowZeroExpanded className="flex flex-col gap-3">
            {faqItems.map((item, index) => {
              const isOpen = expandedItems.includes(index.toString());
              return (
                <AccordionItem
                  uuid={index.toString()}
                  key={index}
                  className="border border-gray-200 cursor-pointer rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex justify-between items-center px-4 py-3 font-medium text-[18px] text-left text-[#0B0D17]">
                      {item.question}
                      <img src={isOpen ? closeIcon : plusIcon} alt="" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-4 py-2 mx-3 mb-3 rounded-md text-left text-[16px] bg-[#F8F8F8] p-2 text-gray-600">
                    {item.answer}
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </section>
      <CTASection />

      <Footer />
    </div>
  );
};

export default FAQSection;
