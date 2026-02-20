"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xl">S</div>
          <span className="font-bold text-lg tracking-tight text-white">socialMedia</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#preview" className="hover:text-white transition-colors">
            Preview
          </a>
          <a href="#community" className="hover:text-white transition-colors">
            Community
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/signin" className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
          >
            Get App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
