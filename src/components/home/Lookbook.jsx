import React from "react";
import Image from "next/image";
import Link from "next/link";

const Lookbook = () => {
  return (
    <section className="bg-[#EBEBEB]">
      <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25 pb-10 sm:pb-12 md:pb-16 lg:pb-25">
        <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
          Lookbook
        </h2>
        <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-5">
          Browse our Lookbook to see photos from across Norpak, including an
          opportunity to meet some of our staff, see how our products are made
          and explore our extensive range of handmade products made from more
          sustainable materials.
        </p>
        <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-5">
          You even get a chance to take a look at LAMS school, and meet students
          and teachers there.
        </p>
        <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-5">
          It's all right here, in the Norpak Lookbook.
        </p>

        <div className="flex justify-center">
          <Link href="/lookbook">
            <button className="reveal delay-4 font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer">
              View
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-30 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="reveal overflow-hidden h-[385px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-1.png"
              alt="Norpak product handmade"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal overflow-hidden h-[380px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-2.png"
              alt="Product making process"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal overflow-hidden h-[380px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-3.png"
              alt="Norpak factory view"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal delay-1 overflow-hidden h-[240px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-4.png"
              alt="Norpak staff member"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal delay-1 overflow-hidden h-[240px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-5.png"
              alt="Norpak handmade range"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal delay-1 overflow-hidden h-[240px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-6.png"
              alt="Eco friendly packaging"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal delay-2 overflow-hidden h-[380px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-7.png"
              alt="Sustainable materials"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal delay-2 overflow-hidden h-[380px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-8.png"
              alt="LAMS school teachers"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="reveal delay-3 overflow-hidden h-[380px]">
            <Image
              src="/Web-Images/home/lookbook/lokbook-9.png"
              alt="Norpak complete product range"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
