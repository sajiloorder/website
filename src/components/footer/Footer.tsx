import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#e8c6c6] rounded-md text-black py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1  rounded-2xl md:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-bold mb-2">We Are Sajilo Order</h2>
          {/* <p className="text-sm text-white">
            Fast and fresh food delivered to your door.Just tap away.
          </p> */}
          <ul>
            <Link href="/about" className="text-sm hover:text-white">
              About
            </Link>
          </ul>
          <ul>
            <Link href="/" className="text-sm hover:text-white">
              Home
            </Link>
          </ul>
          <ul>
            <Link href="/menu" className="text-sm hover:text-white">
              Menu
            </Link>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="text-sm text-white space-y-1">
            <li>
              <Link href="/help" className="hover:text-white">
                Help
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-white">
                Offers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-white text-xm">
                FAQS
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Polciy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-0.5 text-white">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm ">Whatsapp</p>
          <p className="text-sm ">Direct call</p>
          <p className="text-sm ">+977-9702003949</p>
          <p className="text-sm ">sajilo.order4@gmail.com</p>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <form className="flex  flex-col space-y-2">
            <input type="email" placeholder="Enter your email" className="px-3 py-1 bg-white text-sm text-black outline-none rounded" />
            <button className="bg-white text-black hover:opacity-80 text-sm py-1 w-20 rounded">Subscribe</button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-1.5 mt-3 text-white ">
            <a href="#" aria-label="Facebook" className="hover:text-white text-sm">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white text-sm">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white text-sm">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white text-sm">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white text-sm">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 text-center text-xs text-white">&copy; {new Date().getFullYear()} ! FoodieExpress. All rights reserved.</div>
    </footer>
  );
}
