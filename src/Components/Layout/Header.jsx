import React from "react";

import {Link, useNavigate} from "react-router-dom";

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


  const links = [
  { title: "Today's Deals", path: "/todaysdealsection" },
  { title: "Prime Video", path: "/primevideo" },
  { title: "Registry", path: "/registry" },
  { title: "Gift Cards", path: "/giftcards" },
  { title: "Customer Service", path: "/customersrvice" },
  { title: "Sell", path: "/sell" },
];

  const navaigate = useNavigate();

 
  return (
  <div className="w-full">

    {/* TOP NAVBAR */}
    <div className="bg-[#131921] text-white">
      <div className="flex flex-wrap items-center px-4 py-2 gap-4">

        {/* LOGO */}
        <img
          className="w-24 h-10 object-contain cursor-pointer"
          src="/Logos/AMAZON_DESIGN.png"
          alt="Amazon"
          onClick={()=> navaigate("/")}
        />

        {/* LOCATION - hidden on small */}
        <div className="hidden lg:flex flex-col leading-tight">
          <p className="text-[10px] text-gray-300 ml-5">Deliver to</p>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-location-dot text-sm"></i>
            <span className="font-bold text-sm">Pakistan</span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex w-full md:flex-1 items-center order-3 md:order-none">
          <select
            className="h-10 px-2 bg-gray-300 text-black text-sm rounded-l w-20 outline-none"
          >
            {dropdown.map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="h-10 px-3 bg-white text-black flex-1 outline-none"
          />

          <button className="h-10 px-4 bg-amber-400 hover:bg-amber-500 rounded-r text-black">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {/* RIGHT SIDE ITEMS */}
        <div className="flex items-center gap-4 ml-auto">

          {/* LANGUAGE */}
          <div className="hidden sm:flex items-center gap-1">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="EN"
              className="w-5"
            />
            <span className="font-bold">EN</span>
          </div>

          {/* ACCOUNT */}
          <div className="hidden md:block text-sm leading-tight">
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
            <span className="hidden sm:inline">Cart</span>
          </div>

        </div>
      </div>
    </div>

    {/* BOTTOM NAVBAR */}
    <div className="bg-[#232F3E] text-white px-4 text-[12px] overflow-x-auto">
      <div className="flex items-center gap-4 whitespace-nowrap">

        <span className="flex items-center gap-1 p-2 font-bold hover:border-white border border-transparent rounded-sm cursor-pointer">
          <i className="fa-solid fa-bars"></i>
          All
        </span>

        {links.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="p-2 hover:border-white border border-transparent rounded-sm"
          >
            {item.title}
          </Link>
        ))}

      </div>
    </div>

  </div>
);
}
