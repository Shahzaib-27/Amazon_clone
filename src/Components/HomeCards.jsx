import React from "react";

import images from "./HomecardImages.jsx"


export default function HomeCards() {
return (
  <>
    <div className="relative py-8 px-30 z-10 -mt-80 mb-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* CARD 1 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">Get your game on</h2>

          <img
            src={images.backgroundimg1}
            alt="Gaming"
            className="w-full h-64 object-cover mb-4"
          />

          <a href="#" className="text-blue-600 text-sm hover:underline">
            Shop gaming
          </a>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            Shop for your home essentials
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.cleaningimages}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Cleaning Tools</p>
            </div>

            <div>
              <img
                src={images.Homestorage}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Home Storage</p>
            </div>

            <div>
              <img
                src={images.decor}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Home Decor</p>
            </div>

            <div>
              <img
                src={images.bedding}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Bedding</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            Discover more in Home
          </a>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            New home arrivals under $50
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.kitchen}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Kitchen & Dining</p>
            </div>

            <div>
              <img
                src={images.cleaningimages}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Home Improvement</p>
            </div>

            <div>
              <img
               src={images.decor}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Décor</p>
            </div>

            <div>
              <img
                src={images.bedding}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Bedding & Bath</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            Shop the latest from Home
          </a>
        </div>

        {/* CARD 4 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            Shop Fashion for less
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.jeans}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Jeans under $50</p>
            </div>

            <div>
              <img
                src={images.topdress}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Tops under $25</p>
            </div>

            <div>
              <img
                src={images.dress}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Dresses under $30</p>
            </div>

            <div>
              <img
                src={images.shoes}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Shoes under $50</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            See all deals
          </a>
        </div>

      </div>
    </div>

    <br />     

    <div className="relative py-8 px-30 z-10 -mt-80 mb-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* CARD 1 */}
       <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            Get ready for Easter
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.easterbunny}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Easter Bunny</p>
            </div>

            <div>
              <img
                src={images.Homestorage}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Home Storage</p>
            </div>

            <div>
              <img
                src={images.esterbasket}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Ester Basket</p>
            </div>

            <div>
              <img
                src={images.esterdecor}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Ester Decor</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            Discover more in Home
          </a>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            Top categories in Kitchen appliances
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.cokker}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Cooker</p>
            </div>

            <div>
              <img
                src={images.soffea}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">coffea</p>
            </div>

            <div>
              <img
                src={images.decor}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Home Decor</p>
            </div>

            <div>
              <img
                src={images.pots}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">pots</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            Discover more in Home
          </a>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            Fashion trends you like
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.dress}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Dress</p>
            </div>

            <div>
              <img
                src={images.topdress}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Tops</p>
            </div>

            <div>
              <img
               src={images.decor}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Décor</p>
            </div>

            <div>
              <img
                src={images.jackets}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Jackets</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            Shop the latest from Home
          </a>
        </div>

        {/* CARD 4 */}
        <div className="bg-gray-100 p-5">
          <h2 className="text-xl font-bold mb-4">
            Easy updates for elevated spaces
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={images.hampers}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Hampers</p>
            </div>

            <div>
              <img
                src={images.hardware}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Hardware</p>
            </div>

            <div>
              <img
                src={images.dress}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Dresses under $30</p>
            </div>

            <div>
              <img
                src={images.furniture}
                alt=""
                className="w-full h-24 object-cover"
              />
              <p className="text-xs mt-1">Accent Furniture</p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:underline">
            See all deals
          </a>
        </div>

      </div>
    </div>

  </>
);
}