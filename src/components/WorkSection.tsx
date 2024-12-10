import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";
import { WorkSectiondataprops } from "../models/Interface";

const WorkSection = ({ darkMode }: WorkSectiondataprops) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-white dark:bg-black rounded-[6px] overflow-hidden xl:w-[380px] mx-auto lg:mx-10 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Work Section Header */}
        <div className="bg-purplereg py-2 px-4">
          <span className="text-white text-[1.4rem] font-semibold uppercase dark:text-darkytext">
            {Works.button}
          </span>
        </div>

        {/* Work Content */}
        <div className="p-3">
          {/* Work Image */}
          <div className="m-4 float-right hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={darkMode ? Works.image2 : Works.image}
              alt="work image"
              className="workImg dark:bg-white"
              width={100}
              height={100}
            />
          </div>

          {/* Work Details */}
          <div>
            <h4 className="text-[1.2rem] font-bold text-[#272727] dark:text-darktext mb-3">
              {Works.title}
              <br />
              <span className="text-[0.8rem] italic text-titletext dark:text-darktext">
                ({Works.startDate} - {Works.endDate})
              </span>
            </h4>
            <p className="text-[1rem] font-medium text-subtext dark:text-darktext mb-2 sm:mb-4">
              {Works.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
