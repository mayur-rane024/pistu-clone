import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Contact Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              {/* <div className="relative">
                <Image
                  alt="logo"
                  src="/amc-pccoe-logo.png"
                  width={120}
                  height={120}
                  className="object-contain rounded-lg"
                />
              </div> */}
              <div>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  Developed with{" "}
                  <span className="inline-block animate-pulse text-red-500">❤️</span> by webmasters
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-blue-500 pb-2 inline-block">
                Contact Us
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Pimpri Chinchwad College of Engineering</p>
                <p className="text-sm">
                  Near Akurdi Railway Station Rd, Sector No. 26, Pradhikaran, Nigdi, 
                  Pimpri-Chinchwad, Maharashtra 411044
                </p>
                <Link
                  // ref="mailto:acm@pccoepune.org"
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200" to={""}                >
                  acm@pccoepune.org
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
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/gallery", label: "Gallery" },
                { href: "https://www.acm.org/", label: "ACM - Home" },
                { href: "https://india.acm.org/", label: "ACM India - Home" },
                { href: "https://xrds.acm.org/", label: "ACM - XRDS" },
                { href: "https://dl.acm.org/", label: "ACM Digital Library" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    // href={link.href}
                    className="group flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200" to={""}                  >
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      ›
                    </span>
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </li>
              ))}
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
            © {new Date().getFullYear()} PCCOE ACM Student Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;