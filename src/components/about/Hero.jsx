import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#EBEBEB]">
      <div className="w-full h-[300px] sm:h-screen md:h-screen lg:h-screen relative">
        <Image
          src="/Web-Images/about/about-hero-imag.jpg"
          alt="Artisan weaving textiles"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
          About Us
        </h2>
        <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          At Norpak International, we are passionate about people, the planet
          and sustainable design.
        </p>
        <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Together we can contribute to a brighter future for all.
        </p>
        <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Norpak International is a social enterprise that contributes to secure
          and decent employment opportunities to hundreds of artisans, mostly
          female, in Sultan Town, Faisalabad, Pakistan. We design, manufacture
          and sell a broad range of unique, handmade textile and home interior
          products. Our staff’s children also benefit from free, quality
          education at the adjacent LAMS school.
        </p>
      </div>
      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
              Sustainable
            </h2>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              At Norpak, sustainability isn’t simply a buzz-word we use in
              marketing. To us, being more sustainable means that we make
              conscious decisions daily, and continue to ask ourselves difficult
              questions, in our quest for a more responsible approach to what we
              do.
            </p>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Our care for both the planet and people directs and informs all
              our decisions, from product design to production and sales.
            </p>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              We only use more sustainable materials in the production of all
              our products, and where possible, we use recycled or upcycled
              materials.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            {" "}
            <div className="reveal relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/Web-Images/about/Sustainabl.png"
                alt="Sustainable"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-10 items-center">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
              Human
            </h2>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              We do not employ people to make our products – we make products to
              employ people.
            </p>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              With that vision as a guide and driving force in everything we do
              at Norpak, we strive to take a more humane approach to all
              decisions we make – from design, product development, production
              and beyond.
            </p>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              The conscious choices we make has enabled us to create safe work
              environments, allowing us to engage more women and men, providing
              them with safe and decent employment opportunities.
            </p>
          </div>
          <div className="w-full md:w-[47%] flex-shrink-0 flex justify-center md:justify-start">
            {" "}
            <div className="reveal relative w-full aspect-square overflow-hidden">
              {" "}
              <Image
                src="/Web-Images/about/Human.jpg"
                alt="Human"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
              Engaged
            </h2>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Our commitment and dedication does not end at the gates of our
              factory.
            </p>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              We wish to contribute to the well-being of our staff, their
              families and the wider local community in Sultan Town. Today and
              in the future.
            </p>

            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              That is why we dedicate resources to ensure that all children,
              regardless of social or financial background – or gender – have
              access to free quality education at our LAMS school.
            </p>
            <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Quality education not only is every child’s right, it is also the
              prerequisite for a brighter future. Many of the girls who are
              enrolled at the LAMS school are pioneers, often the first in their
              families who can read and write.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            {" "}
            <div className="reveal relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/Web-Images/about/Engaged.jpg"
                alt="Engaged"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
