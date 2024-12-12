import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";
import { WorkSectiondataprops } from "../models/Interface";

const WorkSection = ({ darkMode }: WorkSectiondataprops) => {
  return (
    <div className=" flex items-center justify-center h-full w-full">
      <div className="dark:bg-darkytext lg:mx-10 xl:mx-auto border   bg-white  ">
        
        <div className=" p-8 ">
          <div className="m-4 float-right flex  justify-center border  items-center transform transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={darkMode ? Works.image2 : Works.image}
              alt="insta"
              className="workImg dark:bg-white "
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="">
              <h4 className="text-[1.82rem] leading-none text-[#272727] dark:text-white font-medium mb-3 ">
                {Works.title}<br/>
                <span className="text-[1rem] italic text-titletext dark:text-white font-normal">
                  {" "}
                  ({Works.startDate} - {Works.endDate})
                </span>
              </h4>
              <p className="text-[1.24rem] font-light text-subtext dark:text-white mb-2 sm:mb-4">
                {Works.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
