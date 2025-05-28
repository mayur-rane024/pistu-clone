import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3A2A1B] text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand Info */}
        <div>
          <img
            src="./logo.png"
            alt="PISTU Logo"
            className="h-16 mb-4 invert-100"
          />
          <p className="text-sm text-white" style={{ fontFamily: "font1" }}>
            Pigment Art and Design Studio. Handcrafted luxury leather goods
            combining art, craftsmanship, and luxury.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-3" style={{ fontFamily: "font2" }}>
            Explore
          </h3>
          <ul
            className="space-y-2 text-sm text-gray-300"
            style={{ fontFamily: "font1" }}
          >
            <li>
              <a href="#products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Our Craft
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Brand Story
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg  mb-3" style={{ fontFamily: "font2" }}>
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <ul
              className="space-y-2 text-sm text-gray-300"
              style={{ fontFamily: "font1" }}
            >
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-white">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-white">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <h3 className="text-lg  mb-3" style={{ fontFamily: "font2" }}>
            Contact
          </h3>
          <ul
            className="space-y-2 text-sm text-gray-300"
            style={{ fontFamily: "font1" }}
          >
            <li>PISTU Studio, Koregaon Park, Pune 411001, India</li>
            <li>+91 98765 43210</li>
            <li>hello@pistu.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
        © 2025 PISTU - Pigment Art and Design Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
