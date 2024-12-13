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
  const Multiskill = [
    { icon: SiFigma, title: "Figma" },
    { icon: SiStorybook, title: "Storybook" },
    { icon: SiTailwindcss, title: "Tailwind" },
    { icon: FaReact, title: "React" },
    { icon: SiRedux, title: "Redux" },
    { icon: IoLogoJavascript, title: "Javascript" },
    { icon: SiTypescript, title: "Typescript" },
    { icon: FaGitAlt, title: "Git" },
    { icon: DiPhotoshop, title: "Photoshop" },
    { icon: DiIllustrator, title: "Illustrator" },
  ];

  return (
    <div className=" dark:bg-darkbgcolor ">
      <div className=" max-w-screen-xl mx-auto py-8 px-4 sm:px-8  lg:py-12">
        <div className=" mx-auto">
          <div
            id="skills"
            className="pb-8 lg:pb-12 dark:text-darkbgcolor  text-[2rem]   text-primaryColor  text-center  ]"
          >
            <h6 className=" inline-block w-[240px]   text-[1.8rem]  font-light border border-gray-200 bg-secondaryColor  dark:-darkprimaryColor">
              {Skills.skill} & Exp.
            </h6>
          </div>
          <div className="relative pt-8 lg:pt-12 lg:grid grid-cols-2">
            <div className="Experience-part ">
              <WorkSection darkMode={darkMode} />
            </div>
            <div className="pt-8 sm:pt-12 lg:pt-0  Skills-part xl:ml-10">
              <div className=" text-center">
                <div className="">
                  <div className="secondaryColorspace-nowrap   grid grid-cols-2 gap-1 text-primaryColor dark:text-secondaryColor">
                    {Multiskill.map((item, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[42px_auto] items-center overflow-hidden  bg-secondaryColor py-2 sm:p-5 dark:bg-darkytext  "
                      >
                        <span className="  bg-secondaryColor text-[0.96rem] text-primaryColor sm:text-[1.2rem] dark:text-primaryColor rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  border-[1.5px]  ">
                          {item.icon && <item.icon />}
                        </span>
                        <h4 className="text-[15px] text-start ml-2 sm:text-[20px] font-light">
                          {item.title}
                        </h4>
                      </div>
                    ))}
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
