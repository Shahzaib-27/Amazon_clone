import React from 'react'
import { Globe } from "lucide-react";



export default function Footer() {

const links = [
  { 
    title: "Get to Know Us",
    a1: "Careers",
    a2: "Blog",
    a3: "bout Amazon",
    a4:  "Investor Relations",
    a5: "Amazon Devices",
    a6: "Amazon Science",            
  },

  {  
    title: "Make Money with Us",
    a1: "Sell products on Amazon",
    a2: "Sell on Amazon Business",
    a3: "Sell apps on Amazon",
    a4: "Become an Affiliate",
    a5: "Advertise Your Products",
    a6: "Self-Publish with Us",
    a7: "Host an Amazon Hub",
    a8: "See More Make Money with Us",
  },

  { 

    title: "Amazon Payment Products",
    a1: "Amazon Business Card",
    a2: "Shop with Points",
    a3: "Reload Your Balance",
    a4: "Amazon Currency Converter",    
  },

  {
    title: "Let Us Help You",
    a1: "Amazon and COVID-19",
    a2: "Your Account",
    a3: "Your Orders",
    a4: "Shipping Rates & Policies",
    a5: "Returns & Replacements",
    a6: "Manage Your Content and Devices",
    a7: "Help",
  }

]

const morelinks =[
    {icons:Globe , title:"English - EN"},
    {title:"español - ES"},
    {title:"العربية - AR"},
    {title:"Deutsch - DE"},
    {title:"עברית - HE"},
    {title:"한국어 - KO"},
    {title:"português - PT"},
    {title:"中文 (简体) - ZH "},
    {title:"中文 (繁體) - ZH"},
]

const footerLinks = [
    [
      { title: "Amazon Music", desc: "Stream millions of songs" },
      { title: "Amazon Business", desc: "Everything For Your Business" },
      { title: "IMDbPro", desc: "Get Info Entertainment Professionals Need" },
      { title: "eero WiFi", desc: "Stream 4K Video in Every Room" },
    ],
    [
      { title: "Amazon Ads", desc: "Reach customers wherever they spend their time" },
      { title: "AmazonGlobal", desc: "Ship Orders Internationally" },
      { title: "Kindle Direct Publishing", desc: "Indie Digital & Print Publishing Made Easy" },
      { title: "Blink", desc: "Smart Security for Every Home" },
    ],
    [
      { title: "6pm", desc: "Score deals on fashion brands" },
      { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
      { title: "Prime Video Direct", desc: "Video Distribution Made Easy" },
      { title: "Neighbors App", desc: "Real-Time Crime & Safety Alerts" },
    ],
    [
      { title: "AbeBooks", desc: "Books, art & collectibles" },
      { title: "Audible", desc: "Listen to Books & Original Audio Performances" },
      { title: "Shopbop", desc: "Designer Fashion Brands" },
      { title: "Amazon Subscription Boxes", desc: "Top subscription boxes – right to your door" },
    ],
    [
      { title: "ACX", desc: "Audiobook Publishing Made Easy" },
      { title: "Box Office Mojo", desc: "Find Movie Box Office Data" },
      { title: "Woot!", desc: "Deals and Shenanigans" },
      { title: "PillPack", desc: "Pharmacy Simplified" },
    ],
    [
      { title: "Sell on Amazon", desc: "Start a Selling Account" },
      { title: "Goodreads", desc: "Book reviews & recommendations" },
      { title: "Zappos", desc: "Shoes & Clothing" },
      { title: "Ring", desc: "Smart Home Security Systems" },
    ],
    [  
      { title: "Veeqo", desc: "Shipping Software Inventory Management" },
      { title: "IMDb", desc: "Movies, TV & Celebrities" },
    ],
  ];



return (
<div>
   <div className='cursor-pointer text-center bg-[#37475A] text-white p-3 font-medium
    hover:bg-[#4a5869]'>
    {/* button */}
    <button type='button' className='p-1 cursor-pointer'>
      <h3>Back to top</h3>
    </button>
    </div>   

    {/* links */}

    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 lg:grid-cols-4 p-30  bg-[#1f2d41] pt-5 ">
    {links.map((item, index) => (
    <div
      key={index}
      className=" p-2 text-white shadow-sm ">

      {/* Title */}
      <h3 className="mb-4 text-lg font-semibold ">
        {item.title}
      </h3>

      {/* Links */}
      <ul className="space-y-2 mb-10 text-sm text-gray-600 ">
        {item.a1 && <li className="text-white  cursor-pointer">{item.a1}</li>}
        {item.a2 && <li className="text-white  cursor-pointer">{item.a2}</li>}
        {item.a3 && <li className="text-white  cursor-pointer">{item.a3}</li>}
        {item.a4 && <li className="text-white  cursor-pointer">{item.a4}</li>}
        {item.a5 && <li className="text-white  cursor-pointer">{item.a5}</li>}
        {item.a6 && <li className="text-white  cursor-pointer">{item.a6}</li>}
        {item.a7 && <li className="text-white  cursor-pointer">{item.a7}</li>}
        {item.a8 && <li className="text-white  cursor-pointer">{item.a8}</li>}
      </ul>
    </div>
  ))}
  
    
    </div>

      {/* more links */}

    <div className="bg-[#1f2d41] pb-20 ">
      <div className="flex items-center justify-center flex-col sm:flex-col md:flex-col-2 lg:flex-row ">
        {/* img section */}
        <img
          className="w-24 h-10 object-contain mr-14 mb-3"
          src="/Logos/amazon-logo.png"
          alt="Amazon" />


        {/* select dropdown */}
          <select className="text-white bg-transparent border border-white rounded-sm px-2 py-1 mr-3 mb-3">
            {morelinks.map((moreitems, index) => (
              <option key={index} value={moreitems.title} className="text-black">
                {moreitems.title}
              </option>
            ))}
          </select>


           {/* button */}
          <button className='text-white cursor-pointer border-1 border-white p-2 text-[12px] 
          w-full max-w-[140px] rounded-sm mr-3 mb-3'>
            <h1>
              <span className='font-bold mr-2'>PKR</span> 
              Pakistani Rupee</h1>
          </button>

          <button className='text-white cursor-pointer border-1 border-white p-2 
          w-full max-w-[170px] rounded-sm mb-2'>
            <h4 className='flex '>
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="EN"
              className="mr-2 w-8 "
              />
            United States
            </h4>
          </button>

      </div>
    </div>

    {/* more links */}
    <div className="bg-gray-900 text-gray-300 px-10 py-10 ">
      <div className="m-3 p-2 justify-center items-center flex flex-col sm:flex-col-1 md:flex-row lg:flex-row xl:flex-row gap-5">
        {footerLinks.map((column, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col space-y-2 space-x-2 ">
            {column.map((link, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold text-white/80 mt-2">{link.title}</h4>
                <p className="text-xs mb-5 text-white/50">{link.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 space-y-2">
        <p>
          Conditions of Use | Privacy Notice | Consumer Health Data Privacy Disclosure | Your Ads Privacy Choices
        </p>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>






</div>
)
}
