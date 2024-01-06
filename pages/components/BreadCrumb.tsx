import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const BreadCrumb = () => {
  return (
    <div>
      <div className='flex items-center gap-[60px] justify-start text-white text-2xl bg-[#2ecc71] px-5 py-4 rounded-lg'>
        <h1>Web-Development & IT Consultant</h1>
        <Link href={''} className='hover:text-white p-2 hover:rounded-full hover:bg-[#f8df57] transition-all ease-in-out duration-700'><FaArrowRight /></Link>
      </div>
    </div>
  )
}

export default BreadCrumb
