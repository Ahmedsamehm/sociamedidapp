"use client";
import React, { useContext } from "react";

import { AppSidebar } from "./AppSidebar";

import { Navbar } from "./navBar";
import { useEditContext } from "../context/EditContext";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { scrollRef } = useEditContext();
  return (
    <div ref={scrollRef} className="w-full  inset-0 bg-background overflow-auto min-h-screen" style={{ height: "100vh" }}>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <Navbar />
      </nav>
      <div className="flex w-full   ">
        <aside className="flex-shrink-0 ">
          <AppSidebar />
        </aside>
        <main className="flex-1 w-full relative ">{children}</main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
