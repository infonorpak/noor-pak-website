import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsandMaterials = () => {
  return (
    <section className="bg-[#EBEBEB]">
      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="reveal w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src="/Web-Images/product/products.png"
                alt="Human"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-full">
            <h2 className="reveal delay-1 font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
              Products & Materials
            </h2>

            <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Our wide range of designs & products continuously evolves and
              includes rugs, yoga mats, bed throws, cushion covers, baskets,
              table mats, runners, potholders, tote bags, aprons & drawstring
              bags, to name a few.
            </p>

            <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Inspired by modern Scandinavian design & Pakistani traditional
              artisanship, we strive to ensure that our design, product
              development & production is carried out in the most responsible &
              sustainable way possible. That means caring for the environment,
              using only upcycled, recycled or natural materials, and caring for
              our staff & their families.
            </p>

            <p className="reveal delay-4 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              All our handmade products are made from upcycled, recycled &
              natural materials – they are therefore all unique & better for the
              environment.
            </p>
            <Link href="/products">
              <button className="reveal delay-5 font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
            Responsible & Sustainable
          </h2>
          <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            In everything we do, we have chosen a more conscious approach to
            sustainable design, production and overall more responsible business
            practices. Sustainability is in our DNA, and we strive to ensure
            that all product development and production is carried out in an
            environmentally sustainable, responsible and socially conscious
            manner.
          </p>

          <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center max-w-full">
            Guided and inspired by the 17 UN Sustainable Development Goals, the
            world’s joint work plan for eradicating poverty, end inequality and
            stop climate change by 2030, our contribution to a more sustainable
            future extends beyond the minimum requirements.
          </p>

          <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-6 sm:mb-8 md:mb-10 lg:mb-10">
            We remain unapologetic in our continued efforts to contribute to
            real impact, in all dimensions: economic, social and environmental.
          </p>

          <div className="flex justify-center">
            <Link href="/sustainability">
              <button className="reveal delay-4 font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
          <div className="reveal delay-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-30">
            <div className="w-full order-2 sm:order-1">
              <Image
                src="/Web-Images/home/Responsible-Sustainabletracking-wide.png"
                alt="Responsible-Sustainabletracking-wide"
                width={400}
                height={300}
                className="w-full h-[300px] sm:h-[350px] md:h-[500px] object-cover "
              />
            </div>
            <div className="w-full order-1 sm:order-2">
              <Image
                src="/Web-Images/home/Responsible-Sustainabletracking-wide-2.jpg"
                alt="Responsible-Sustainabletracking-wide-2"
                width={400}
                height={300}
                className="w-full h-[300px] sm:h-[350px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsandMaterials;
