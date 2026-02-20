import React, { useRef } from "react";
import cardimages from "./carouselimages.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardGrid() {
  const items = [

    { title: "Cleaning Tools", img: cardimages.cleaning },
    { title: "Home Storage", img: cardimages.storage },
    { title: "Home Decor", img: cardimages.decor },
    { title: "Bedding", img: cardimages.bedding },
    { title: "Cooker", img: cardimages.cooker },
    { title: "Cups", img: cardimages.cups },
    { title: "Dress", img: cardimages.dress },
    { title: "Dumbells", img: cardimages.dumbells },
    { title: "Gloves", img: cardimages.gloves },
    { title: "Hair Tie", img: cardimages.hairtie },
    { title: "Hats", img: cardimages.hats },
    { title: "Jeans", img: cardimages.jeans },
    { title: "Pillow", img: cardimages.pillow },
    { title: "Shirt", img: cardimages.shirt },
    { title: "Watches", img: cardimages.watches },
  ];
  
  const scrollRef = useRef(null);
  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -1050, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 1050, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-[1350px] bg-white p-4 mx-auto mt-10 mb-10 relative bottom-60 ">
      <h2 className="ml-2 font-bold text-2xl ">Best Sellers in Home & Kitchen</h2>

      <div className="relative mt-4">
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 cursor-pointer transition-transform hover:scale-105"
        >
          <ChevronLeft size={28} />
        </button>

        {/* CARD ROW */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-2"
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-[200px] flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 cursor-pointer transition-transform hover:scale-105"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
