// import React from "react";
// import infraImg from "../assets/infrastructureImage.png"; // Replace with your actual image path

// export default function Infrastructure() {
//   return (
//     <section className="py-20 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">Infrastructure</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Machinery</h3>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               <span className="font-bold">Machinery:</span> TAL Vertimach V-400 (VMC), TAL Vertimach V-350 (VMC),
//               Eumach MC-500P (VMC), 2 nos. of Jyoti RDX 20 (VMC), Mida 6 Turning Centre (Turning),
//               Ace Turning Centre J 300 Lm (Turning).
//             </p>
//             <h4 className="text-xl font-semibold text-gray-800 mb-2">Other Machinery</h4>
//             <p className="text-gray-700 leading-relaxed">
//               Table top drilling machine, Table top tapping machine, CNC Servo Controlled Tapping machine,
//               Bench grinder, 2 nos. of Air Compressor, Fly Press Machine, Power Haxo Cutting Machine.
//             </p>
//           </div>

//           <div className="rounded-xl overflow-hidden shadow-md">
//             <img
//               src={infraImg}
//               alt="CNC Machines"
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import { ChevronDown, Settings, Users, TestTube, ArrowRight, Check } from 'lucide-react';

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState('machinery');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    { id: 'machinery', label: 'Machinery', icon: Settings },
    { id: 'quality', label: 'Quality Testing', icon: TestTube },
  ];

  const machineryData = {
    primary: [
      "TAL Vertimach V-600 (VMC), TAL Vertimach V-650 (VMC), Eumach MC-500P (VMC)",
      "2 nos. of Hyun RDX 20 (VMC), Mida 6 Turning Centre (Turning), Ace Turning Centre i-300 Lm (Turning)"
    ],
    secondary: [
      "Table top drilling machine, Table top tapping machine",
      "CNC Servo Controlled Tapping machine, Bench grinder",
      "2 nos of Air Compressor, Fly Press Machine, Power Hack Cutting Machine"
    ]
  };

  const qualityFeatures = [
    "CNC CMM with precision measurement capabilities",
    "Digital Vernier Height Gauges and Vernier Calipers",
    "Team of 16 experienced technicians and machinists",
    "Advanced quality control processes",
    "Professional service standards for clients"
  ];

  const machineImages = [
    { 
      id: 1, 
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f8fafc'/%3E%3Crect x='50' y='50' width='120' height='200' fill='%23e2e8f0' stroke='%23cbd5e1' stroke-width='2'/%3E%3Crect x='230' y='50' width='120' height='200' fill='%23e2e8f0' stroke='%23cbd5e1' stroke-width='2'/%3E%3Ctext x='110' y='160' text-anchor='middle' fill='%23475569' font-size='12'%3EVMC 1%3C/text%3E%3Ctext x='290' y='160' text-anchor='middle' fill='%23475569' font-size='12'%3EVMC 2%3C/text%3E%3C/svg%3E",
      alt: "CNC VMC Machines",
      title: "CNC VMC Production Line"
    }
  ];

  const qualityImages = [
    {
      id: 1,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0fdf4'/%3E%3Crect x='20' y='20' width='80' height='60' fill='%23dcfce7' stroke='%23bbf7d0'/%3E%3Crect x='120' y='20' width='80' height='60' fill='%23dcfce7' stroke='%23bbf7d0'/%3E%3Ctext x='60' y='55' text-anchor='middle' fill='%23166534' font-size='10'%3EQuality%3C/text%3E%3Ctext x='160' y='55' text-anchor='middle' fill='%23166534' font-size='10'%3ETesting%3C/text%3E%3C/svg%3E",
      alt: "Quality Control Room",
      title: "Quality Control Operations"
    },
    {
      id: 2,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f9ff'/%3E%3Crect x='20' y='40' width='260' height='120' fill='%23e0f2fe' stroke='%23bae6fd'/%3E%3Crect x='40' y='60' width='60' height='40' fill='%230284c7'/%3E%3Crect x='120' y='60' width='60' height='40' fill='%230284c7'/%3E%3Crect x='200' y='60' width='60' height='40' fill='%230284c7'/%3E%3Ctext x='150' y='130' text-anchor='middle' fill='%230c4a6e' font-size='12'%3EMeasurement Tools%3C/text%3E%3C/svg%3E",
      alt: "Precision Measurement Tools",
      title: "Precision Measurement Equipment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl lg:text-7xl">
              Infrastructure
              <span className="block text-red-200 bg-clip-text">
                Excellence
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              State-of-the-art machinery, precision quality testing, and expert team delivering 
              exceptional manufacturing solutions with cutting-edge technology.
            </p>
            <div className="flex items-center justify-center mt-10">
              <ChevronDown className="w-8 h-8 text-gray animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        {/* Machinery Section */}
        {activeTab === 'machinery' && (
          <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Advanced Manufacturing Equipment
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive machinery lineup ensures precision, efficiency, and reliability 
                in every manufacturing process.
              </p>
            </div>

            {/* Machinery Image */}
            <div className="relative group">
              <div className="aspect-video bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={machineImages[0].src}
                  alt={machineImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{machineImages[0].title}</h3>
                  <p className="text-blue-200">High-precision CNC manufacturing center</p>
                </div>
              </div>
            </div>

            {/* Machinery Specifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Primary Machinery</h3>
                </div>
                <div className="space-y-4">
                  {machineryData.primary.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Supporting Equipment</h3>
                </div>
                <div className="space-y-4">
                  {machineryData.secondary.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quality Testing Section */}
        {activeTab === 'quality' && (
          <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Precision Quality Control
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our quality control room is equipped with advanced measurement tools and 
                operated by experienced professionals to ensure exceptional standards.
              </p>
            </div>

            {/* Quality Images Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {qualityImages.map((image) => (
                <div key={image.id} className="relative group cursor-pointer" onClick={() => setSelectedImage(image)}>
                  <div className="aspect-video bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Features */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quality Assurance Features</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Process Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Quality Control Process</h3>
              <p className="text-gray-700 leading-relaxed">
                The Quality control room is equipped with CNC CMM, Micrometers, Digital Vernier Height Gauges and Vernier Calipers. 
                The Operations which is executed by a team of 16 experienced technicians and machinists ensure more efficient, 
                effective and professional service for clients.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}