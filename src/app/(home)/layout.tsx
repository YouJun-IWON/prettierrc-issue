import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default layout;
