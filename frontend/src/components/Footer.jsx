
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-blue-100 to-blue-300
     text-black shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="OneCart Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold tracking-wide">OneCart</h1>
          </div>
          <p className="text-gray-800 text-sm leading-relaxed">
            Shop smarter with OneCart — your ultimate destination for top deals,
            quality products, and lightning-fast delivery, all in one place!
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-gray-800">
            <li className="hover:text-blue-700 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-700 cursor-pointer transition">About Us</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Delivery</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-3 text-black text-sm">
            <li className="flex items-center gap-2 hover:text-blue-600 transition">
              <span className="text-xl">📞</span> +91-9876543210
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600 transition">
              <span className="text-xl">📧</span> contact@onecart.com
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-black hover:text-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-black hover:text-blue-700 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-blue-700 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-black hover:text-blue-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-400 py-4 text-center text-gray-900 text-sm
       bg-white/60 backdrop-blur-sm">
        © 2025 OneCart. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
