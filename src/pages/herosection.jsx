import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Imgcontainer from "./herosectionimages.jsx";

export default function HeroSection() {

  const images = [
    Imgcontainer.backgroundimg1,
    Imgcontainer.backgroundimg2,
    Imgcontainer.backgroundimg3,
    Imgcontainer.backgroundimg4,
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1 );
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1 );
  };

  return (
    
    <section className="w-full flex justify-center ">
      <div className="relative max-w-[1400px] w-full">
        {/* IMAGE */}
        <img
          src={images[current]}
          alt="hero"
          className="w-full h-full object-cover "
        />

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/3 -translate-y-1/2 
          text-black p-2 cursor-pointer outline-none"
        >
          <ChevronLeft size={50} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/3 -translate-y-1/2 
         text-black p-2 cursor-pointer outline-none"
        >
          <ChevronRight size={50} />
        </button>

      </div>

      
    </section>
  );
}
