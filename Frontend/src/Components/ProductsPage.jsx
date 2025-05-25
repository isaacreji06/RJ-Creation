// import React, { useState } from 'react';
// import { PackageCheck, ShieldCheck, Car, Cpu, Factory, Anchor, Zap, Wifi, Wrench, ArrowRight,ChevronDown } from 'lucide-react';

// export default function ProductsPage() {
//   const [activeTab, setActiveTab] = useState('aerospace-defense');

//   const categories = [
//     { id: 'aerospace-defense', label: 'Aerospace & Defense', icon: ShieldCheck },
//     { id: 'medical', label: 'Medical Components', icon: PackageCheck },
//     { id: 'rf', label: 'Radio Frequency', icon: Wifi },
//   ];

//   const productData = {
//     'aerospace-defense': {
//       title: 'Aerospace & Defense Components',
//       description: 'Precision-engineered components for aerospace and defense applications.',
//       image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
//       items: ['Engine Components', 'Flight Control Systems', 'Navigation Equipment', 'Defense Electronics']
//     },
//     medical: {
//       title: 'Medical Components',
//       description: 'High-quality medical device components and surgical instruments.',
//       image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
//       items: ['Surgical Instruments', 'Implant Components', 'Diagnostic Equipment', 'Medical Housings']
//     },
//   };

//   const activeData = productData[activeTab];

//   return (
//     <div className="min-h-screen bg-gray-50">
//        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl lg:text-7xl">
//               Our Products and Services
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
//               Discover our comprehensive range of precision-engineered components across multiple industries.
//             </p>
//             <div className="flex items-center justify-center mt-10">
//               <ChevronDown className="w-8 h-8 text-gray animate-bounce" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-12">
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {categories.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveTab(id)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors font-medium text-sm ${
//                 activeTab === id
//                   ? 'bg-blue-600 text-white border-blue-600'
//                   : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//               }`}
//             >
//               <Icon className="w-4 h-4" />
//               {label}
//             </button>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <img
//             src={activeData.image}
//             alt={activeData.title}
//             className="w-full h-80 object-cover rounded-lg shadow-xl"
//           />
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">{activeData.title}</h2>
//             <p className="text-gray-600 mb-6">{activeData.description}</p>
//             <ul className="space-y-3">
//               {activeData.items.map((item, index) => (
//                 <li key={index} className="flex items-center gap-2">
//                   <ArrowRight className="w-4 h-4 text-blue-600" />
//                   <span className="text-gray-700 text-sm">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import Agappe from "../assets/Clients/Agappe.png"
import TridentInfosol from "../assets/Clients/TridentInfosol.jpg"
import AlphaDesignTechnologies from "../assets/Clients/AlphaDesignTechnologies.png"
import Astra from "../assets/Clients/Astra.png"
import Amphenol from "../assets/Clients/Amphenol.jpg"
import BEL from "../assets/Clients/BEL.png"
import Brahmos from '../assets/Clients/Brahmos.png'
import { useLocation } from 'react-router-dom';

import {
  PackageCheck,
  ShieldCheck,
  Wifi,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

export default function ProductsPage() {
    const location = useLocation();
const initialTab = location.state?.tab || 'aerospace-defense';
const [activeTab, setActiveTab] = useState(initialTab);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = [
    { id: 'aerospace-defense', label: 'Aerospace & Defence', icon: ShieldCheck },
    { id: 'medical', label: 'Medical Components', icon: PackageCheck },
    { id: 'rf', label: 'Radio Frequency', icon: Wifi },
  ];

  const productData = {
    'aerospace-defense': {
      title: 'Aerospace & Defense Components',
      description: 'Precision-engineered components for aerospace and defense applications.',
      carousel: [
        {
          image: Agappe,
          caption: 'High-precision engine component for jet propulsion systems.',
        },
        {
          image: TridentInfosol,
          caption: 'Advanced flight control system housing.',
        },
        {
          image: AlphaDesignTechnologies,
          caption: 'Navigation module for aerospace-grade GPS.',
        },
      ],
      items: ['Engine Components', 'Flight Control Systems', 'Navigation Equipment', 'Defense Electronics'],
    },
    medical: {
      title: 'Medical Components',
      description: 'High-quality medical device components and surgical instruments.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      items: ['Surgical Instruments', 'Implant Components', 'Diagnostic Equipment', 'Medical Housings'],
    },
    rf: {
      title: 'Radio Frequency Components',
      description: 'Precision RF components for communication systems.',
      image: 'https://images.unsplash.com/photo-1581092334665-cd93c8436f34?w=800&h=600&fit=crop',
      items: ['Antennas', 'Waveguides', 'Connectors', 'Amplifiers'],
    },
  };

  const activeData = productData[activeTab];
  const isAerospace = activeTab === 'aerospace-defense';

  const nextSlide = () => {
    setCarouselIndex((prev) =>
      (prev + 1) % productData['aerospace-defense'].carousel.length
    );
  };

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      (prev - 1 + productData['aerospace-defense'].carousel.length) %
      productData['aerospace-defense'].carousel.length
    );
  };

  useEffect(() => {
    setCarouselIndex(0); // reset carousel when tab changes
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-red-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl lg:text-7xl">
              Our Products and Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of precision-engineered components across multiple industries.
            </p>
            <div className="flex items-center justify-center mt-10">
              <ChevronDown className="w-8 h-8 text-gray animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors font-medium text-sm ${
                activeTab === id
                  ?'bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {isAerospace ? (
            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
              <img
                src={activeData.carousel[carouselIndex].image}
                alt={`Slide ${carouselIndex + 1}`}
                className="w-full h-80 object-cover transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm px-4 py-2">
                {activeData.carousel[carouselIndex].caption}
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                ›
              </button>
            </div>
          ) : (
            <img
              src={activeData.image}
              alt={activeData.title}
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
          )}

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{activeData.title}</h2>
            <p className="text-gray-600 mb-6">{activeData.description}</p>
            <ul className="space-y-3">
              {activeData.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
