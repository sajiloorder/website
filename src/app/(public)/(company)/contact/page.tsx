// /app/contact/page.tsx or /pages/contact.js

import Footer from '@/components/footer/Footer';
import React from 'react';



export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#cc4744">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover rounded-2xl bg-center"
        style={{ backgroundImage: "url('/images/combo.jpg')" }}
      >
        <h1 className="text-white text-3xl font-bold p-10">Chicken Gravy</h1>

        <div className="absolute inset-0 bg-primary bg-opacity-60 flex  rounded-2xl flex-col justify-center leading-relaxed items-center text-white text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg"> Reach out anytime!</p>
        </div>
      </div>
       <div>
         <p className="text-gray-800  mt-10 align-middle item-center font-sans text-lg font-semibold flex items-center justify-center">
            We’d love to hear from you! Whether you have questions, feedback, or need help with an order, we’re here for you. Do not hesitate feel free to contact.
          </p>
       </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 outline-none md:grid-cols-2 gap-10">
        {/* Contact Info */}
       
 
        {/* Contact Form */}
        <form className="bg-gray-100 p-6 rounded-xl shadow-md space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none outline-none "
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              rows={5}
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-80 hover:text-black  transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
