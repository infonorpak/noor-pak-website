import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <section
        id="our-story"
        className="Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25"
      >
        <div className="text-center">
          <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
            Our Story
          </h2>
          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            The story of Norpak International dates back to the late 1980s when
            the Pakistani-born Yawar Bokhari, who was settled in Norway,
            discovered and was inspired and influenced by the traditional
            Norwegian rag rug and society at large.
          </p>

          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            The rag rug, or fillerye in Norwegian, is a traditional rug made
            from rags and waste materials and woven into practical and cosy
            everyday rugs. Upon discovering the rag rug, Bokhari decided to
            bring a sample to Pakistan where he eventually established a factory
            in Sultan Town, a quiet suburb of the textile metropole Faisalabad.
          </p>

          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center">
            And thus, in 1989, Norpak (short for Norway-Pakistan) saw the light
            of day.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="w-full md:w-1/2">
            <h2 className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              The following years, the business grew & Norpak expanded the
              factory facilities into slowly becoming the main place of
              employment in Sultan Town. Materials were sourced from nearby
              textile mills, where rags were considered waste material. At the
              same time, this was an opportunity to help people out of the
              poverty trap.
            </h2>

            <p className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Particularly women had few chances of progressing, with no
              education and few jobs available to them. The decision to build a
              school for the children of the staff was a direct response to
              this, and in 1996 the foundation stone to the LAMS school was
              laid, adjacent to the factory.
            </p>

            <p className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Throughout the 1990s and early 2000s, the business continued to
              grow, with more staff employed at the factory and more children
              enrolled at the school.
            </p>

            <p className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              In the years that followed, Norpak established itself as a leader
              in designing and weaving rag rugs for the Scandinavian market.
              Equally importantly, it became a pioneer in corporate social
              responsibility (CSR), recognising and embracing the role and
              responsibility it had in forging social impact in the local
              community.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="reveal relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/Web-Images/about/our-story1.jpg"
                alt="our-story-1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-25">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <p className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                Following Yawar Bokhari’s unexpected demise in 2012, orders
                stopped coming and all activity at the factory eventually
                ceased. Whereas the LAMS school remained open, its numbers of
                students dwindled as parents left the local community in search
                of employment elsewhere. Seemingly, the fairytale of Norpak had
                come to an abrupt end.
              </p>

              <p className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                It was only a few years later, when Amar Bokhari (son of
                late-Yawar Bokhari) teamed up with Norwegian award-winning
                designer Runa Klock and decided to step in and develop a new,
                more diversified and forward-looking business model based on the
                principles of responsible production and sustainability in all
                aspects of operations.
              </p>

              <p className="reveal ont-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
                This also gave birth to our brand name Bokhari along with a more
                conscious approach to sustainable design and responsible
                business practices.
              </p>
            </div>
            <div className="w-full md:w-[47%] flex-shrink-0 flex justify-start">
              {" "}
              <div className="reveal relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src="/Web-Images/about/our-story2.png"
                  alt="our-story-2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-20">
          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            Through a partnership with the leading Norwegian interior textile
            retailer, Kid Interiør, a new and exciting portfolio of a wide range
            of handmade products was developed, and Norpak once again could
            employ artisans to produce handmade interior products.
          </p>

          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            In 2019, Norpak established a stitching and a printing unit, and
            began to design and make tote bags, aprons and other products made
            from 100% recycled cotton.
          </p>

          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            Today, Norpak provides meaningful and decent employment to hundreds
            of women and men and continues to design and produce premium
            handmade interior products both for export and the domestic market.
          </p>
          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
            The LAMS school, which is still run largely with financial and
            management support from Norpak, annually enrolls nearly 1000
            students, mostly girls, and continues to provide quality education
            to children who otherwise would not have gone to school.
          </p>
          <p className="reveal font-garnett text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center">
            Whereas the days of only weaving rag rugs are long gone, the
            original principle of responsible business practices and
            sustainability in all its dimensions (social, economic and
            environmental) remains central to the business model and all
            decisions made ,and all our new products are inspired and guided by
            this.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
