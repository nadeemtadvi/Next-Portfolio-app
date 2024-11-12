import React from "react";
import { Skills } from "../constant/constant";

const SkillSection = () => {
  return (
    <div className="mt-[2rem] mb-[0.5rem]   p-[1.5rem_0.6rem] sm:p-[1.5rem]">

      <div className="sm:p-5">
        <div className="flex justify-center  mb-10">
          <div className="text-center">
            <button id='skills' className="rounded-full dark:bg-darkmainColorten dark:text-darkmainColor bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
              {Skills.skill}
            </button>
            <p className="mt-3 text-[1.04rem] text-subtext dark:text-darksubtext  mb-2 sm:mb-4">
              {Skills.title}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-[repeat(_auto-fit,minmax(12rem,1fr)_)] gap-4 md:gap-8">
          {Skills.skillObj.map((item, index) => (
            <div key={index} className="border  border-gray-300 dark:border-darkmainColorten rounded-[6px] transform transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:bg-darkmainColorten hover:bg-mainColorten">
              <div className="flex justify-center items-center ">
                <div className="text-[38px] mt-8 text-mainColor dark:text-darkmainColor">
                {item.image && <item.image/>}
                </div>
              </div>
              <h4 className="text-center font-normal text-[1.04rem] dark:text-darksubtext text-subtext mt-6 mb-8 uppercase ">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
