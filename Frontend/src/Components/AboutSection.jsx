import React from 'react';
import teamImage from "../assets/teamImage.png";

function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 font-orbitron">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
            ABOUT US
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12">
          
          {/* Image and Stats Section */}
          <div className="w-full lg:w-2/5 max-w-md lg:max-w-none">
            {/* Team Image */}
            <div className="relative mb-6">
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-full h-full border-2 border-red-600 rounded-lg"></div>
              <img 
                src={teamImage} 
                alt="RJ Creation Team" 
                className="w-full rounded-lg shadow-md relative z-10 object-cover"
              />
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600">15+</h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">Years Experience</p>
              </div>
              <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600">15k</h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">Sq. Ft. Facility</p>
              </div>
              <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600">3+</h3>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">Industry Sectors</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-3/5 mt-6 lg:mt-0">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left leading-tight">
              A RE-DEFINED SOLUTION FOR CNC MACHINING
            </h3>
            
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Introduction */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-left">
                <span className="font-bankgothic font-medium text-red-600 text-xl sm:text-2xl lg:text-3xl">RJ C</span>
                <span className='font-bankgothic text-red-600 text-lg sm:text-xl lg:text-2xl'>REATION</span> was established in 2015 in Bangalore, focusing on precision components for Defense, Aerospace, Medical, and Microwave sectors.
              </p>
              
              {/* Experience */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-left">
                With 14 years of field experience before rebranding as{' '}
                <span className="font-bankgothic font-medium text-red-600 text-xl sm:text-2xl lg:text-3xl">RJ C</span>
                <span className='font-bankgothic text-red-600 text-lg sm:text-xl lg:text-2xl'>REATION</span>, we've built a comprehensive manufacturing ecosystem featuring:
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 py-2">
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">State-of-the-art CNC machines</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Advanced quality control</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Experienced technical staff</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Trusted supply chain network</span>
                </div>
              </div>
              
              {/* Closing Statement */}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg text-center lg:text-left">
                We deliver high-quality products with competitive pricing and minimum turnaround time through our turnkey project management approach.
              </p>
              
              {/* CTA Button */}
              <div className="pt-2 sm:pt-4 text-center lg:text-left">
                <a 
                  href="/about" 
                  className="inline-block px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 text-sm sm:text-base lg:text-lg transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  KNOW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;