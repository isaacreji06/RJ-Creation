// import React, { useState } from "react";
// import { FaArrowRight, FaTimes } from "react-icons/fa";
// import aerospace from "../assets/Aerospace.png"

// const services = [
//   {
//     title: "CNC Machining",
//     brief: "High precision CNC turning and milling services.",
//     content: {
//       image: aerospace,
//       overview:
//         "At RJ Creation, CNC machining is at the heart of our operations. With over 15 years of expertise, we deliver high-precision parts across industries.",
//       features: [
//         "Tolerance: ±10 microns",
//         "3- & 4-axis machining",
//         "Materials: Aluminum, Brass, SS, MS, Polymers",
//         "CMM-inspected parts"
//       ],
//       industries: ["Aerospace", "Medical", "Defense"],
//     }
//   },
//   {
//     title: "Pre-Process",
//     brief: "Material preparation and component planning before production.",
//     content: {
//       image: aerospace,
//       overview:
//         "Our pre-processing stage ensures all raw materials and designs are fully validated before machining.",
//       features: [
//         "Material selection guidance",
//         "Initial 3D CAD modeling",
//         "Prototype feasibility analysis"
//       ],
//       industries: ["Automotive", "Electronics"],
//     }
//   },
//   {
//     title: "Post-Process",
//     brief: "Material preparation and component planning before production.",
//     content: {
//       image: aerospace,
//       overview:
//         "Our pre-processing stage ensures all raw materials and designs are fully validated before machining.",
//       features: [
//         "Material selection guidance",
//         "Initial 3D CAD modeling",
//         "Prototype feasibility analysis"
//       ],
//       industries: ["Automotive", "Electronics"],
//     }
//   },
//   {
//     title: "Sub-Assemblies",
//     brief: "Material preparation and component planning before production.",
//     content: {
//       image: aerospace,
//       overview:
//         "Our pre-processing stage ensures all raw materials and designs are fully validated before machining.",
//       features: [
//         "Material selection guidance",
//         "Initial 3D CAD modeling",
//         "Prototype feasibility analysis"
//       ],
//       industries: ["Automotive", "Electronics"],
//     }
//   },
//   {
//     title: "Sheet Metal Solutions",
//     brief: "Material preparation and component planning before production.",
//     content: {
//       image: aerospace,
//       overview:
//         "Our pre-processing stage ensures all raw materials and designs are fully validated before machining.",
//       features: [
//         "Material selection guidance",
//         "Initial 3D CAD modeling",
//         "Prototype feasibility analysis"
//       ],
//       industries: ["Automotive", "Electronics"],
//     }
//   },
// ];

// export default function ServicesPage() {
//   const [activeModal, setActiveModal] = useState(null);

//   return (
//     <section className="py-10 sm:py-16 lg:py-20 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
//             Our Services
//           </h2>
//           <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
//           <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-4">
//             Discover our comprehensive range of precision manufacturing services
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveModal(service)}
//               className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
//             >
//               <div className="mb-4 overflow-hidden rounded-lg">
//                 <img 
//                   className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110" 
//                   src={service.content.image} 
//                   alt={service.title}
//                 />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">
//                 {service.brief}
//               </p>
//               <div className="text-blue-600 flex items-center justify-end group-hover:text-blue-700 transition-colors">
//                 <span className="mr-2 font-medium text-sm sm:text-base">Learn More</span>
//                 <FaArrowRight className="transition-transform group-hover:translate-x-1" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {activeModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
//             <div className="bg-white w-full max-w-xs sm:max-w-lg lg:max-w-2xl xl:max-w-3xl rounded-xl shadow-lg relative max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
//               {/* Modal Header */}
//               <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
//                 <h2 className="text-xl sm:text-2xl font-bold text-gray-800 pr-8">
//                   {activeModal.title}
//                 </h2>
//                 <button
//                   onClick={() => setActiveModal(null)}
//                   className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
//                   aria-label="Close modal"
//                 >
//                   <FaTimes size={20} />
//                 </button>
//               </div>

//               {/* Modal Content - Scrollable */}
//               <div className="overflow-y-auto flex-1 p-4 sm:p-6">
//                 {/* Image */}
//                 <div className="mb-4 sm:mb-6">
//                   <img 
//                     src={activeModal.content.image} 
//                     alt={activeModal.title} 
//                     className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-lg shadow-md"
//                   />
//                 </div>

//                 {/* Overview */}
//                 <div className="mb-4 sm:mb-6">
//                   <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
//                     {activeModal.content.overview}
//                   </p>
//                 </div>

//                 {/* Features */}
//                 <div className="mb-4 sm:mb-6">
//                   <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">
//                     Key Features:
//                   </h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {activeModal.content.features.map((feature, i) => (
//                       <div key={i} className="flex items-start">
//                         <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm sm:text-base text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Industries */}
//                 <div className="mb-4 sm:mb-6">
//                   <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg">
//                     Industries Served:
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {activeModal.content.industries.map((industry, k) => (
//                       <span 
//                         key={k} 
//                         className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//                       >
//                         {industry}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    title: "CNC Machining",
    brief: "High precision CNC turning and milling services.",
    content: {
      overview: "At RJ Creation, CNC machining is at the heart of our operations. With over 15 years of expertise, we deliver high-precision parts across industries.",
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
    brief: "Material preparation and component planning before production.",
    content: {
      overview: "Our pre-processing stage ensures all raw materials and designs are fully validated before machining begins.",
      features: [
        "Material selection guidance",
        "Initial 3D CAD modeling", 
        "Prototype feasibility analysis",
        "Design optimization"
      ],
      industries: ["Automotive", "Electronics", "Industrial"],
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
    brief: "Finishing operations and quality assurance for completed parts.",
    content: {
      overview: "Our post-processing operations ensure every component meets exact specifications and quality standards.",
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
    brief: "Complete assembly services for complex multi-component systems.",
    content: {
      overview: "We provide comprehensive sub-assembly services, combining multiple precision components into ready-to-use assemblies.",
      features: [
        "Multi-component integration",
        "Precision fitting and alignment",
        "Functional testing",
        "Documentation and traceability"
      ],
      industries: ["Automotive", "Industrial", "Electronics"],
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
    brief: "Comprehensive sheet metal fabrication and forming services.",
    content: {
      overview: "Our sheet metal division delivers precision formed components using advanced fabrication techniques.",
      features: [
        "Laser cutting precision",
        "Press brake forming",
        "Welding and joining",
        "Powder coating finish"
      ],
      industries: ["Construction", "HVAC", "Electronics"],
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
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

      {/* Tabs */}
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 sm:py-12">
        {/* Overview */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">
            {services[activeTab].title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            {services[activeTab].content.overview}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Key Capabilities */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <div className="flex items-center mb-5">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Key Capabilities</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{services[activeTab].brief}</p>
            <ul className="space-y-3">
              {services[activeTab].content.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <div className="flex items-center mb-5">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-red-600 font-semibold">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Technical Specifications</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Advanced technical capabilities and equipment specifications.
            </p>
            <ul className="space-y-3">
              {services[activeTab].content.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-6">Industries Served</h3>
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