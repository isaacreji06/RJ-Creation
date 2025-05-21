import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
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
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveModal(service)}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img className="rounded-2xl" src={service.content.image} alt={service.title} /> {/* Added alt for accessibility */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.brief}</p>
              <div className="text-blue-600 flex items-center justify-end">
                <span className="mr-2 font-medium">Learn More</span>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        {activeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"> {/* Added p-4 for modal padding on small screens */}
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-y-auto"> {/* Added max-h and overflow-y-auto */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
              >
                &times;
              </button>
              <img src={activeModal.content.image} alt={activeModal.title} className="w-full h-auto rounded-lg mb-4 object-cover" /> {/* Adjusted image classes */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {activeModal.title}
              </h2>
              <p className="text-gray-700 mb-4">{activeModal.content.overview}</p>

              <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                {activeModal.content.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-gray-800 mb-2">Industries Served:</h4>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                {activeModal.content.industries.map((i, k) => (
                  <li key={k}>{i}</li>
                ))}
              </ul>

              <div className="mt-4 text-gray-700">
                <p>
                  <strong>Phone:</strong> {activeModal.content.contact.phone}
                </p>
                <p>
                  <strong>Email:</strong> {activeModal.content.contact.email}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}