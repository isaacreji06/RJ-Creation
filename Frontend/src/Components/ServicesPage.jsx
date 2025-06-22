import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import RF1 from "../assets/RF/RF1.JPG";
import Aerospace1 from "../assets/Aerospace and Defence/Aerospace1.jpg";
import Aerospace2 from "../assets/Aerospace and Defence/Aerospace2.jpg";
import Aerospace3 from "../assets/Aerospace and Defence/Aerospace3.jpg";
import Aerospace4 from "../assets/Aerospace and Defence/Aerospace4.jpg";
import Aerospace5 from "../assets/Aerospace and Defence/Aerospace5.jpg";
import medical from "../assets/Medical/Medical1.jpg";
import medical2 from "../assets/Medical/Medical2.jpg";
import medical3 from "../assets/Medical/Medical3.jpg";
import medical4 from "../assets/Medical/Medical4.jpg";

const services = [
  {
    title: "CNC Machining",
    image1: Aerospace1,
    image2: RF1,
    brief: "High precision CNC turning and milling services.",
    content: {
      overview:
        "At RJ Creation, CNC machining is at the heart of our operations. With over 15 years of expertise, we deliver high-precision parts across industries.",
      features: [
        "Tolerance: ±10 microns",
        "3- & 4-axis machining",
        "Materials: Aluminum, Brass, SS, MS, Polymers",
        "CMM-inspected parts"
      ],
      industries: ["Aerospace", "Medical", "Defense"],
      details: [
        "CNC Vertical Machining Centers with 3-axis and 4-axis capabilities",
        "High-precision turning operations for complex geometries",
        "Advanced tooling systems for optimal surface finish",
        "Real-time quality monitoring and inspection"
      ]
    }
  },
  {
    title: "Pre-Process",
    image1: medical,
    image2: medical2,
    brief: "Material preparation and component planning before production.",
    content: {
      overview:
        "Our pre-processing stage ensures all raw materials and designs are fully validated before machining begins.",
      features: [
        "Material selection guidance",
        "Initial 3D CAD modeling",
        "Prototype feasibility analysis",
        "Design optimization"
      ],
      industries: ["Aerospace", "Medical", "Defense"],
      details: [
        "Material testing and certification verification",
        "CAD/CAM programming and simulation",
        "Toolpath optimization for efficiency",
        "First article inspection planning"
      ]
    }
  },
  {
    title: "Post-Process",
    image1: Aerospace2,
    image2: Aerospace3,
    brief: "Finishing operations and quality assurance for completed parts.",
    content: {
      overview:
        "Our post-processing operations ensure every component meets exact specifications and quality standards.",
      features: [
        "Surface finishing treatments",
        "Dimensional inspection",
        "Assembly preparation",
        "Quality documentation"
      ],
      industries: ["Aerospace", "Medical", "Defense"],
      details: [
        "Precision deburring and surface treatments",
        "CMM inspection and measurement reports",
        "Heat treatment and coating services",
        "Final packaging and delivery preparation"
      ]
    }
  },
  {
    title: "Sub-Assemblies",
    image1: Aerospace4,
    image2: Aerospace5,
    brief: "Complete assembly services for complex multi-component systems.",
    content: {
      overview:
        "We provide comprehensive sub-assembly services, combining multiple precision components into ready-to-use assemblies.",
      features: [
        "Multi-component integration",
        "Precision fitting and alignment",
        "Functional testing",
        "Documentation and traceability"
      ],
      industries: ["Aerospace", "Medical", "Defense"],
      details: [
        "Clean room assembly capabilities",
        "Torque specification compliance",
        "Leak testing and performance validation",
        "Complete assembly documentation"
      ]
    }
  },
  {
    title: "Sheet Metal Solutions",
    image1: medical3,
    image2: medical4,
    brief: "Comprehensive sheet metal fabrication and forming services.",
    content: {
      overview:
        "Our sheet metal division delivers precision formed components using advanced fabrication techniques.",
      features: [
        "Laser cutting precision",
        "Press brake forming",
        "Welding and joining",
        "Powder coating finish"
      ],
      industries: ["Aerospace", "Medical", "Defense"],
      details: [
        "Fiber laser cutting with minimal heat-affected zone",
        "CNC press brake with precision back-gauge systems",
        "TIG and MIG welding capabilities",
        "Custom enclosures and brackets"
      ]
    }
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-100 font-serif">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative px-4 sm:px-6 py-20 sm:py-24 lg:py-32 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-200">
              Manufacturing
              <span className="block text-red-200">Excellence</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
              State-of-the-art machinery, precision quality testing, and expert team delivering exceptional manufacturing solutions with cutting-edge technology.
            </p>
            <div className="flex items-center justify-center mt-10">
              <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto border-b">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-4 sm:px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                  activeTab === index
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">
            {services[activeTab].title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            {services[activeTab].content.overview}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div
            className="relative rounded-xl shadow-md p-6 sm:p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${services[activeTab].image1})` }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-xl backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-5">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-semibold">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  Key Capabilities
                </h3>
              </div>
              <p className="text-black mb-4 text-sm sm:text-base">
                {services[activeTab].brief}
              </p>
              <ul className="space-y-3">
                {services[activeTab].content.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span className="text-black text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="relative rounded-xl shadow-md p-6 sm:p-8 bg-cover bg-center"
            style={{ backgroundImage: `url(${services[activeTab].image2})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-5">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-semibold">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Technical Specifications
                </h3>
              </div>
              <p className="text-white mb-4 text-sm sm:text-base">
                Advanced technical capabilities and equipment specifications.
              </p>
              <ul className="space-y-3">
                {services[activeTab].content.details.map((detail, i) => (
                  <li key={i} className="flex text-white items-start">
                    <span className="text-white mr-2 mt-1">•</span>
                    <span className="text-white text-sm sm:text-base">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-6">
            Industries Served
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {services[activeTab].content.industries.map((industry, k) => (
              <span
                key={k}
                className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium shadow-md"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
