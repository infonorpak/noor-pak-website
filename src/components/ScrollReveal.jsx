"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const previousElements = document.querySelectorAll(".reveal.active");
    previousElements.forEach((el) => el.classList.remove("active"));
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}
