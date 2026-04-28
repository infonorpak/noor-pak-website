import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = () => {
  const images = [
    {
      src: "/Web-Images/home/our-story-1.png",
      alt: "Artisan hands weaving",
    },
    {
      src: "/Web-Images/home/our-story-4.png",
      alt: "Textile bag",
    },
    {
      src: "/Web-Images/home/our-story-3.png",
      alt: "Home textile",
    },
  ];
  return (
    <section className="bg-[#EBEBEB] pt-10 sm:pt-12 md:pt-16 lg:pt-25">
      <div className="Mycontainer text-center">
        <div className="reveal w-full  mb-6 sm:mb-8 md:mb-10 lg:mb-25">
          <Image
            src="/Web-Images/home/our-story.png"
            alt="our-story"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
          Our Story
        </h2>
        <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          For more than 30 years, we have contributed to building a brighter
          future for artisans and their families. Through responsible and more
          sustainable design and production of interior home textiles, our focus
          has always been and always will be on celebrating artisanship.
        </p>

        <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          It all started with an idea that we could produce the traditional
          Norwegian rag rugs (“fillerye”) in Pakistan, drawing on the rich
          weaving experience of local artisans and using waste materials (rags)
          from local textile factories. Over the years, our approach has always
          been to make the most of what we have and stretch ourselves to achieve
          more and better. We have built on successes, and a few failures, and
          can today present an impressive portfolio of a wide range of home
          interior textiles, all arefully crafted by men and women who take
          pride in their work.
        </p>

        <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          To this day, we remain committed to our core values of being
          responsible, seeking truly sustainable solutions, and engaging with
          the people who make our products. Our commitment to transparency,
          sustainable business practices and to being a responsible social force
          for good remains at the core of everything we do.
        </p>

        <p className="reveal delay-4 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center">
          This is who we are.
        </p>
        <div className="flex justify-center">
          <Link href="/about#our-story">
            <button className="reveal delay-5 font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer sm:mt-8 md:mt-10 lg:mt-10">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="Mycontainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        {images.map((image, index) => (
          <div key={index} className="reveal delay-6 overflow-hidden w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[350px] sm:h-[350px] md:h-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
