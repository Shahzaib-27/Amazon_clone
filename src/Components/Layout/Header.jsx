import React from "react";

export default function Header() {

  const dropdown = [
   {title: "ALL Deparments"},
   {title: "Arts & Crafts"},
   {title: "Automotive"},
   {title: "Baby"},
   {title: "Beauty & Personal Care"},
   {title: "Books"},
   {title: "Boys' Fashion"},
   {title: "Computers"},
   {title: "Deals"},
   {title: "Digital Music"},
   {title: "Electronics"},
   {title: "Girls' Fashion"},
   {title: "Health & Household"},
   {title: "Home & Kitchen"},
   {title: "Industrial & Scientific"},
   {title: "Luggage"},
   {title: "Men's Fashion"},
   {title: "Movies & TV"},
   {title: "Sic, CDs & Vinyl"},
  ]


  return (
    <>
    <div className=" ">
      {/* TOP NAVBAR */}
      <div className="bg-[#131921] text-white cursor-pointer">
        <div className="flex items-center px-4 py-2 gap-4">

          {/* LOGO */}
          <img
            className="w-24 h-10 object-contain"
            src="/Logos/AMAZON_DESIGN.png"
            alt="Amazon"
          />

          {/* LOCATION */}
          <div className="hidden md:flex flex-col leading-tight">
            <p className="text-[10px] text-gray-300 ml-5">Deliver to</p>
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-location-dot text-sm"></i>
              <span className="font-bold text-sm">Pakistan</span>
            </div>
          </div>

          {/* SEARCH */}
          <div className="flex flex-1 items-center max-w-4xl">
            
           <select
            className="relative h-10 px-2 bg-gray-300 text-black text-sm rounded-l 
            w-15 cursor-pointer outline-none">
  
            {dropdown.map((item, index) => (
              <option
              key={index}
              value={item.title} // good practice to add value
              className="bg-white text-black"
              >
                {item.title}
              </option>
            ))}
          </select>



            <input
              type="text"
              placeholder="Search Amazon"
              className="h-10 px-3 bg-white text-black flex-1 outline-none pb-1 max-w-155 "
            />

            <button className="h-10 px-4 bg-amber-400 hover:bg-amber-500 rounded-r text-black">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* LANGUAGE */}
          <div className="flex mr-6  md:flex items-center gap-1 ">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="EN"
              className="w-5 "
              />
            <span className="font-bold">EN</span>
          </div>

          {/* ACCOUNT */}
          <div className="hidden md:block mr-7 text-sm leading-tight">
            <p className="text-gray-300">Hello, sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>

          {/* ORDERS */}
          <div className="hidden md:block text-sm leading-tight">
            <p className="text-gray-300">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          {/* CART */}
          <div className="flex items-center gap-1 text-sm font-bold">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            <span>Cart</span>
          </div>

        </div>
      </div>

      {/* BOTTOM NAVBAR */}
      <div className="bg-[#232F3E] text-white flex items-center px-4 text-[12px]">

        <span className="flex items-center gap-1 p-2 font-bold border border-transparent hover:border-white rounded-sm cursor-pointer">
          <i className="fa-solid fa-bars"></i>
          All
        </span>

        <div className="flex gap-4 ml-4">
          { [
            "Today's Deals",
            "Prime Video",
            "Registry",
            "Gift Cards",
            "Customer Service",
            "Sell",
          ].map( (item) => (
            <span
            key={item}
            className="p-2 border border-transparent hover:border-white rounded-sm cursor-pointer"
            >
              {item}
            </span>
          )) }
        </div>

      </div>
  </div>
    </>
  );
}
