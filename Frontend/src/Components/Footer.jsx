import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, } from 'react-icons/fa';
import logo from "../assets/Logo.png"

function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              <img 
                src={logo} 
                alt="RJ Creation Logo" 
                className="h-12 sm:h-16 lg:h-20 mx-auto sm:mx-0 mb-3 sm:mb-4"
              />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                <span className="font-bankgothic font-medium text-white">RJ C</span>
                <span className='font-bankgothic font-medium text-white text-lg sm:text-xl lg:text-2xl'>REATION</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xs mx-auto sm:mx-0">
              A Re-defined Solution for CNC Machining. We deliver precision-engineered components with advanced technology and a skilled workforce.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <li>
                <a 
                  href="/services" 
                  className="hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/infrastructure" 
                  className="hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className="hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Contact
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              
              {/* Phone Numbers */}
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <FaPhoneAlt className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-center sm:text-left">
                  <a 
                    href="tel:+918029539565" 
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    +91-80-29539565
                  </a>
                  <a 
                    href="tel:+918023254965" 
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    +91-80-23254965
                  </a>
                </div>
              </li>
              
              {/* Email */}
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0 mt-1" />
                <a 
                  href="mailto:sales@rjcreation.co.in" 
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  sales@rjcreation.co.in
                </a>
              </li>
              
              {/* Address */}
              <li className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                <FaMapMarkerAlt className="text-blue-400 flex-shrink-0 mt-1 text-lg" />
                <address className="not-italic text-center sm:text-left leading-relaxed">
                  <span className="font-bankgothic font-medium text-white text-base sm:text-lg lg:text-xl">RJ C</span>
                  <span className='font-bankgothic text-white text-sm sm:text-base lg:text-lg'>REATION</span>
                  <br />
                  No 31 Wimac Junction,<br />
                  Kammagondanahalli,<br />
                  Abbigere main road,<br />
                  Bangalore 560015,<br />
                  Karnataka, INDIA
                </address>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Follow Us
            </h3>
            <div className="flex justify-center sm:justify-start gap-4 sm:gap-6">
              <a 
                href="https://www.linkedin.com/company/rjcreation/" 
                target='_blank' 
                rel="noopener noreferrer" 
                className="text-2xl sm:text-3xl lg:text-4xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin />
              </a>
              {/* Add more social media icons here if needed */}
            </div>
            
            {/* Optional: Additional contact info or CTA */}
            {/* <div className="mt-4 sm:mt-6 lg:mt-8">
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">
                Get in touch for quotes and inquiries
              </p>
              <a 
                href="#contact" 
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div> */}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-blue-800 mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6">
          
          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            
            {/* Copyright */}
            <div className="text-center sm:text-left text-xs sm:text-sm text-gray-400 order-2 sm:order-1">
              &copy; {new Date().getFullYear()} 
              <span className="font-bankgothic font-medium text-base sm:text-lg text-white mx-1">RJ C</span>
              <span className='font-bankgothic text-white text-sm sm:text-base'>REATION</span>. 
              All rights reserved.
            </div>
            
            {/* Additional Links
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 order-1 sm:order-2">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="/sitemap" className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;