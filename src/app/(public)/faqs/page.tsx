"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does sajilo order prepare food itself?",
    answer:
      "No sajilo order is a foood ordering and delivering service. We deliver food from best and member restaurant.",
  },
  {
    question: "From which restaurant ca i order?",
    answer:
      "You can order from any of our partner restarants. We have many partner restaurant that have certified liscence on food quality.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Browse the menu, select your items, and proceed to checkout. Follow the instructions to complete payment.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver to most parts of the city. Enter your location to check availability before ordering.",
  },
  {
    question: "Can I schedule a delivery?",
    answer:
      "Yes, you can choose a delivery time during checkout that suits your schedule.",
  },
  {
    question: "Can I cancel my order if i needed",
    answer:
      "Yess you can. However , you need to inform us on over the phone on time. If the ordered food is already prepared by the restaurant, you cannot cancel the order.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, digital wallets, and cash on delivery in select locations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between cursor-pointer items-center text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
