import heroSectionVideo from "../assets/heroSectionVideo.mp4"
import aerospaceImage from "../assets/Aerospace.png"
import medicalImage from "../assets/MedicalImage.png"
import RFImage from "../assets/RFImage.png"
import infrastructureImage from "../assets/infrastructureImage.png"
import React, { useState } from 'react';

function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="relative h-screen w-full overflow-hidden font-orbitron">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroSectionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 tracking-wide">
            <span className="font-bankgothic font-medium">RJ C</span>
            <span className="font-bankgothic font-medium">reation</span> 
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 px-2">
            A Redefined Solution for CNC Machining
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Explore Our Work
          </button>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] overflow-auto">
            <div className="flex justify-end p-2 sm:p-4 sticky top-0 bg-white z-10">
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-700 hover:text-red-600 text-2xl sm:text-3xl font-bold p-1"
              >
                ×
              </button>
            </div>
            <div className="p-3 sm:p-4 lg:p-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 px-2">
                Our Products and Services
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div className="flex flex-col bg-gray-700 text-white overflow-hidden rounded-lg">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={aerospaceImage} 
                      alt="Aerospace & Defence Components" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 leading-tight">
                      AEROSPACE & DEFENCE COMPONENTS
                    </h3>
                    <button className="border border-white text-white py-2 px-3 sm:px-4 text-sm sm:text-base w-28 sm:w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col bg-blue-800 text-white overflow-hidden rounded-lg">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={medicalImage} 
                      alt="Medical Components" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 leading-tight">
                      MEDICAL COMPONENTS
                    </h3>
                    <button className="border border-white text-white py-2 px-3 sm:px-4 text-sm sm:text-base w-28 sm:w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col bg-red-600 text-white overflow-hidden rounded-lg">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={RFImage} 
                      alt="RF Components" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 leading-tight">
                      RF COMPONENTS
                    </h3>
                    <button className="border border-white text-white py-2 px-3 sm:px-4 text-sm sm:text-base w-28 sm:w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col bg-violet-600 text-white overflow-hidden rounded-lg">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={infrastructureImage} 
                      alt="Infrastructure" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-between min-h-[120px] sm:min-h-[140px]">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 leading-tight">
                      INFRASTRUCTURE
                    </h3>
                    <button className="border border-white text-white py-2 px-3 sm:px-4 text-sm sm:text-base w-28 sm:w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;