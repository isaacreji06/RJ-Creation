import React from 'react';
import { FaEye, FaRocket } from 'react-icons/fa';
import makeInIndiaImage from "../assets/makeInIndiaImage.png"

function VisionsMissionsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-100 text-center font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
            Mission & Vision
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-12">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <div className="flex justify-center items-center mb-4 sm:mb-6 text-red-600 text-3xl sm:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
              <FaEye />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Vision
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              To be a world leader in the field of CNC Machining and evolve state of the art approaches to precision components and sub-assemblies through innovations and R&D.
            </p>
          </div>
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <div className="flex justify-center items-center mb-4 sm:mb-6 text-blue-600 text-3xl sm:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
              <FaRocket />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Mission
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              <li>To provide quality products and services to our customers, ensuring their satisfaction and trust in our capabilities.
              </li>
              <li>
                  We aim to achieve this through continuous innovation, skilled workforce, and adherence to the highest standards of quality and excellence.
                </li>
              
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl w-full group">
            <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
              <img 
                src={makeInIndiaImage} 
                alt="Make in India Logo" 
                className="mx-auto w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
              Make In India
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              We are proud to be associated with the{' '}
              <span className="font-semibold text-orange-600">"Make in India"</span>{' '}
              campaign, contributing to India's manufacturing excellence and self-reliance!
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionsMissionsSection;