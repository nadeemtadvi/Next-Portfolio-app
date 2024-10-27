// 'use client'
import React from "react";
import { userinfo, headerItem, DwnldButton } from "@/src/constant/constant";
import Image from "next/image";

const Header = () => {
  // const [navitem, setNavitem] = useState<boolean>(false)
  return (
    <>
      <div className="mb-[0rem] shadow-sm ">
        <div className="flex justify-between items-center p-5 ">
          <div className="">
            
          <Image src={headerItem.image} alt="logo" width={170} height={170} />

          </div>
          <ul className="flex justify-between items-center gap-14">
            {Object.values(headerItem).map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
          <div>
            <button className="border border-mainColor text-mainColor rounded-[6px] p-[5px_24px_6px]">
              {DwnldButton.btn}
            </button>
          </div>
        </div>
      </div>

      {/* {
            userinfo.skills.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))
        } */}
    </>
  );
};

export default Header;
