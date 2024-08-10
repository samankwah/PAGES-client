import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaChevronDown, FaSearch } from "react-icons/fa";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const questions = [
  {
    question: "QUESTION GÉNÉRALE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "PROBLÈME FINANCIER",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "PROBLÈME DE SÉCURITÉ",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "PROBLÈME TECHNIQUE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "LIBRE-SERVICE ÉLECTRONIQUE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "EN LIBRE SERVICE",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
  {
    question: "TRANSACTION FRAUDULEUSEN",
    answer:
      "Emergency steps to contain fraudulent transaction or attempt on my account.",
  },
];

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = questions.filter((question) =>
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center h-full p-6 bg-gray-50">
      <h4 className="font-bold text-3xl mb-8 text-center text-gray-900">
        Questions fréquemment posées
      </h4>
      <div className="w-full max-w-4xl mx-auto mb-4 relative">
        <input
          type="text"
          placeholder="Questions de recherche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-500"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <Accordion allowZeroExpanded>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question, index) => (
              <AccordionItem key={index} className="mb-4">
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
            ))
          ) : (
            <p className="text-center text-gray-700">No questions found.</p>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
