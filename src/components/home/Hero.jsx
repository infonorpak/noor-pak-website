import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#EBEBEB]">
      <div className="w-full h-[300px] sm:h-screen md:h-screen lg:h-screen relative">
        <Image
          src="/Web-Images/home/Home-Hero-imag.png"
          alt="Artisan weaving textiles"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className=" Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
          {" "}
          <div className="w-full md:w-1/2">
            <h2 className="reveal font-garnett-regular text-[18px] md:text-[22px] mb-5 tracking-tighter leading-[31px]">
              Inspired by Scandinavian design & traditional Pakistani
              artisanship, we bring you home interior and textile products for a
              more conscious way of living.
            </h2>

            <p className="reveal delay-1 font-garnett text-[#636363] text-[14px] md:text-[16px] mb-5 tracking-[-0.5px] leading-[24px]">
              We are a social enterprise based in Sultan Town, Faisalabad,
              Pakistan. With more than 30 years of experience, we design,
              develop and manufacture exclusive, handmade interior home products
              from more sustainable materials.
            </p>

            <p className="reveal delay-2 font-garnett text-[#636363] text-[14px] md:text-[16px] mb-5 tracking-[-0.5px] leading-[24px]">
              We strive to be a force for good – for the planet and its people.
              At the core of our values, lies the quest for a more responsible
              and sustainable approach to design and production.
            </p>

            <p className="reveal delay-3 font-garnett text-[#636363] text-[14px] md:text-[16px] mb-5 tracking-[-0.5px] leading-[24px]">
              Norpak not only secures decent employment to artisans; we also
              provide free, quality education to children and adolescents at the
              LAMS school.
            </p>
            <Link href="/about">
              <button className="reveal delay-4 font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer">
                {" "}
                About Us
              </button>
            </Link>
          </div>
          <div className="reveal delay-2 w-full md:w-1/2 flex-shrink-0">
            <div className="relative relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/Web-Images/home/Inspired-by-Scandinavian-design-traditional-pak.jpg"
                alt="Inspired-by-Scandinavian-design-traditional-pak"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
