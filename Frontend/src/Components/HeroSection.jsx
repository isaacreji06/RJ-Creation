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
        <div className="text-center text-white px-4">
          <h1 className="text-7xl md:text-8xl font-extrabold mb-4 tracking-wide">
            < span className="font-bankgothic font-medium text-8xl">RJ C</span><span className="font-bankgothic font-medium">reation</span> 
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            A Redefined Solution for CNC Machining
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            Explore Our Work
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-auto">
            <div className="flex justify-end p-2">
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-700 hover:text-red-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold text-center mb-6">Our Products and Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col bg-gray-700 text-white overflow-hidden rounded-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={aerospaceImage} 
                      alt="Aerospace & Defence Components" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-40">
                    <h3 className="text-xl font-semibold mb-4">AEROSPACE & DEFENCE COMPONENTS</h3>
                    <button className="border border-white text-white py-2 px-4 w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col bg-blue-800 text-white overflow-hidden rounded-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={medicalImage} 
                      alt="Medical Components" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-40">
                    <h3 className="text-xl font-semibold mb-4">MEDICAL COMPONENTS</h3>
                    <button className="border border-white text-white py-2 px-4 w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col bg-red-600 text-white overflow-hidden rounded-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={RFImage} 
                      alt="RF Components" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-40">
                    <h3 className="text-xl font-semibold mb-4">RF COMPONENTS</h3>
                    <button className="border border-white text-white py-2 px-4 w-36 hover:bg-white hover:text-gray-900 transition-all">
                      KNOW MORE
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col bg-violet-600 text-white overflow-hidden rounded-lg">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={infrastructureImage} 
                      alt="Infrastructure" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-40">
                    <h3 className="text-xl font-semibold mb-4">INFRASTRUCTURE</h3>
                    <button className="border border-white text-white py-2 px-4 w-36 hover:bg-white hover:text-gray-900 transition-all">
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
