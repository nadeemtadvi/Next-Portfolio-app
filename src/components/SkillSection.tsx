import React from "react";
import { Skills } from "../constant/constant";
import WorkSection from "./WorkSection";
import { SkillSectiondataprops } from "../models/Interface";

import Image from "next/image";
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
import pinImage from "../assets/Images/Shapes/pngwingReverse.png";

const SkillSection = ({ darkMode }: SkillSectiondataprops) => {
  return (
    <div className="bg-purplelight dark:bg-darkbgcolor border-t-2 border-purplelight">
      <div className=" max-w-screen-xl mx-auto py-8 px-4 sm:px-8  lg:py-16">
        <div className=" mx-auto">
          <div
            id="skills"
            className="mb-16 dark:text-darkbgcolor  text-[2rem]   text-[#252525]  text-center  ]"
          >
            <h6 className=" inline-block w-[240px]  text-[1.8rem]  font-light border border-gray-200 bg-white  dark:-darkblackshadow">
              {Skills.skill} & Exp.
             
            </h6>
          </div>
          <div className="relative md:grid grid-cols-2">
          <div className="Experience-part ">
              <WorkSection darkMode={darkMode} />
            </div>
            <div className=" Skills-part ml-10">
              <div className=" text-center">
                <div className="">
                  <div className="  grid grid-cols-2 gap-1 text-[#252525]">
                    <div className="flex items-center gap-6  bg-white p-5  ">
                      <span className="  bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiFigma />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Figma</h4>
                    </div>
                    <div className="flex items-center gap-6  bg-white p-5 ">

                      <span className="    bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <FaGitAlt />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Git</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="    bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiStorybook />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Storybook</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="    bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiTailwindcss />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Tailwind Css</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="   bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <IoLogoJavascript />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Javascript</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="   bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <FaReact />
                      </span>
                      <h4 className="text-[1.24rem] font-light">React</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="    bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiTypescript />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Typescript</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="    bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <DiPhotoshop />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Adobe Photoshop</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="  bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <DiIllustrator />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Adobe Illustrator</h4>

                    </div>
                    <div className="flex items-center gap-6  bg-white p-5">

                      <span className="    bg-white text-[1.2rem]  rounded-full w-10 h-10 flex items-center justify-center  border-[1.5px]  ">
                        <SiRedux />
                      </span>
                      <h4 className="text-[1.24rem] font-light">Redux</h4>

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
