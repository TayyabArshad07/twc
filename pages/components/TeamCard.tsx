import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Member1 from "@/public/img/TeamMember1.png";

const TeamCard = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Image src={Member1} className="person-image" alt="logo-pic" />
        </div>
        <div className="card-back">
          <div className="person-info">
            <h1 className="font-bold">John Doe</h1>
            <p>Senior Web Developer</p>
            <div className="flex justify-center gap-2 text-2xl pt-4">
              <Link  href={"https://www.facebook.com/"} target="_blank" ><FaFacebook className='facebook' /></Link>
              <Link  href={"https://www.twitter.com/"} target="_blank" ><FaTwitter className='twitter' /></Link>
              <Link  href={"https://www.linkedin.com/"} target="_blank" ><FaLinkedin className='linkedin' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
