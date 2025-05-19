import React from 'react';
import teamImage2 from "../assets/teamImage2.png"

function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">ABOUT US</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 bg-blue-50 rounded-lg"></div>
              <img 
                src={teamImage2} 
                alt="RJ Creation Team" 
                className="w-full rounded-lg shadow-lg relative z-10"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">15+</h3>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                <p className="text-gray-700">Projects Delivered</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600">3</h3>
                <p className="text-gray-700">Industry Sectors</p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              RJ CREATION: A RE-DEFINED SOLUTION FOR CNC MACHINING
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-600">RJ CREATION</span> was established in the year 2015 at Bangalore, keeping in mind the vast opportunities in precision components for Defense and Aerospace, Medical and Microwave sectors.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We were in this field for 14 years and in 2015 we rebadged ourself as <span className="font-semibold text-blue-600">RJ CREATION</span> with improved facilities and capabilities:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>15,000 sq. feet modern manufacturing facility</li>
                <li>State-of-the-art CNC machines and equipment</li>
                <li>Advanced instruments for rigorous quality checks</li>
                <li>Expert staff with years of industry experience</li>
                <li>Network of trusted local partners</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                We provide comprehensive, full turnkey project management for successful finished precision parts and sub-Assemblies. With all the best put together, we can achieve high quality products at a minimum time with a competitive price.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#services" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-all duration-300"
                >
                  KNOW OUR SERVICES
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;