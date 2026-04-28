import Image from "next/image";
import React from "react";

const Goals = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <section className="Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="text-left">
          <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
            UN Sustainable Development Goals
          </h2>
          <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-left ">
            Norpak is guided and inspired by the 17 UN Sustainable Development
            Goals (SDGs), the world’s joint work plan for eradicating poverty,
            end inequality and stop climate change by 2030. Through being
            responsible in all our business practices, we contribute directly to
            the achievement of several of these goals. We contribute indirectly
            to many more.
          </p>
          <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-left ">
            See below for more details on our contribution to individual
            goals:{" "}
          </p>
        </div>
        <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="reveal delay-3 font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
                4 - Quality Education
              </h2>

              <p className="reveal delay-4 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                At Norpak International, we strongly believe that all children,
                regardless of social or economic background, or gender, are
                entitled to free quality education. In lieu of the government
                providing this service to all its citizens, we built the LAMS
                school in 1996, providing the children of our staff free,
                quality schooling from ages 4 to 18. Thousands of children have
                since been enrolled at the school. With the continued support
                from Norpak International, graduating students who wish to
                continue their studies at university-level are offered
                scholarships.
              </p>

              <p className="reveal delay-5 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                LAMS enrols today nearly 1000 students, mostly girls. By
                offering quality education, we are also contributing to building
                a brighter future.
              </p>

              <p className="reveal delay-6 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                Read more about LAMS at
                <a
                  href="https://www.lams.no/en/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {" "}
                  www.lams.no/en/
                </a>
              </p>
            </div>
            {/* <div className="w-full md:w-1/2 flex-shrink-0 order-2 md:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="/Web-Images/sustainability/4-Quality-Education.png"
                alt="4-Quality-Education"
                fill
                className="object-contain"
              />
            </div>
          </div> */}
            <div className="w-full md:w-[47%] flex-shrink-0 flex justify-center md:justify-start">
              {" "}
              <div className="reveal delay-7 relative w-full aspect-square overflow-hidden">
                {" "}
                <Image
                  src="/Web-Images/sustainability/4-Quality-Education.png"
                  alt="Human"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="reveal delay-8 font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
                5 - Gender Equality
              </h2>

              <p className="reveal delay-9 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                At Norpak International, we strongly believe that all children,
                regardless of social or economic background, or gender, are
                entitled to free quality education. In lieu of the government
                providing this service to all its citizens, we built the LAMS
                school in 1996, providing the children of our staff free,
                quality schooling from ages 4 to 18. Thousands of children have
                since been enrolled at the school. With the continued support
                from Norpak International, graduating students who wish to
                continue their studies at university-level are offered
                scholarships.
              </p>

              <p className="reveal delay-10 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                LAMS enrols today nearly 1000 students, mostly girls. By
                offering quality education, we are also contributing to building
                a brighter future.
              </p>

              <p className="reveal delay-11 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                Read more about LAMS at
                <a
                  href="https://www.lams.no/en/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {" "}
                  www.lams.no/en/
                </a>
              </p>
            </div>
            <div className="w-full md:w-[50%] flex-shrink-0 flex justify-center md:justify-start">
              {" "}
              <div className="reveal delay-12 relative w-full aspect-square overflow-hidden">
                {" "}
                <Image
                  src="/Web-Images/sustainability/5-Gender-Equality.png"
                  alt="Human"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="reveal delay-13 font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
                8 - Decent Work & Economic Growth
              </h2>

              <p className="reveal delay-14 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                Access to safe and decent work is one of the keys to ensuring
                women and men a sustainable future. Despite this, too many
                people work in unsafe and unacceptable conditions, including in
                Pakistan. Therefore, we pay particular attention to ensure that
                all our staff are provided safe and secure working conditions,
                and decent employment benefits. With its plants and trees, the
                factory is already a green oasis in the otherwise impoverished
                Sultan Town, but it’s also an oasis of workers’ rights where
                female and male staff are provided equal opportunities to engage
                and take on responsibilities. All our staff are provided with
                formal contracts, social insurance, access to parental leave and
                pension benefits, to name a few. We work tirelessly to further
                improve working conditions, including health, safety and
                environmental issues.
              </p>
            </div>
            <div className="w-full md:w-[47%] flex-shrink-0 flex justify-center md:justify-start">
              {" "}
              <div className="reveal delay-15 relative w-full aspect-square overflow-hidden">
                {" "}
                <Image
                  src="/Web-Images/sustainability/8-Decent-Work-Economic-Growth.png"
                  alt="Human"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="reveal delay-16 font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
                12 - Responsible Consumption & Production
              </h2>

              <p className="reveal delay-17 font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                As a social enterprise, we believe it is our responsibility and
                duty – and privilege – to contribute in every way possible by
                being a force of good – for the environment and for people. We
                have made conscious choices to only work with more sustainable
                materials that are less harmful to nature. Thta means we always
                choose natural materials, upcycled or recycled to make our
                products. By making quality products that last, we also hope to
                contribute to consumers making more conscious choices. Because a
                product is always more than just a product. A product from
                Norpak also contributes to a better future. In line with our
                commitment to responsible production and the environment, we
                have installed solar panels at Norpak and the LAMS school. These
                provide us with renewable, clean energy and any surplus energy
                generated is transferred back into the public grid.
              </p>
            </div>
            <div className="w-full md:w-[50%] flex-shrink-0 flex justify-center md:justify-start">
              {" "}
              <div className="reveal delay-18 relative w-full aspect-square overflow-hidden">
                {" "}
                <Image
                  src="/Web-Images/sustainability/12-Responsible-Consumption-Production.png"
                  alt="/Web-Images/sustainability/12-Responsible-Consumption-Production.png"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goals;
