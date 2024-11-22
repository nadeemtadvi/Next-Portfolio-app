import React from "react";
import { Skills } from "../constant/constant";
import WorkSection from "./WorkSection";
import { SkillSectiondataprops } from "../models/Interface";
import jarImage from "../assets/Images/Untitled_design__2_-removebg-preview.png";
import FlowerImg from "../assets/Images/Shapes/whiteFlower.png";
import springImg from "../assets/Images/Shapes/spring.png";
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

const SkillSection = ({ darkMode }: SkillSectiondataprops) => {
  return (
    <div className="bg-purplelight border-t-2 border-blackshadow">
      <div className=" max-w-screen-xl mx-auto py-8 px-4 sm:px-8  lg:py-16">
        <div className=" mx-auto">
          <div className="relative md:grid grid-cols-2">
          
            <div className=" Skills-part py-10 ">
            <Image
              src={FlowerImg}
              alt="dp"
              width={120}
              height={120}
              className="absolute w-[50px] sm:w-[120px] top-[-44rem] sm:top-[-13rem] bottom-0 left-[14rem] sm:left-[-20rem] right-0 m-auto "
            />
            <Image
              src={springImg}
              alt="dp"
              width={120}
              height={120}
              className="absolute  top-[4rem] left-[2rem] rotate-[-32deg] "
            />
              <div className="">
                <h4
                  id="skills"
                  className="dark:text-white text-[2rem]  mb-12 text-[#252525]  text-center  bg-[]"
                >
                  <span className="rotate-[14deg] inline-block rounded-[10px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] p-[5px_20px_6px] text-white font-medium border-2 border-[#323130]  bg-greenreg  dark:-darkblackshadow">
                    {Skills.skill}
                  </span>
                </h4>
              </div>
              <div className=" text-center">
                <div className="relative mx-auto pt-16 w-[300px] md:w-[400px]">
                  <Image
                    src={jarImage}
                    alt="dp"
                    width={300}
                    height={300}
                    className="inline-block"
                  />
                  <div className="icon-container text-white">
                    <span className="absolute bottom-[5rem] left-[3.85rem] sm:left-[14rem] bg-[#9723C9]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <SiRedux />
                    </span>
                    <span className="absolute bottom-[5.2rem] left-[9.8rem] bg-[#FF00F5]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <SiFigma />
                    </span>
                    <span className="absolute bottom-[8.15rem] left-[7.4rem] bg-[#FF4911]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <FaGitAlt />
                    </span>

                    <span className="absolute bottom-[2rem] right-[7.6rem] bg-[#FF00F5]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <SiStorybook />
                    </span>
                    <span className="absolute bottom-[2rem] left-[4.6rem] sm:left-[7.3rem] bg-[#90A7EB]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <SiTailwindcss />
                    </span>
                    <span className="absolute bottom-[2rem] left-[10rem] sm:left-[10.5rem] bg-[#ff9728]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <IoLogoJavascript />
                    </span>
                    <span className="absolute bottom-[5rem] left-[6.5rem] bg-[#90A7EB]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <FaReact />
                    </span>
                    <span className="absolute bottom-[7.98rem] left-[4rem] sm:left-[12rem] bg-[#90A7EB]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <SiTypescript />
                    </span>
                    <span className="absolute top-0 left-[14rem] bg-[#90A7EB]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <DiPhotoshop />
                    </span>
                    <span className="absolute top-[3rem] left-[9rem] sm:left-[10rem] bg-[#ff9728]  text-[2rem] rounded-full w-14 h-14 flex items-center justify-center  border-[1.5px] border-[#323130] shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)]">
                      <DiIllustrator />
                    </span>
                    <div className="jar-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Experience-part ">
              <WorkSection darkMode={darkMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
