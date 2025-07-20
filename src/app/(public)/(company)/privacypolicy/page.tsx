"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";

const sections = [
  {
    title: "1. What We Collect",
    content: [
      "Your name, email, phone number, and delivery address",
      "Order details, payment info, and preferences",
      "Device, browser, and location (with permission)"
    ]
  },
  {
    title: "2. How We Use It",
    content: [
      "To deliver your food accurately and on time",
      "To improve our app, services, and support",
      "To notify you about order status or offers"
    ]
  },
  {
    title: "3. Sharing Your Data",
    content: [
      "With delivery partners to fulfill your order",
      "With secure payment gateways for transactions",
      "Never sold to advertisers or third parties"
    ]
  },
  {
    title: "4. Your Privacy Rights",
    content: [
      "Access or delete your data at any time",
      "Opt-out of marketing messages",
      "Contact us at support@yourapp.com"
    ]
  },
  {
    title: "5. Security Practices",
    content: [
      "End-to-end encryption of sensitive data",
      "Secure servers & token-based authentication",
      "Regular audits & compliance checks"
    ]
  }
];

const PrivacyPolicy = () => {
  return (
    <div>
      <div className=" bg-gradient-to-br from-white to-yellow-50 dark:from-gray-900 dark:to-black px-2 py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto glass rounded-2xl p-6 md:p-14 shadow-2xl backdrop-blur-md"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Privacy & Policy
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
            Your privacy is our priority. Here’s how we protect your data while delivering great food and service.
          </p>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{section.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                {section.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <p className="text-sm text-gray-400 dark:text-gray-500 text-center mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            Last updated: July 19, 2025
          </p>
        </motion.div>

      </div>

      <div>
        <Footer />
      </div>

    </div>

  );
};

export default PrivacyPolicy;
