import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-300 text-gray-600 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1  rounded-2xl md:grid-cols-4 gap-6 mt-2">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold mb-2">We Are Sajilo Order</h2>
          {/* <p className="text-sm text-white">
            Fast and fresh food delivered to your door.Just tap away.
          </p> */}
          <ul>
            <Link href="/about" className="text-sm text-black hover:text-primary">
              About
            </Link>
          </ul>
          <ul>
            <Link href="/" className="text-sm text-black hover:text-primary">
              Home
            </Link>
          </ul>
          <ul>
            <Link href="/menu" className="text-sm text-black hover:text-primary">
              Menu
            </Link>
          </ul>
          <ul>
            <Link href="/menu" className="text-sm text-black hover:text-primary">
              Offers
            </Link>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="text-sm text-black space-y-1">
            <li>
              <Link href="/help" className="hover:text-primary">
                Help
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-primary text-xm">
                FAQS
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Polciy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-0.5 text-black  ">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm  hover:text-primary">Whatsapp</p>
          <p className="text-sm  hover:text-primary">Direct call</p>
          <p className="text-sm  hover:text-primary">+977-9702003949</p>
          <p className="text-sm  hover:text-primary">sajilo.order4@gmail.com</p>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <form className="flex  flex-col space-y-2">
            <input type="email" placeholder="Enter your email" className="px-3 py-1 bg-primary/90 text-sm text-white outline-none rounded placeholder:text-white" />
            <button className="bg-primary/90 text-white hover:opacity-80 text-sm py-1 w-20 rounded">Subscribe</button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-1.5 mt-3 text-black ">
            <a href="#" aria-label="Facebook" className="  hover:text-primary text-sm">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="  hover:text-primary text-sm">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="  hover:text-primary text-sm">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className=" hover:text-primary text-sm">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="LinkedIn" className=" hover:text-primary text-sm">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 text-center text-xs text-black">&copy; {new Date().getFullYear()} ! Sajilo Order. All rights reserved.</div>
    </footer>
  );
}
