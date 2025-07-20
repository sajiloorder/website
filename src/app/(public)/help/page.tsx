

// pages/help.tsx or components/HelpSection.tsx
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import React from "react";

const HelpSection = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-black px-2 py-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We Help You?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-12">
            Here are some common questions and support topics to get you started.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 transition hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 mb-6">
            <p className="text-md text-gray-700 dark:text-gray-300">
              Still need help?{" "}
              <Link
                href="/contact"
                className="text-black hover:text-blue-400 underline"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const faqs = [
  {
    question: 'Does sajilo order prepare food itself?',
    answer: 'No sajilo order is a foood ordering and delivering service. We deliver food from best and member restaurant.',
  },
  {
    question: 'From which restaurant ca i order?',
    answer: 'You can order from any of our partner restarants. We have many partner restaurant that have certified liscence on food quality.',
  },
  {
    question: 'How do I place an order?',
    answer: 'Browse the menu, select your items, and proceed to checkout. Follow the instructions to complete payment.',
  },
  {
    question: 'What areas do you deliver to?',
    answer: 'We deliver to most parts of the city. Enter your location to check availability before ordering.',
  },
  {
    question: 'Can I schedule a delivery?',
    answer: 'Yes, you can choose a delivery time during checkout that suits your schedule.',
  },
  {
    question: 'Can I cancel my order if i needed',
    answer: 'Yess you can. However , you need to inform us on over the phone on time. If the ordered food is already prepared by the restaurant, you cannot cancel the order.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit/debit cards, digital wallets, and cash on delivery in select locations.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit/debit cards, digital wallets, and cash on delivery in select locations.',
  },
];

export default HelpSection;
