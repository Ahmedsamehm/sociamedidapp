import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <section className="mx-auto  w-full">{children}</section>;
};

export default layout;
