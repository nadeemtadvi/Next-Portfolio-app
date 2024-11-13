import React from "react";
import { AboutMe } from "../constant/constant";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="p-5 sm:mb-[3.5rem]">
      <div className=" mb-14">
        <h4 id='about' className="  dark:text-white text-[2rem]  text-[#252525] font-medium ">
        <span className="p-[0px_42px_4px_0px] border-b-2 border-mainColor dark:border-darkmainColor">

        {AboutMe.about}
        </span>

        </h4>
      </div>
      <div className="sm:grid grid-cols-[330px_auto] ">
        <div className="mb-14 sm:mb-0 relative flex items-center justify-start transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="z-[10] ml-[35px] w-[260px] h-[260px] shadow-md  ">
            <Image
              src={AboutMe.image}
              alt="dp"
              width={100}
              height={100}
              className="  !w-full !h-full !object-fill"
            />
          </div>
          <div className="z-[8]   absolute left-0  m-auto top-[75px] bottom-0 border border-gray-300 dark:border-darkmainColorten w-[260px] h-[260px]"></div>
        </div>
        <div>
          <h4 className="text-[1.6rem] text-[#272727] dark:text-darktitletext font-medium mb-2">
            {AboutMe.title}
          </h4>
          <p className="text-[1.04rem] text-subtext dark:text-darksubtext mb-2 sm:mb-4 text-justify">{AboutMe.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
