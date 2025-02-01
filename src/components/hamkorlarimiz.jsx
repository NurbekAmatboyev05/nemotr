import React from 'react';
import Slider from 'react-slick';
import rasm1 from '../assets/emirates.jpg';
import rasm2 from '../assets/uzairways.png';
import rasm3 from '../assets/turkish.png';
import rasm4 from '../assets/qatar.png';
import rasm5 from '../assets/centrumair.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hamkorlarimiz() {
  const settings = {
    infinite:true,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,  // 1024px gacha bo'lgan ekranlar
        settings: {
          slidesToShow: 3, // 1024px dan kichik ekranlarda 3 ta
        },
      },
      {
        breakpoint: 768,  // 768px gacha bo'lgan ekranlar (tabletlar uchun)
        settings: {
          slidesToShow: 2, // 768px dan kichik ekranlarda 2 ta
        },
      },
      {
        breakpoint: 480,  // 480px gacha bo'lgan ekranlar (smartfonlar uchun)
        settings: {
          slidesToShow: 1, // 480px dan kichik ekranlarda faqat 1 ta
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Hamkorlarimiz</h2>

        <Slider {...settings}>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-32 h-32 rounded-full" src={rasm1} alt="Hamkor 1" />
              <h3 className="text-lg font-medium text-gray-900 ml-4">Emirates</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-32 h-32 rounded-full" src={rasm2} alt="Hamkor 2" />
              <h3 className="text-lg font-medium text-gray-900 ml-4">Uzairways</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-32 h-32 rounded-full" src={rasm3} alt="Hamkor 3" />
              <h3 className="text-lg font-medium text-gray-900 ml-4">Turkish</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-32 h-32 rounded-full" src={rasm4} alt="Hamkor 4" />
              <h3 className="text-lg font-medium text-gray-900 ml-4">Qatar</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img className="w-32 h-32 rounded-full" src={rasm5} alt="Hamkor 5" />
              <h3 className="text-lg font-medium text-gray-900 ml-4">Centrumair</h3>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Hamkorlarimiz;
