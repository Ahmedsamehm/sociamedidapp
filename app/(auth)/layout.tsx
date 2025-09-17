import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 mx-auto">
        <div className="w-full max-w-lg">{children}</div>
      </div>
    </section>
  );
};

export default layout;
