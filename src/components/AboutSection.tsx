import React from "react";
import { AboutMe } from "../constant/constant";
import Image from "next/image";
import imgStatic from "../assets/Images/profilee.png";
import testimonialImg from "../assets/Images/Shapes/testimonialone.png";
import testimonialImg2 from "../assets/Images/Shapes/testimonialtwo.png";
import LightImg from "../assets/Images/Shapes/Light.png";
import { AboutSectiondataprops } from "../models/Interface";

const AboutSection = ({ darkMode }: AboutSectiondataprops) => {
  return (
    <div className="">
      <div className="overflow-x-hidden whitespace-nowrap bg-blackshadow border-t-2 border-b-2 border-blackshadow  text-[1.4rem] font-medium text-white dark:text-darktext">
        <div className="moveelement">
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
          <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
        </div>
      </div>
      <div className={`${darkMode ? "":"bg-grid "}`}>
        <div className=" mx-auto max-w-screen-xl  ">
          <div className="md:grid grid-cols-[200px_auto] lg:grid-cols-[324px_auto] gap-4 lg:gap-10   lg:py-28 px-4 sm:px-8 py-12">
            <div className=" flex items-center justify-center my-8 md:my-0">
              <div className="relative w-[280px] md:w-[200px] lg:w-[324px] transform transition-transform duration-300 ease-in-out hover:scale-105">
               <div className="">
                <Image
                  src={imgStatic}
                  alt="dp"
                  width={100}
                  height={100}
                  className="  !w-full !h-full !object-fill"
                />
                </div>
                <Image
                  src={LightImg}
                  alt="dp"
                  width={65}
                  height={65}
                  className="absolute  top-[-3rem]  left-[-1rem] "
                />
              </div>
            </div>
            <div className="relative flex items-center justify-center mx-4 md:mx-10 lg:mx-16">
              <p className="bg-yellowlight border-2  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]  border-blackshadow text-[1.04rem] p-5 rounded-[10px] text-subtext dark:text-darkytext mb-2 sm:mb-4 text-justify">
                {AboutMe.subtitle}
              </p>
              <div className="">
              <Image
                src={testimonialImg}
                alt="dp"
                className="absolute w-6 xl:w-12  lg:bottom-[3rem] bottom-[-1.5rem] md:bottom-[0.5rem] lg:right-[-4rem] right-[-0.5rem] md:right-[-2.5rem]  "
              />
              <Image
                src={testimonialImg2}
                alt="dp"
                className="absolute w-6 lg:w-8 xl:w-12 lg:top-[3rem] top-[-1.5rem] md:top-[0.5rem] lg:left-[-4rem] left-[-0.5rem] md:left-[-2.5rem] rotate-180 -scale-x-100"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
