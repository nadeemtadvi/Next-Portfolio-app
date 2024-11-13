import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";
import { WorkSectiondataprops } from "../models/Interface";


const WorkSection = ({darkMode}:WorkSectiondataprops) => {
  return (
    <div className="sm:mb-[2rem] p-5">
      <div className="mb-14">
        <h4 id='work' className="dark:text-white text-[2rem]   text-[#252525] font-medium">
        <span className="p-[0px_42px_4px_0px] border-b-2 border-mainColor dark:border-darkmainColor">

          {Works.button}
        </span>
         
        </h4>
      </div>

      <div className="sm:grid grid-cols-[300px_auto] ">
        <div className="flex md:mt-0 md:mb-0 mb-10 sm:mb-2 mt-5 justify-center sm:justify-start items-center transform transition-transform duration-300 ease-in-out hover:scale-105">
        <Image src={darkMode ? Works.image2 : Works.image} alt="insta" className="workImg dark:bg-white " width={250} height={250} />
        </div>
        <div>
          <div>
            <h4 className="text-[1.6rem] text-[#272727] dark:text-darktitletext font-medium mb-2 ">{Works.title}
              <span className="text-[1.2rem] text-titletext dark:text-darktitletext font-normal">  ({Works.startDate} - {Works.endDate})</span>
            </h4>
            <p className="text-[1.04rem] sm:text-justify text-subtext dark:text-darksubtext mb-2 sm:mb-4">{Works.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
