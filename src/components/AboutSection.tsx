import React from "react";
import { AboutMe } from "../constant/constant";
import Image from "next/image";
import imgStatic from "../assets/Images/profilee.png"
import testimonialImg from "../assets/Images/Shapes/testimonialone.png"
import testimonialImg2 from "../assets/Images/Shapes/testimonialtwo.png"
import LightImg from "../assets/Images/Shapes/Light.png"

const AboutSection = () => {
  return (
    <div className=" ">
      <div className="bg-white border-t-2 border-b-2 border-mainColor  text-[1.4rem] font-semibold text-mainColor">
        <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
        <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
        <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
        <h4 className="inline-block py-3 px-12"> {AboutMe.title}</h4>
      </div>
      <div className="bg-grid">
      <div className=" mx-auto max-w-screen-xl  ">
        <div className="lg:grid grid-cols-2 h-[500px]">
          <div className="  flex items-center justify-center">
            <div className="relative w-[324px] transform transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src={imgStatic}
                alt="dp"
                width={100}
                height={100}
                className="  !w-full !h-full !object-fill"
              />
               <Image
                    src={LightImg}
                    alt="dp"
                    width={65}
                    height={65}
                    className="absolute  top-[-3rem]  left-[-1rem] "
                  />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
           
            <p className="bg-[#fdfd96] border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]  border-mainColor text-[1.04rem] p-5 rounded-[10px] text-subtext dark:text-darksubtext mb-2 sm:mb-4 text-justify">
              {AboutMe.subtitle}
            </p>
            <Image
                    src={testimonialImg}
                    alt="dp"
                    width={45}
                    height={45}
                    className="absolute  bottom-[8rem]  right-[-3.5rem] "
                  />
            <Image
                    src={testimonialImg2}
                    alt="dp"
                    width={45}
                    height={45}
                    className="absolute  top-[8rem] left-[-3.5rem] rotate-180 -scale-x-100"
                  />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutSection;
