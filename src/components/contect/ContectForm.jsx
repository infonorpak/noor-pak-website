"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reveal bg-[#EBEBEB]">
      <Toaster position="top-right" />
      <div id="contact" className="Mycontainer grid md:grid-cols-2 bg-black">
        <div className="order-2 md:order-1 px-5 sm:px-5 md:px-10 lg:px-10 py-10 md:pt-10 lg:pt-10 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
          />
          <input
            type="text"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-[#FFFFFF1A] text-white placeholder-[#FFFFFFB2] rounded-xl px-5 py-4 text-[14px] md:text-[16px] outline-none focus:ring-2 focus:ring-[#2D3845] transition-all resize-none"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="font-roboto font-semibold bg-[#EBEBEB] text-[#0c0a0b] tracking-wide uppercase leading-[20px] text-[14px] md:text-[16px] px-6 py-4 rounded-lg transition-colors duration-200 cursor-pointer disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
        <div className="order-1 md:order-2 pl-5 sm-pl-0 pt-10 pr-5  flex flex-col justify-center pr-0 md:pr-10">
          <h2 className="font-garnett-medium font-bold text-[24px] md:text-[52px] mb-5 tracking-tighter leading-[43px] mb-5 md:mb-7 text-white">
            Contact us
          </h2>
          <p className="font-garnett text-white text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
            Want to learn more about Norpak International and our products?
            Discover our story and explore our sustainable, thoughtfully crafted
            designs.{" "}
          </p>
          <div className="space-y-4 md:space-y-5">
            <p className="font-garnett text-white text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              Keen on joining our team of dedicated professionals?
            </p>
            <p className="font-garnett text-white text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5">
              We'd love to hear from you.
            </p>
            <p className="font-garnett text-white text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px] mb-5 break-all">
              Drop us a line at{" "}
              <a
                href="mailto:info@norpak.pk"
                className=" font-garnett text-white text-[14px] md:text-[16px] tracking-[-0.5px] leading-[24px]"
              >
                info@norpak.pk
              </a>{" "}
              or by completing the below form:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
