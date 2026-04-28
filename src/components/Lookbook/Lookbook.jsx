"use client";
import React, { useState } from "react";

const categories = ["All", "Products", "People", "Production", "LAMS School"];

const contentData = {
  All: [
    { name: "Product 01", img: "/Web-Images/lokbok/products/product-1.png" },
    { name: "Product 03", img: "/Web-Images/lokbok/products/product-3.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-1.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-2.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-3.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-3.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-4.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-5.png" },
    { name: "People 01", img: "/Web-Images/lokbok/people/people-1.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-2.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-1.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-3.png" },
    {
      name: "People 02",
      img: "/Web-Images/lokbok/production/production-2.png",
    },
    { name: "Product 02", img: "/Web-Images/lokbok/products/product-2.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-6.png" },
    { name: "Product 03", img: "/Web-Images/lokbok/products/product-4.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-4.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-5.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-5.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-6.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-4.png" },
  ],
  Products: [
    { name: "Product 01", img: "/Web-Images/lokbok/products/product-1.png" },
    { name: "Product 02", img: "/Web-Images/lokbok/products/product-2.png" },
    { name: "Product 03", img: "/Web-Images/lokbok/products/product-3.png" },
    { name: "Product 03", img: "/Web-Images/lokbok/products/product-4.png" },
  ],
  People: [
    { name: "People 01", img: "/Web-Images/lokbok/people/people-1.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-2.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-3.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-4.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-5.png" },
    { name: "People 02", img: "/Web-Images/lokbok/people/people-6.png" },
  ],
  Production: [
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-1.png" },
    {
      name: "People 02",
      img: "/Web-Images/lokbok/production/production-2.png",
    },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-3.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-4.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/production/production-5.png" },
  ],
  "LAMS School": [
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-1.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-2.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-3.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-4.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-5.png" },
    { name: "LAMS 01", img: "/Web-Images/lokbok/school/school-6.png" },
  ],
};

const Lookbook = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="bg-[#EBEBEB]">
      <section className="Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="text-left">
          <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
            Lookbook
          </h2>
          <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
            Take a virtual tour of Norpak, our manufacturing facilities, see our
            products and familiarise yourself with the materials we use to make
            them. Meet some of our dedicated staff and browse our gallery
            showing our extensive range of handmade products made from more
            sustainable materials.
          </p>
          <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px]">
            Click on the below tabs for your preferred category and enjoy
            browsing.
          </p>
        </div>
        <div className="reveal delay-3 hidden sm:flex gap-2 flex-wrap mb-8 pt-10 sm:pt-12 md:pt-16 lg:pt-25 flex justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-lg cursor-pointer font-garnett text-black text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 transition-all duration-200 ${
                active === cat
                  ? "bg-[#000000] text-white"
                  : "bg-transparent text-[#000000] hover:bg-[#000000] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="block sm:hidden mb-6 pt-10 sm:pt-12 md:pt-16 lg:pt-20 relative flex items-center">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full border border-gray-900 rounded-lg px-3 pr-10 py-2 text-[16px] md:text-[18px] text-black bg-[#EBEBEB] appearance-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 mb-2 text-black text-[16px]">
            &#8964;
          </span>
        </div>

        {/* Content Grid */}
        <div className="columns-2 sm:columns-4 gap-4">
          {contentData[active].map((item, i) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
