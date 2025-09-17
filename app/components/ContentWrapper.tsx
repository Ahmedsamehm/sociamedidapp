import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full  md:w-lg lg:w-xl xl:w-3xl 2xl:w-4xl  mx-auto p-2 lg:px-0 ">{children}</section>;
};

export default ContentWrapper;
