import React from 'react';
import Slider from 'react-slick';
import Agappe from "../assets/Clients/Agappe.png"
import TridentInfosol from "../assets/Clients/TridentInfosol.jpg"
import AlphaDesignTechnologies from "../assets/Clients/AlphaDesignTechnologies.png"
import Astra from "../assets/Clients/Astra.png"
import Amphenol from "../assets/Clients/Amphenol.jpg"
import BEL from "../assets/Clients/BEL.png"
import Brahmos from '../assets/Clients/Brahmos.png'
import Glastronix from "../assets/Clients/Glastronix.png"
import IndusTeqsite from "../assets/Clients/IndusTeqsite.jpg"
import LT from "../assets/Clients/L&T.png"
import NIC from "../assets/Clients/NIC.png"
import PCC from "../assets/Clients/PCC.png"
import TMEIC from "../assets/Clients/TMEIC.png"
import wipro from "../assets/Clients/wipro.png"

const images = [
  { src: Agappe, name: "Agappe" },
  { src: TridentInfosol, name: "Trident Infosol" },
  { src: AlphaDesignTechnologies, name: "Alpha Design Technologies" },
  { src: Astra, name: "Astra" },
  { src: Amphenol, name: "Amphenol" },
  { src: BEL, name: "BEL" },
  { src: Brahmos, name: "Brahmos" },
  { src: Glastronix, name: "Glastronix" },
  { src: IndusTeqsite, name: "IndusTeqsite" },
  { src: LT, name: "L&T" },
  { src: NIC, name: "NIC" },
  { src: PCC, name: "PCC" },
  { src: TMEIC, name: "TMEIC" },
  { src: wipro, name: "Wipro" }
];

const CustomerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2500,
        }
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          dots: true,
        }
      },
      {
        breakpoint: 480, // xs breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          dots: false,
        }
      }
    ],
    customPaging: function(i) {
      return (
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-500"></div>
      );
    },
    dotsClass: "slick-dots !bottom-[-40px] sm:!bottom-[-50px] flex justify-center gap-2 sm:gap-3"
  };

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Our Trusted Partners
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            We're proud to work with industry-leading companies across defense, aerospace, and technology sectors
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto">
          <div className="carousel-container pb-12 sm:pb-16">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="px-2 sm:px-3 lg:px-4">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4 sm:p-6 lg:p-8 h-32 sm:h-36 lg:h-40 flex items-center justify-center group">
                    <img
                      src={image.src}
                      alt={image.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                  {/* Optional: Company name tooltip/label */}
                  <div className="text-center mt-2 sm:mt-3">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Optional: Additional Info Section */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">14+</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Trusted Partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">15+</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">3+</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Industry Sectors</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">100%</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Slick Carousel */}
      <style jsx>{`
        .carousel-container .slick-dots li button:before {
          display: none;
        }
        
        .carousel-container .slick-dots li.slick-active div {
          background-color: #2563eb !important;
          transform: scale(1.2);
        }
        
        .carousel-container .slick-track {
          display: flex;
          align-items: center;
        }
        
        .carousel-container .slick-slide {
          height: auto;
        }
        
        .carousel-container .slick-slide > div {
          height: 100%;
        }
        
        /* Ensure smooth transitions on mobile */
        @media (max-width: 640px) {
          .carousel-container .slick-list {
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default CustomerCarousel;