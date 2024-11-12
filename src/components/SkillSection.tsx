import React from "react";
import { Skills } from "../constant/constant";
import Image from "next/image";

const SkillSection = () => {
  return (
    <div className="mt-[2rem] mb-[0.5rem] bg-sectionColor dark:bg-darksectionColor  p-[1.5rem_0.6rem] sm:p-[1.5rem]">

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
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-3 sm:gap-8">
          {Skills.skillObj.map((item, index) => (
            <div key={index} className="border border-gray-300 dark:border-darkmainColorten rounded-[6px] transform transition-transform duration-300 ease-in-out hover:scale-105 dark:hover:bg-darkmainColorten hover:bg-mainColorten">
              <div className="flex justify-center items-center ">
                <div className="">
                <Image src={item.image} alt="insta" width={100} height={100} className="p-[20px_10px_0px_10px] !h-[100px] !w-[100px]" />
                </div>
              </div>
              <h4 className="text-center text-[1.04rem] dark:text-darksubtext text-subtext my-6 ">
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
