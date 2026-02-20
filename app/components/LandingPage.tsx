"use client";

import React from "react";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import Preview from "./landing/Preview";
import CTA from "./landing/CTA";
import Footer from "./landing/Footer";

const LandingPage = () => {
  return (
    <div className="mx-auto flex flex-col w-full bg-[#09090b]">
      <Navbar />
      <Hero />
      <Features />
      <Preview />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
