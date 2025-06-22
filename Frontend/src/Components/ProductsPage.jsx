import React, { useState, useEffect } from 'react';
import Aerospace1 from "../assets/Aerospace and Defence/Aerospace1.jpg";
import Aerospace2 from "../assets/Aerospace and Defence/Aerospace2.jpg";
import Aerospace3 from "../assets/Aerospace and Defence/Aerospace3.jpg";
import Aerospace4 from "../assets/Aerospace and Defence/Aerospace4.jpg";
import Aerospace5 from "../assets/Aerospace and Defence/Aerospace5.jpg";
import Aerospace6 from "../assets/Aerospace and Defence/Aerospace6.jpg";
import Aerospace7 from "../assets/Aerospace and Defence/Aerospace7.jpg";
import Aerospace8 from "../assets/Aerospace and Defence/Aerospace8.jpg";
import Aerospace9 from "../assets/Aerospace and Defence/Aerospace9.JPG";
import Aerospace17 from "../assets/Aerospace and Defence/Aerospace17.JPG";
import Aerospace11 from "../assets/Aerospace and Defence/Aerospace11.JPG";
import Aerospace12 from "../assets/Aerospace and Defence/Aerospace12.JPG";
import Aerospace13 from "../assets/Aerospace and Defence/Aerospace13.JPG";
import Aerospace14 from "../assets/Aerospace and Defence/Aerospace14.JPG";
import Aerospace15 from "../assets/Aerospace and Defence/Aerospace15.JPG";
import Aerospace16 from "../assets/Aerospace and Defence/Aerospace16.JPG";
import Medical2 from "../assets/Medical/Medical2.JPG";
import Medical1 from "../assets/Medical/Medical1.JPG";
import Medical3 from "../assets/Medical/Medical3.JPG";
import Medical4 from "../assets/Medical/Medical4.JPG";
import Medical5 from "../assets/Medical/Medical5.JPG";
import Medical6 from "../assets/Medical/Medical6.JPG";
import RF1 from "../assets/RF/RF1.JPG";
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
        { image: Aerospace1, caption: 'High-precision engine component for jet propulsion systems.' },
        { image: Aerospace2, caption: 'Advanced flight control system housing.' },
        { image: Aerospace3, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace4, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace5, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace6, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace7, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace8, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace9, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace17, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace11, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace12, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace13, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace14, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace15, caption: 'Navigation module for aerospace-grade GPS.' },
        { image: Aerospace16, caption: 'Navigation module for aerospace-grade GPS.' },
      ],
      items: ['Engine Components', 'Flight Control Systems', 'Navigation Equipment', 'Defense Electronics'],
    },
    medical: {
      title: 'Medical Components',
      description: 'High-quality medical device components and surgical instruments.',
      carousel: [
        { image: Medical1, caption: 'The caption' },
        { image: Medical2, caption: 'The caption' },
        { image: Medical3, caption: 'The caption' },
        { image: Medical4, caption: 'The caption' },
        { image: Medical5, caption: 'The caption' },
        { image: Medical6, caption: 'The caption' },
      ],
      items: ['Surgical Instruments', 'Implant Components', 'Diagnostic Equipment', 'Medical Housings'],
    },
    rf: {
      title: 'Radio Frequency Components',
      description: 'Precision RF components for communication systems.',
      carousel: [{ image: RF1, caption: 'The caption' }],
      items: ['Antennas', 'Waveguides', 'Connectors', 'Amplifiers'],
    },
  };

  const activeData = productData[activeTab];

  const nextSlide = () => {
    const length = activeData.carousel.length;
    setCarouselIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    const length = activeData.carousel.length;
    setCarouselIndex((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    if (Array.isArray(activeData?.carousel) && activeData.carousel.length > 0) {
      setCarouselIndex(0);
    }
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
                  ? 'bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {Array.isArray(activeData?.carousel) && activeData.carousel.length > 0 && activeData.carousel[carouselIndex] ? (
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
            <div className="w-full h-80 flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg shadow-inner">
              No image available.
            </div>
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
