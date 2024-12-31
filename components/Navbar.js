"use client"
import Link from "next/link";
import React, { useState } from "react";
import { routes } from "../data/global";

function Navbar({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
   <div className="container">
     <nav className="bg-[#000A1F] p-5 flex items-center justify-between relative">
    {/* Logo */}
    <Link href="/" className="font-bold text-lg cursor-pointer">
      <span className="text-white  text-xl flex items-center">
        {"safayet.dev".split("").map((letter, index) => (
          <span
            key={index}
            className="hover:text-[#00C7FF] font-normal font-c hover:-mt-2 transition-all duration-500"
          >
            {letter}
          </span>
        ))}
      </span>
    </Link>

    {/* Hamburger Icon */}
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
    </div>

   {/* Full-Screen Menu Overlay */}
   <div
        className={`fixed inset-0 z-50 bg-[#000A1F] flex items-center justify-center transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button (Cross Icon) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-[#00C7FF] focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className="space-y-8 text-white text-3xl text-center">
          <li className="hover:text-[#00C7FF] transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#00C7FF] transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#00C7FF] transition-colors">
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    <ul
        className={`px-6 py-1 border border-gray-500 rounded-[20px] hidden md:block absolute top-16 left-0 w-full bg-[#000A1F] md:static md:flex md:space-x-10 md:items-center md:w-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {routes.map((item, index) => (
          <li
            key={index}
            className={`list-none  text-white text-center md:text-left ${
              currentPage === item.title
                ? "opacity-100"
                : "opacity-40 hover:opacity-100 transition-opacity"
            } py-2 md:py-0`}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
  </nav>
   </div>
  
  );
}

export default Navbar;
