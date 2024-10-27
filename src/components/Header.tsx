// 'use client'
import React from "react";
import { headerItem, DwnldButton } from "@/src/constant/constant";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="mb-[0rem] shadow-sm ">
        <div className="flex justify-between items-center p-5 ">
          <div className="">
            <Image src={headerItem.image} alt="logo" width={170} height={170} />
          </div>
          <div className="hidden sm:block">
            <ul className="flex justify-between items-center gap-14">
              {Object.values(headerItem).map((item, index) => (
                <li key={index}><a href={`#${item.page}`}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <button className="border border-mainColor text-mainColor rounded-[6px] p-[5px_24px_6px]">
              {DwnldButton.btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
