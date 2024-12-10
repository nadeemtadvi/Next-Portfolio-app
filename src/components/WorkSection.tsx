import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";
import { WorkSectiondataprops } from "../models/Interface";

const WorkSection = ({ darkMode }: WorkSectiondataprops) => {
  return (
    <div className="flex  justify-center w-full h-full">
      <div className="">
        {/* Work Section Header */}
      

        {/* Work Content */}
        <div className="">
          {/* Work Image */}
          <div className=" float-right hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={darkMode ? Works.image2 : Works.image}
              alt="work image"
              className="workImg dark:bg-white rounded-full bg-cover"
              width={100}
              height={100}
            />
          </div>

          {/* Work Details */}
          <div>
            <h4 className="text-[1.2rem] font-bold text-white dark:text-darktext mb-3">
              {Works.title}
              
              <span className="text-[0.8rem] italic text-white dark:text-darktext">
                ({Works.startDate} - {Works.endDate})
              </span>
            </h4>
            <p className="text-[1rem] font-medium text-white dark:text-darktext mb-2 sm:mb-4">
              {Works.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
