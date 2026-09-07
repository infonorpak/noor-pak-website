"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Careers = () => {
  const [pdfOpen, setPdfOpen] = React.useState(false);

  React.useEffect(() => {
    if (pdfOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [pdfOpen]);
  return (
    <section className="bg-[#EBEBEB]">
      <div className="w-full h-[300px] sm:h-[400px] md:h-screen lg:h-screen relative">
        <Image
          src="/Web-Images/career/career.png"
          alt="Artisan weaving textiles"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <h2 className="reveal font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
          Careers
        </h2>
        <p className="reveal delay-2 font-garnett-regular text-[18px] md:text-[22px] mb-5 tracking-tighter leading-[31px] text-center">
          Looking to make a real difference for people and the planet?
          <br />
          Want to build a career with potential for global impact?
        </p>
        <p className="reveal delay-3 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Together we can contribute to a brighter future for all.
        </p>
        <p className="reveal delay-4 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          International is a social enterprise based in Sultan Town, Faisalabad,
          with more than 30 years of experience in responsible and sustainable
          production of handmade home interior products and textiles for export
          and domestic sales.
        </p>
        <p className="reveal delay-5 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Our professional team of motivated and ambitious staff is growing, so
          if you’re ready to take on a challenge and are passionate about what
          you do, we’d like to hear from you.
        </p>
        <p className="reveal delay-6 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Norpak International celebrates diversity and especially encourages
          qualified female candidates and persons with disabilities to apply.
        </p>

        <p className="reveal delay-7 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-center">
          Explore the below vacancies or drop us a line at{" "}
          <a
            href="mailto:careers@norpak.pk"
            className="font-bold hover:underline"
          >
            careers@norpak.pk
          </a>
        </p>
      </div>

      {/* <div className="text-center Mycontainer pt-10 sm:pt-12 md:pt-16 lg:pt-25">
        <h2 className="reveal delay-8 font-garnett-medium font-bold text-[18px] md:text-[39px] mb-5 tracking-tighter leading-[43px]">
          Current Vacancies
        </h2>
        <p className="reveal delay-9 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          We currently have the following vacancies at Norpak International.
        </p>
        <p className="reveal delay-10 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Click on the below links for full job descriptions and requirements to
          apply.
        </p>
        <p className="reveal delay-11 font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          For any specific questions about these vacancies, please write to{" "}
          <a
            href="mailto:careers@norpak.pk"
            className="text-blue-500 hover:underline"
          >

            careers@norpak.pk
          </a>
        </p>
        <p className="reveal delay-12font-roboto text-[#636363] text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 text-center">
          Note that applications without a supporting letter of motivation may
          not be considered. Only shortlisted candidates will be contacted.
        </p>

        <p
          onClick={() => setPdfOpen(true)}
          className="reveal delay-13 font-roboto font-bold text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] text-[#AE0000] text-center mb-5 cursor-pointer hover:underline"
        >
          Senior Officer Warehouse
        </p>

        <div className="reveal delay-16 flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-5">
          <Link href="mailto:careers@norpak.pk">
            <button className="font-roboto font-medium bg-[#000000] hover:bg-gray-700 text-white tracking-wide uppercase leading-[13px] text-[10px] md:text-[13px] px-6 py-2.5 transition-colors duration-200 cursor-pointer">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      {pdfOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setPdfOpen(false)}
        >
          <div
            className="relative w-[90vw] h-[90vh] bg-white rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPdfOpen(false)}
              className="absolute top-2 right-3 text-black text-2xl font-bold z-10 hover:text-red-600"
            >
              ✕
            </button>
            <iframe
              src="/Web-Images/career/senior-officer-warehouse.pdf"
              className="w-full h-full rounded"
              title="Senior Officer Warehouse"
            />
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Careers;
