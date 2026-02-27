import React, { useRef } from "react";
import cardimages from "./carouselimages.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CardGrid() {
  const items = [    
    { title: "bottle", img: cardimages.bottle },
    { title: "sheet", img: cardimages.sheet },
    { title: "frame", img: cardimages.frame },
    { title: "crapet", img: cardimages.crapet },
    { title: "watercolooer", img: cardimages.watercolooer },
    { title: "vacumcleaner", img: cardimages.vacumcleaner },
    { title: "termameter", img: cardimages.termameter },
    { title: "hanger", img: cardimages.hanger },
    { title: "cooler", img: cardimages.cooler },
    { title: "beter", img: cardimages.beter },
    { title: "beter", img: cardimages.bedding },
    { title: "beter", img: cardimages.cleaning},
    { title: "beter", img: cardimages.storage },
    { title: "beter", img: cardimages.cooker },
    { title: "beter", img: cardimages.cups },
    { title: "beter", img: cardimages.dress },
    { title: "beter", img: cardimages.dumbells },
    { title: "beter", img: cardimages.gloves },
    { title: "beter", img: cardimages.hats },
    { title: "beter", img: cardimages.jeans },
    { title: "beter", img: cardimages.pillow },
    { title: "beter", img: cardimages.shirt },
    { title: "beter", img: cardimages.watches },
  ];

  const scrollRef = useRef(null);
    
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -1050, behavior: "smooth" });
    };
    
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 1050, behavior: "smooth" });
    };
  
    return (
      <div className="w-full max-w-[1550px] bg-white p-4 mx-auto mt-10 mb-10 relative bottom-60 ">
        <h2 className="ml-2 font-bold text-2xl ">Best Sellers in Home </h2>
  
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
                  className="h-60 w-full object-cover rounded-lg pl-10 mb-4 "
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
