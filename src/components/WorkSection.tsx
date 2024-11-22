import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";
import { WorkSectiondataprops } from "../models/Interface";
import dotImg from "../assets/Images/Shapes/yellowstar.png";

const WorkSection = ({ darkMode }: WorkSectiondataprops) => {
  return (
    <div className=" flex items-center justify-center h-full w-full">
      <div className=" lg:mx-10 xl:mx-auto border-2 border-blackshadow rounded-[16px] overflow-hidden bg-white xl:w-[380px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
        <div className="relative py-2 px-4 border-b-2 border-blackshadow bg-purplereg">
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
        <div className="scroll-style p-3  overflow-y-auto lg:h-[400px]">
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
              <h4 className="text-[1.2rem] leading-none text-[#272727] dark:text-darktitletext font-bold mb-3 ">
                {Works.title}<br/>
                <span className="text-[0.8rem] italic text-titletext dark:text-darktitletext font-normal">
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
