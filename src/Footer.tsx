import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3A2A1B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-blue-500 pb-2 inline-block">
                PISTU LOGO
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">PISTU</p>
                <p className="text-sm">
                 Pigment Art and Design Studio. Handcrafted luxury leather goods combining art, craftsmanship, and luxury.
                </p>
                <Link
                  // href=""
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200" to={""}                >
                  pistu.india@gmail.com 
                </Link>
              </div>
            </div>
          </div>

          {/* Explore Links Section */}
          <div className="lg:ml-12">
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-blue-500 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Our Craft" },
                { href: "https://www.acm.org/", label: "Brand - Story" },
                { href: "https://india.acm.org/", label: "Blog" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    // href={link.href}
                    className="group flex items-center text-gray-300 hover:text-[#d29a65] transition-colors duration-200" to={""}                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      ›
                    </span>
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

 {/* Customer Care Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
      <ul className="space-y-2">
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Shipping & Returns</a></li>
        <li><a href="#">Care Instructions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>

          {/* Social Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-blue-500 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <Link
                // href="https://www.instagram.com/pccoeacm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group" to={""}              >
                <FaInstagram size={24} className="text-gray-400 group-hover:text-pink-500" />
              </Link>
              <Link
                // href="https://www.linkedin.com/company/pccoe-acm-student-chapter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group" to={""}              >
                <FaLinkedin size={24} className="text-gray-400 group-hover:text-blue-500" />
              </Link>
              <Link
                // href="https://www.facebook.com/pccoe.acm/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group" to={""}              >
                <FaFacebook size={24} className="text-gray-400 group-hover:text-blue-500" />
              </Link>
              <Link
                // href="https://x.com/pccoeacm?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200 group" to={""}              >
              </Link>
              
             
             
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()}  2025 PISTU - Pigment Art and Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;