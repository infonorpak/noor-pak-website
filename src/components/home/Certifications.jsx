import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certifications = () => {
  return (
    <section className="bg-[#EBEBEB]">
      <div className=" text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
          Certifications{" "}
        </h2>
        <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-5">
          Certifications contribute to ensuring that all activities at our
          factory are in accordance with international standards – to protect
          people and the environment and to ensure sound management and business
          practices.
        </p>

        <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-5">
          All our products are made from more natural, upcycled or recycled
          materials.
        </p>

        <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center max-w-full mb-5">
          At Norpak, however, we want to go beyond the minimum standards
          required by these certifications. We therefore continuously strive to
          exceed expectations in all areas related to environmental standards as
          well as securing decent working conditions, engagement and involvement
          of our staff and the local community.
        </p>

        <div className="flex justify-center">
          <Link href="/sustainability#Certifications">
            <button className="reveal delay-4 font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>

        <div className="w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 overflow-x-auto scrollbar-hide">
          <div className="reveal delay-5 flex flex-row gap-8 min-w-full px-4 sm:px-6 md:px-0 justify-start md:justify-center items-center">
            <div className="flex-shrink-0">
              <Image
                src="/Web-Images/home/logo-1.png"
                alt="Logo 1"
                width={120}
                height={60}
                className="h-[80px] sm:h-[110px] w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
              <Image
                src="/Web-Images/home/logo-2.png"
                alt="Logo 2"
                width={120}
                height={60}
                className="h-[80px] sm:h-[110px] w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
              <Image
                src="/Web-Images/home/logo-3.png"
                alt="Logo 3"
                width={120}
                height={60}
                className="h-[80px] sm:h-[110px] w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
              <Image
                src="/Web-Images/home/logo-4.png"
                alt="Logo 4"
                width={120}
                height={60}
                className="h-[80px] sm:h-[110px] w-auto object-contain"
              />
            </div>

            <div className="flex-shrink-0 relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1.5px] before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
              <Image
                src="/Web-Images/home/logo-5.png"
                alt="Logo 5"
                width={120}
                height={60}
                className="h-[80px] sm:h-[110px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
