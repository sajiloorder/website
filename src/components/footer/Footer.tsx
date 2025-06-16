import {FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="bg-gray-800 rounded-2xl text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1  rounded-2xl md:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-2">Sajilo Order</h2>
          <p className="text-sm text-gray-400">
            Fast and fresh food delivered to your door.
            <br/>
            #Best in the town.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/menu" className="hover:text-white">Menu</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='space-y-0.5'>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-400">Whatsapp</p>
          <p className="text-sm text-gray-400">Direct call</p>
          <p className="text-sm text-gray-400">+977-9702003949</p>
          <p className='text-sm text-gray-400'>sajilo.order4@gmail.com</p>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <form className="flex  flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-1 bg-white text-sm text-black outline-none rounded"
            />
            <button className="bg-red-500 hover:bg-red-600 text-black
             text-sm py-1 w-20 rounded">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-1.5 mt-3 text-gray-300 ">
            <a href="#" aria-label="Facebook" className="hover:text-white text-sm"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white text-sm"><FaXTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white text-sm"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white text-sm"><FaLinkedinIn/></a>
             <a href="#" aria-label="LinkedIn" className="hover:text-white text-sm"><SiGmail /></a>
             
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ! FoodieExpress. All rights reserved.
      </div>
    </footer>
  );
}
