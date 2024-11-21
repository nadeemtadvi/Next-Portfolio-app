import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";
import { WorkSectiondataprops } from "../models/Interface";
import dotImg from "../assets/Images/Shapes/yellowstar.png";

const WorkSection = ({ darkMode }: WorkSectiondataprops) => {
  return (
    <div className=" flex items-center justify-center h-full w-full">
      <div className=" mx-auto border-2 border-black rounded-[16px] overflow-hidden bg-white w-[360px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
        <div className="relative py-1.5 px-4 border-b-2 border-black bg-[#ff9728db]">
          <span className=" dark:text-white text-[1.4rem]   text-white font-semibold uppercase ">
            {Works.button}
          </span>
          <Image
            src={dotImg}
            alt="dp"
            width={42}
            height={42}
            className="absolute  bottom-[0.41rem] left-[10rem] "
          />
        </div>
        <div className="scroll-style p-3  overflow-y-auto h-[400px]">
          <div className="m-4 float-right flex  justify-center border-2 border-[#323130] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] items-center transform transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={darkMode ? Works.image2 : Works.image}
              alt="insta"
              className="workImg dark:bg-white "
              width={100}
              height={100}
            />
          </div>
          <div>
            <div>
              <h4 className="text-[1.2rem] text-[#272727] dark:text-darktitletext font-bold mb-2 ">
                {Works.title}
                <span className="text-[0.9rem] italic text-titletext dark:text-darktitletext font-normal">
                  {" "}
                  ({Works.startDate} - {Works.endDate})
                </span>
              </h4>
              <p className="text-[1rem] font-medium text-subtext dark:text-darksubtext mb-2 sm:mb-4">
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
