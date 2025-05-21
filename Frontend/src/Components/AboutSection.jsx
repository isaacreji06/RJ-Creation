import React from 'react';
import teamImage from "../assets/teamImage.png";

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 font-orbitron">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">ABOUT US</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-red-600 rounded-lg"></div>
              <img 
                src={teamImage} 
                alt="RJ Creation Team" 
                className="w-full rounded-lg shadow-md relative z-10"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <h3 className="text-2xl font-bold text-red-600">15+</h3>
                <p className="text-gray-700 text-sm">Years Experience</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <h3 className="text-2xl font-bold text-red-600">15k</h3>
                <p className="text-gray-700 text-sm">Sq. Ft. Facility</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <h3 className="text-2xl font-bold text-red-600">3+</h3>
                <p className="text-gray-700 text-sm">Industry Sectors</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 mt-8 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              A RE-DEFINED SOLUTION FOR CNC MACHINING
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bankgothic font-medium text-red-600 text-2xl">RJ C</span><span className='font-bankgothic text-red-600'>REATION</span> was established in 2015 in Bangalore, focusing on precision components for Defense, Aerospace, Medical, and Microwave sectors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With 14 years of field experience before rebranding as <span className="font-bankgothic font-medium text-red-600 text-2xl">RJ C</span><span className='font-bankgothic text-red-600'>REATION</span>, we've built a comprehensive manufacturing ecosystem featuring:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">State-of-the-art CNC machines</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">Advanced quality control</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">Experienced technical staff</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                  <span className="text-gray-700">Trusted supply chain network</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                We deliver high-quality products with competitive pricing and minimum turnaround time through our turnkey project management approach.
              </p>
              
              <div className="pt-2">
                <a 
                  href="/about" 
                  className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300"
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