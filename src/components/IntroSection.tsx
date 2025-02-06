import React from "react";
import { InterSect, userinfo } from "@/src/constant/constant";
import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { IntroSectiondataprops } from "../models/Interface";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import arrowImg from "../assets/Images/Shapes/arrow4.png";

const IntroSection = ({ darkMode }: IntroSectiondataprops) => {
  return (
    <div className="bg-layoutColor dark:bg-darkbgcolor">
      {" "}
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative md:grid grid-cols-2 p-4 sm:px-8  lg:py-12">
          <Image
            src={arrowImg}
            alt="dp"
            width={120}
            height={120}
            className="absolute  contrast-[0.34] w-[80px] md:w-[120px] rotate-[-58deg] bottom-[4rem]  left-[-15rem] sm:left-[-18rem] md:left-0 right-0 m-auto"
          />
          <div className="flex justify-start items-center ">
            <div>
              <h5 className="text-lightColor dark:text-secondaryColor font-light text-[18px] sm:text-[20px] leading-[30px] sm:leading-[48px] mb-2">
                {InterSect.title}
                <span className="text-lightColor dark:text-secondaryColor">
                  {" "}
                  {InterSect.spanname}
                </span>{" "}
                <br />
                <span className="text-primaryColor dark:text-secondaryColor uppercase font-bold text-[2rem] sm:text-[2.4rem] lg:text-[3rem] xl:text-[3.6rem]">
                  {InterSect.middletext} <br />
                  {InterSect.spanwork}
                </span>
              </h5>
              <p className=" text-lightColor dark:text-secondaryColor font-light text-[18px] sm:text-[20px] mb-6">
                {InterSect.subtitle}
              </p>
              <div className="mb-5">
                <button className="boxShadow border-2 border-white bg-buttonColor  text-[18px] sm:text-[20px]    text-secondaryColor font-light dark:text-darkbgcolor  p-[5px_24px_6px] ">
                  <a href="#contact">{InterSect.contact}</a>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" sm:mr-6  md:m0-0 lg:mr-0 md:h-[400px] flex justify-end lg:justify-center items-center">
              <div className="  flex justify-center items-center">
                <div>
                  <div className="boxShadow relative h-[220px] sm:h-[260px]  sm:w-[210px] img-container bg-purplereg flex items-center justify-start border  ">
                    <Image
                      src={darkMode ? userinfo.picture2 : userinfo.picture}
                      alt="dp"
                      width={240}
                      height={240}
                      className="absolute bottom-0 left-[-25px]   w-full"
                    />
                    <span className="boxShadow lapbox text-primaryColor absolute top-0 left-[-6.5rem] bg-purplereg  text-[2.64rem]  w-16 h-16 flex items-center justify-center  border  ">
                      <FaLaptopCode />
                    </span>
                  </div>
                  <div className="mt-4 md:mt-0 md:absolute top-0 right-[1.34rem] flex items-center bottom-0">
                    <div className="font-light text-[0.8rem] writing-mode md:vertical-rl flex items-center gap-2 text-primaryColor dark:text-secondaryColor">
                      {InterSect.follow}
                      <div className="hidden md:block w-[1px] h-14 bg-primaryColor dark:bg-darktext"></div>
                      <div className="text-[22px] flex gap-1">
                        <Link
                          href="https://www.linkedin.com/in/nadeem-tadvi-290339159"
                          target="_blank"
                        >
                          <FaLinkedin />
                        </Link>
                        <FaSquareInstagram />
                        <FaSquareWhatsapp />
                        <Link
                          href="https://github.com/nadeemtadvi"
                          target="_blank"
                        >
                          <FaSquareGithub />
                        </Link>
                      </div>
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

export default IntroSection;
