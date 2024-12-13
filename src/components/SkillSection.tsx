import React from "react";
import { Skills } from "../constant/constant";
import WorkSection from "./WorkSection";
import { SkillSectiondataprops } from "../models/Interface";

import { SiStorybook } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";

const SkillSection = ({ darkMode }: SkillSectiondataprops) => {
  return (
    <div className=" dark:bg-darkbgcolor ">
      <div className=" max-w-screen-xl mx-auto py-8 px-4 sm:px-8  lg:py-12">
        <div className=" mx-auto">
          <div
            id="skills"
            className="mb-16 dark:text-darkbgcolor  text-[2rem]   text-primaryColor  text-center  ]"
          >
            <h6 className=" inline-block w-[240px]   text-[1.8rem]  font-light border border-gray-200 bg-secondaryColor  dark:-darkprimaryColor">
              {Skills.skill} & Exp.
             
            </h6>
          </div>
          <div className="relative md:grid grid-cols-2">
          <div className="Experience-part ">
              <WorkSection darkMode={darkMode} />
            </div>
            <div className="py-4 sm:p-0 Skills-part sm:ml-10">
              <div className=" text-center">
                <div className="">
                  <div className="secondaryColorspace-nowrap   grid grid-cols-2 gap-1 text-primaryColor dark:text-secondaryColor">
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext  ">
                      <span className="  bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiFigma />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Figma</h4>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext ">

                      <span className="    bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <FaGitAlt />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Git</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="    bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiStorybook />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Storybook</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="    bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiTailwindcss />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Tailwind Css</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="   bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <IoLogoJavascript />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Javascript</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="   bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <FaReact />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">React</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="    bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiTypescript />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Typescript</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="    bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <DiPhotoshop />
                      </span>
                      <h4 className=" text-[15px] sm:text-[20px] font-light">Adobe Photoshop</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="  bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <DiIllustrator />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Adobe Illustrator</h4>

                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext">

                      <span className="    bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor  rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiRedux />
                      </span>
                      <h4 className="text-[15px] sm:text-[20px] font-light">Redux</h4>

                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
