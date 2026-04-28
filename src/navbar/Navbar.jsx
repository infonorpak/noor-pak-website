"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  // { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Sustainability", link: "/sustainability" },
  { name: "Lookbook", link: "/lookbook" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Yeh function add karo Navbar component ke andar (useEffect se pehle)
  const handleContactClick = (e, link) => {
    if (link === "/#contact") {
      e.preventDefault();
      setIsOpen(false);
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#contact";
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true); // Upar scroll kiya → dikhao
      } else {
        setIsVisible(false); // Neeche scroll kiya → chhupao
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky top-0 w-full z-50 text-white transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="bg-[#000000] backdrop-blur-md">
        <div className="Mycontainer flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/Web-Images/NORPAK-LOGO.png"
              width={120}
              height={40}
              alt="Logo"
              className="object-contain w-28"
            />
          </Link>
          <div className="hidden min-[920px]:flex items-center gap-10">
            <nav className="flex items-center gap-12">
              {navLinks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={(e) => handleContactClick(e, item.link)}
                  className={`font-garnett text-[18px] pb-0 transition-colors relative group cursor-pointer ${
                    pathname === item.link
                      ? "text-[#FFFFFF]"
                      : "hover:text-[#FFFFFF]"
                  }`}
                >
                  {item.name}
                  {/* Active border */}
                  {pathname === item.link && (
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 border-b-2 border-white"></span>
                  )}
                  {/* Hover border */}
                  {pathname !== item.link && (
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-8"></span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <button
            className="min-[920px]:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <div className="min-[920px]:hidden flex flex-col items-center gap-6 py-6 bg-black/90">
            {navLinks.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={(e) => handleContactClick(e, item.link)}
                className={`font-garnett text-[20px] relative group ${
                  pathname === item.link
                    ? "text-[#FFFFFF]"
                    : "hover:text-[#FFFFFF]"
                }`}
              >
                {item.name}
                {pathname === item.link && (
                  <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-8 border-b-2 border-white"></span>
                )}
                {pathname !== item.link && (
                  <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-8"></span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
