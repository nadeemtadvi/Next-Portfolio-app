'use client'
import React, { useState } from "react";
import { headerItem, DwnldButton, images } from "@/src/constant/constant";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const [active, setActive] = useState<number | null>(null)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }
  return (
    <>
      <div className="mb-[0rem] shadow-sm ">
        <div className="flex justify-between items-center p-5 ">
          <div className="">
            <Image src={images.image} alt="logo" className="logo-dev" width={170} height={170} />
          </div>
          <div className="hidden sm:block">
            <ul className="flex justify-between items-center gap-14">
              {Object.values(headerItem).map((item, index) => (
                <li key={index} onClick={() => setActive(index)} className={`${active === index ? 'active':''} hover:text-mainColor hover:bg-mainColorten p-[2px_10px_3px] rounded-[6px] `}>
                  <a href={`#${item.page}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
         
          <div>
            <button className="border border-mainColor text-mainColor rounded-[6px] p-[1px_10px_2px] sm:p-[5px_24px_6px] hover:bg-mainColorten">
             <Link href="/Nadeem_CV.pdf" download="Nadeem_CV.pdf" passHref>{DwnldButton.btn}</Link> 
            </button>
          </div>
          <div className="sm:hidden block">
            <div className="relative">
              <button onClick={handleToggle} className="text-xl">
                <HiMenu />
              </button>    
              {toggle ? ( <div className="absolute top-[45px] bg-white left-[-120px]">
                <ul className="shadow-md min-w-[150px]  !pb-0 rounded-[6px]">
                  {Object.values(headerItem).map((item, index) => (
                    <li key={index} className="p-2.5  border-b border-gray-300 hover:bg-gray-300">
                      <a href={`#${item.page}`}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>):''}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
