import React from "react";
import Image from "next/image";
import Link from "next/link";
import Buttons from "./Buttons";
import logo from "@/public/img/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarItems">
        <Link href="/Services">
          <Image src={logo} alt="logo-pic" width={50} />
        </Link>
      </div>
      <div className="navbarItems tabs">
        <Link href={"/Services"}>Services</Link>
        <Link href={"/OurTeam"}>Our Team</Link>
        <Link href={"/ContactUs"}>Contact Us</Link>
      </div>
      <div className="navbarItems">
        <Buttons link="/signup" btnText="Sign Up" />
      </div>
    </nav>
  );
};

export default Navbar;
