import React from "react";
import { Skills } from "../constant/constant";

const SkillSection = () => {
  return (
    <div className="mt-[2rem] mb-[0.5rem]   p-[1.5rem_0.6rem] sm:p-[1.5rem]">
      <div className="">
        <div className="">
          <div className="mb-14">
            <h4
              id="skills"
              className="dark:text-white text-[2rem]  mb-2 text-[#252525] font-medium"
            >
              <span className="p-[0px_42px_4px_0px] border-b-2 border-mainColor dark:border-darkmainColor">
                {Skills.skill}
              </span>
            </h4>
            <p className=" text-[1.04rem] text-subtext dark:text-darksubtext  mb-2 sm:mb-4">
              {Skills.title}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(_auto-fit,minmax(12rem,1fr)_)] gap-4 md:gap-8">
          {Skills.skillObj.map((item, index) => (
            <div
              key={index}
              className="border  border-gray-300 dark:border-darkmainColorten rounded-[6px] transform transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:bg-darkmainColorten hover:bg-mainColorten"
            >
              <div className="flex justify-center items-center ">
                <div className="text-[38px] mt-8 text-mainColor dark:text-darkmainColor">
                  {item.image && <item.image />}
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
