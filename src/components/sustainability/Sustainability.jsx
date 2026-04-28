import Image from "next/image";
import React from "react";

const Sustainability = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <section className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="text-left">
          <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
            Sustainability
          </h2>
          <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-left ">
            Beyond using only natural, upcycled and recycled materials in our
            products, we ensure that our staff are provided a decent work
            environment, job security and opportunties to grow professionally
            and personally.
          </p>
        </div>
        <div className=" pt-10 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                Beyond using only natural, upcycled and recycled materials in
                our products, we ensure that our staff are provided a decent
                work environment, job security and opportunties to grow
                professionally and personally.
              </p>

              <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                We take corporate responsibility to new levels and will leave no
                stone unturned in our quest for a better planet – for the
                environment and its people.
              </p>

              <p className="reveal delay-4 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                Sustainability is in our DNA, and we strive to ensure that all
                product design, development and production is carried out in an
                environmentally sustainable, responsible and socially conscious
                manner. We are unapologetic in our continued efforts to
                contribute to real impact, in all three sustainability
                dimensions: economic, social and environmental.
              </p>
              <p className="reveal delay-5 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                By making conscious choices in every aspect of our operations,
                we take responsibility to new levels. In all our business
                practices, and beyond, we strive to be a force for good.{" "}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="reveal delay-6 relative w-full h-[185px] sm:h-[400px] md:h-[400px] overflow-hidden">
                <Image
                  src="/Web-Images/sustainability/Sustainabiliti.png"
                  alt="Sustainabiliti"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="reveal delay-7 w-full">
            <Image
              src="/Web-Images/sustainability/Sustainability-gols.png"
              alt="products-2"
              width={400}
              height={300}
              className="w-full h-full sm:h-full md:h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
