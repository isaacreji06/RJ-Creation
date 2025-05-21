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
  Agappe,
  TridentInfosol,
  AlphaDesignTechnologies,
  Astra,
  Amphenol,
  BEL,
  Brahmos,
  Glastronix,
  IndusTeqsite,
  LT,
  NIC,
  PCC,
  TMEIC,
  wipro
];

const CustomerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-40     pr-6 pl-6 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerCarousel;
