import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronDown } from "react-icons/fa";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const questions = [
  {
    question: "GENERAL ISSUE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "FINANCIAL ISSUE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "SECURITY ISSUE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "TECHNICAL ISSUE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "E-CHANNEL SELF SERVICE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "SELF SERVICE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "FRAUDULENT TRANSACTION",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
];

const FAQs = () => {
  return (
    <div className="flex flex-col items-center h-full p-6 bg-gray-50">
      <h4 className="font-bold text-3xl mb-8 text-center text-gray-900">
        Frequently Asked Questions
      </h4>
      <div className="w-full max-w-4xl mx-auto">
        <Accordion allowZeroExpanded>
          {questions.map((question, index) => (
            <AccordionItem key={index} className="mb-4">
              {" "}
              {/* Add margin-bottom to each item */}
              <AccordionItemHeading>
                <AccordionItemButton className="flex justify-between items-center w-full p-4 text-lg font-semibold text-left text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-orange-500 transition duration-300 ease-in-out">
                  {question.question}
                  <FaChevronDown className="text-gray-600 ml-2" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="p-4 bg-white text-gray-700 border border-t-0 border-gray-300 rounded-b-lg">
                {question.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
