import React from "react";
import { AboutMe } from "../constant/constant";
import Image from "next/image";
import testimonialImg from "../assets/Images/Shapes/testimonialone.png";
import testimonialImg2 from "../assets/Images/Shapes/testimonialtwo.png";
import { AboutSectiondataprops } from "../models/Interface";

const AboutSection = ({ darkMode }: AboutSectiondataprops) => {
  return (
    <div className="">
      <div className="overflow-x-hidden secondaryColorspace-nowrap bg-purplereg dark:bg-primaryColor border-t border-b border-buttonColor text-[15px] sm:text-[20px] font-normal text-primaryColor dark:text-secondaryColor">
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
      <div className={`${darkMode ? "" : " "}`}>
        <div className=" mx-auto max-w-screen-xl  ">
          <div className="max-w-screen-lg mx-auto lg:pb-12 lg:pt-24  pb-8 pt-16">
           
            <div className="relative flex items-center justify-center mx-4 md:mx-10 lg:mx-16">
              <p className=" border font-light  dark:bg-darkytext    text-[15px] sm:text-[20px] p-4 sm:p-12  text-primaryColor dark:text-secondaryColor  text-justify">
                {AboutMe.subtitle}
              </p>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  src={testimonialImg}
                  alt="dp"
                  className="absolute w-6 xl:w-12  lg:bottom-[3rem] bottom-[-1.5rem] md:bottom-[0.5rem] lg:right-[-4rem] right-[-0.5rem] md:right-[-2.5rem]  "
                />
                <Image
                  width={100}
                  height={100}
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
