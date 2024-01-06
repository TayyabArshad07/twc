import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="h-fit py-4 px-5 grid justify-items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
