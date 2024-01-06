import React from "react";
import Image from "next/image";
import About_Image from "@/public/img/Blogging-bro.svg";

const Section01 = () => {
  return (
    <div>
      <h1 className="text-4xl text-center h-fit font-bold">About Services</h1>
      <div className="flex px-1">
        <p className="pt-10 text-[20px] font-normal">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ex
          aspernatur deleniti modi ipsa eligendi nulla. Fuga explicabo culpa,
          optio, illum alias laborum aut perferendis ratione repellendus
          laboriosam ad fugit at architecto deserunt atque sint tempore
          recusandae eligendi harum unde eaque sit? Consequuntur quis possimus
          esse, necessitatibus non laboriosam dolorem.
        </p>
        <Image src={About_Image} alt="" height={300} width={300} />
      </div>
    </div>
  );
};

export default Section01;
