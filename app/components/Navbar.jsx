"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import SITE from "../../data/site";

export default function Navbar() {
  const [solid, setSolid] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 10) setSolid(false);
      else setSolid(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          sticky top-4 z-50 mx-auto w-full max-w-6xl px-6 py-3 
          rounded-2xl shadow-xl border transition-all duration-300

          ${solid
            ? "bg-red-600 text-white border-red-700/30"
            : "bg-red-600/40 backdrop-blur-xl text-white border-white/20"
          }
        `}
      >
        <div className="flex items-center justify-between">

          {/* Logo + Title */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/rwcs-logo-15-Final.png"
              alt="RWCS Logo"
              className="w-11 h-11 rounded-full shadow-md object-cover"
            />
            <div className="text-lg font-bold tracking-wide">
              {SITE.title}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:opacity-90">Home</a>
            <a href="/services" className="hover:opacity-90">Services</a>
            <a href="/about" className="hover:opacity-90">About</a>
            <a href="/contact" className="hover:opacity-90">Contact</a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU — FIXED & ALWAYS VISIBLE */}
      {open && (
        <div
          className="
            fixed top-[90px] left-0 right-0 z-40 
            bg-red-600/95 backdrop-blur-xl 
            text-white rounded-2xl shadow-xl 
            border border-white/20
            mx-auto w-full max-w-6xl
            animate-slideDown
          "
        >
          <nav className="flex flex-col py-4 text-center text-base font-medium">

            <a href="/" className="py-3 hover:bg-red-700/30">Home</a>
            <a href="/services" className="py-3 hover:bg-red-700/30">Services</a>
            <a href="/about" className="py-3 hover:bg-red-700/30">About</a>
            <a href="/contact" className="py-3 hover:bg-red-700/30">Contact</a>

          </nav>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
    