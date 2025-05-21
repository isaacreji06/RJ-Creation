import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from "../assets/Logo.png"
function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
            <img src={logo} alt="" />
          <h2 className="text-2xl font-bold mb-4">RJ Creation</h2>
          <p className="text-gray-300 text-sm">
            A Re-defined Solution for CNC Machining. We deliver precision-engineered components with advanced technology and a skilled workforce.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#infrastructure" className="hover:text-white">Infrastructure</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91-80-29539565, +91-80-23254965</li>
            <li className="flex items-center gap-2"><FaEnvelope /> sales@rjcreation.co.in</li>
            <li className="flex items-start gap-2"><FaMapMarkerAlt size={32} /> 
              <span>RJ CREATION, No 31 Wimac Junction, Kammagondanahalli, Abbigere main road, Bangalore 560015, Karnataka, INDIA</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.linkedin.com/company/rjcreation/" target='_blank' rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
          </div>
        </div>

      </div>
      <div className="text-center text-sm text-gray-400 mt-12">
        &copy; {new Date().getFullYear()} RJ Creation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
