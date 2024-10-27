import React from "react";
import { AboutMe } from "../constant/constant";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="p-5 sm:mb-[3.5rem]">
      <div className="flex justify-center mb-10">
        <button id='about' className="rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
          {AboutMe.about}
        </button>
      </div>
      <div className="sm:grid grid-cols-2 items-center">
        <div className="mb-14 sm:mb-0 relative flex items-center justify-center">
          <div className="z-[10]  w-[260px] h-[260px] shadow-md rounded-[6px]">
            <Image
              src={AboutMe.image}
              alt="dp"
              width={100}
              height={100}
              className="rounded-[6px] !w-full !h-full !object-fill"
            />
          </div>
          <div className="z-[8] rounded-[6px] absolute left-0 right-[75px] m-auto top-[75px] bottom-0 border border-gray-300 w-[260px] h-[260px]"></div>
        </div>
        <div>
          <h4 className="text-[2rem] text-titletext font-medium mb-2 sm:mb-4">
            {AboutMe.title}
          </h4>
          <p className="text-[1.04rem] text-subtext mb-2 sm:mb-4">{AboutMe.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
