import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#EBEBEB]">
      <footer className="bg-[#111] text-white pt-12 md:pt-16 mt-25">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-10">
            <div>
              <div className="mb-4">
                <Image
                  src="/Web-Images/NORPAK-LOGO.png"
                  width={120}
                  height={40}
                  alt="Logo"
                  className="object-contain w-28"
                />
              </div>
              <p className="font-roboto font-light text-[15px] md:text-[16px] text-white max-w-[220px]">
                Promoting sustainable textiles through ethical craftsmanship
                while empowering artisans and preserving traditional techniques
              </p>
            </div>
            <div>
              <h4 className="font-roboto font-bold text-[18px] md:text-[24px] tracking-tighter leading-[43px] mb-4 md:mb-5 md:ml-15">
                Sitemap
              </h4>
              <ul className="font-roboto font-semibold flex flex-col gap-3 md:ml-15 ">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Lookbook", href: "/lookbook" },
                  { name: "Certification", href: "/sustainability" },
                  { name: "Contact Us", href: "/#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[15px] md:text-[16px] text-white hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-roboto font-bold text-[18px] md:text-[24px] tracking-tighter leading-[43px] mb-4 md:mb-5">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-4">
                <div className="font-roboto font-semibold flex items-start gap-3">
                  <Image
                    src="/Web-Images/location.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="cursor-pointer mt-1 shrink-0"
                  />
                  <span className="font-roboto font-semibold text-[14px] md:text-[16px] max-w-[200px] text-white">
                    Off Narwala Road, Sultan Town, 38000 Faisalabad, Pakistan
                  </span>
                </div>
                <div className="font-roboto font-semibold flex items-center gap-3">
                  <Image
                    src="/Web-Images/mail-2.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="cursor-pointer shrink-0"
                  />
                  <a
                    href="mailto:info@norpak.pk"
                    className=" font-roboto font-semibold text-[14px] md:text-[16px] text-white hover:text-gray-300 transition-colors break-all"
                  >
                    info@norpak.pk
                  </a>
                </div>
                <div className="font-roboto font-semibold flex items-center gap-3">
                  <Image
                    src="/Web-Images/phone.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="cursor-pointer shrink-0"
                  />
                  <a
                    href="tel:+92412691635"
                    className="font-roboto font-semibold text-[14px] md:text-[16px] text-white"
                  >
                    +92 (0) 41 269 1635
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-roboto font-bold text-[18px] md:text-[24px] tracking-tighter leading-[43px] mb-4 md:mb-5">
                Social
              </h4>
              <div className="flex gap-12 mb-8 flex-wrap">
                <a
                  href="https://www.linkedin.com/company/norpakint/"
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/Web-Images/linkedin.svg"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.facebook.com/norpakint"
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                >
                  <FaFacebookF className="h-8 w-8" />
                </a>
                <a
                  href="https://www.instagram.com/norpakint/"
                  target="_blank"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/Web-Images/insta.svg"
                    alt="Instagram"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#FFFFFF33] py-5 text-center">
            <p className="font-roboto font-semibold text-[13px] md:text-sm text-white">
              Copyright 2019 - 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
