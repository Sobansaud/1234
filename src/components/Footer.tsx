
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const topSearchers = [
  { BikeName: "Hayabusa", link: "/Inventory/hayabusa" },
  { BikeName: "Kawasaki", link: "/Inventory/kawasaki" },
  { BikeName: "Royal Enfield", link: "/Inventory/royal-enfield" },
];

const Footer = () => {
  return (
    <footer className="relative z-50 h-auto w-full bg-black text-white/60 shadow-foot px-5">
      <div className="h-[70%] w-full flex flex-wrap items-start justify-center gap-10 border-b-[1px] border-zinc-800 px-5">
        <div className="h-full w-[38vh] flex items-start py-7 flex-col">
          <h1 className="font-bold text-2xl capitalize">SM-COLLECTIONS</h1>
          <p className="pr-4">Excellence in every ride, passion in every detail</p>
        </div>

        {/* Trending Searches Section */}
        <div className="h-full w-[38vh] flex items-start py-7 flex-col">
          <h1 className="font-bold text-2xl capitalize">Trending Searches</h1>
          <ul>
            {topSearchers.map((val, ind) => (
              <Link key={ind} href={val.link}>
                <li className="my-1 uppercase text-sm hover:text-red-900">{val.BikeName}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="h-full w-[38vh] flex items-start py-7 flex-col">
          <h1 className="font-bold text-2xl capitalize">Quick Links</h1>
          <ul>
            {["home", "About", "Contact", "Inventory", "Cart"].map((val, ind) => (
              <Link key={ind} href={`/${ind > 0 ? val : ""}`}>
                <li className="my-1 uppercase text-sm hover:text-red-900">{val}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="h-full w-[38vh] flex items-start py-7 flex-col">
          <h1 className="font-bold text-2xl capitalize">Follow us</h1>
          <div className="h-16 w-full flex gap-2 items-center justify-start">
            <span className="relative h-10 w-10 inline-block overflow-hidden">
              <a
                href="https://www.linkedin.com/in/muhammad-soban-saud-235a6b2ba/"
                className="absolute h-full w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-full w-full rounded-sm text-white/60" />
              </a>
            </span>
            <span className="relative h-10 w-10 inline-block overflow-hidden">
              <a
                href="http://www.youtube.com/@all-rounder-lifewithmemons2700"
                className="absolute h-full w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-full w-full rounded-sm text-white/60" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full py-5 px-5 flex items-center justify-center">
        <h1 className="xs:text-sm text-xs text-center">
          &copy; 2024 Muhammad Soban Saud (SM-AUTOMOBILES). All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
