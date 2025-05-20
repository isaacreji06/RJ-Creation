import React from 'react';
import { FaEye, FaRocket } from 'react-icons/fa';
import makeInIndiaImage from "../assets/makeInIndiaImage.png"

function VisionsMissionsSection() {
  return (
    <section className="py-16 bg-gray-100 text-center font-orbitron">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center items-center mb-4 text-red-600 text-4xl">
              <FaEye />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              "The idea of <span className='text-3xl font-bold text-red-600 '>Best</span> is directly related to continuous improvement, so we in the field of precision components and sub-assemblies endeavour to be the <span className='text-3xl font-bold text-red-600 '>Best</span> adopting continuous improvement.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center items-center mb-4 text-blue-600 text-4xl">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              "Our mission is to provide the <span className='text-3xl font-bold text-red-600 '>Best</span> products for our clients, <span className='text-3xl font-bold text-red-600 '>Best</span> means economically manufactured parts at lowest time with <span className='text-3xl font-bold text-red-600 '>Highest Quality</span>."            </p>
          </div>
          <div className="md:col-span-2 flex justify-center"> 
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 max-w-lg w-full"> 
              <img src={makeInIndiaImage} alt="Make in India" className="mx-auto" /> 
              <h3 className="text-2xl font-semibold mb-3">Make In India</h3>
              <p className="text-gray-700 leading-relaxed">
                We are proud to be associated with the "Make in India" campaign!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionsMissionsSection;