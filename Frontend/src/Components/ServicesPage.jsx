import React, { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import aerospace from "../assets/Aerospace.png"

const services = [
  {
    title: "CNC Machining",
    brief: "High precision CNC turning and milling services.",
    content: {
      image: aerospace,
      overview:
        "At RJ Creation, CNC machining is at the heart of our operations. With over 15 years of expertise, we deliver high-precision parts across industries.",
      features: [
        "Tolerance: ±10 microns",
        "3- & 4-axis machining",
        "Materials: Aluminum, Brass, SS, MS, Polymers",
        "CMM-inspected parts"
      ],
      industries: ["Aerospace", "Medical", "Defense"],
      contact: {
        phone: "+91-12345678",
        email: "contact@rjcreation.com"
      }
    }
  },
  {
    title: "Pre-Process",
    brief: "Material preparation and component planning before production.",
    content: {
      image: aerospace,
      overview:
        "Our pre-processing stage ensures all raw materials and designs are fully validated before machining.",
      features: [
        "Material selection guidance",
        "Initial 3D CAD modeling",
        "Prototype feasibility analysis"
      ],
      industries: ["Automotive", "Electronics"],
      contact: {
        phone: "+91-12345678",
        email: "contact@rjcreation.com"
      }
    }
  }
  // Add more services here
];

export default function ServicesPage() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Services
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-4">
            Discover our comprehensive range of precision manufacturing services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveModal(service)}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110" 
                  src={service.content.image} 
                  alt={service.title}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">
                {service.brief}
              </p>
              <div className="text-blue-600 flex items-center justify-end group-hover:text-blue-700 transition-colors">
                <span className="mr-2 font-medium text-sm sm:text-base">Learn More</span>
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white w-full max-w-xs sm:max-w-lg lg:max-w-2xl xl:max-w-3xl rounded-xl shadow-lg relative max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-8">
                  {activeModal.title}
                </h2>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto flex-1 p-4 sm:p-6">
                {/* Image */}
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={activeModal.content.image} 
                    alt={activeModal.title} 
                    className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Overview */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {activeModal.content.overview}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModal.content.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">
                    Industries Served:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModal.content.industries.map((industry, k) => (
                      <span 
                        key={k} 
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">
                    Contact Information:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-sm sm:text-base font-medium text-gray-600 sm:w-16">Phone:</span>
                      <a 
                        href={`tel:${activeModal.content.contact.phone}`}
                        className="text-sm sm:text-base text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {activeModal.content.contact.phone}
                      </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-sm sm:text-base font-medium text-gray-600 sm:w-16">Email:</span>
                      <a 
                        href={`mailto:${activeModal.content.contact.email}`}
                        className="text-sm sm:text-base text-blue-600 hover:text-blue-700 transition-colors break-all"
                      >
                        {activeModal.content.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}