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
    <div className="bg-purplelight dark:bg-darkbgcolor">
      {" "}
      <div className="max-w-screen-xl mx-auto">
        <div className="relative md:grid grid-cols-2 px-4 sm:px-8  py-6 lg:py-20">
          <Image
            src={arrowImg}
            alt="dp"
            width={120}
            height={120}
            className="absolute w-[80px] md:w-[120px] rotate-[-58deg] bottom-[4rem]  left-[-15rem] sm:left-[-18rem] md:left-0 right-0 m-auto"
          />
          <div className="flex justify-start items-center ">
            <div>
              <h5 className="text-titletext dark:text-white font-light text-[1.24rem] leading-[30px] sm:leading-[48px] mb-2">
                {InterSect.title}
                <span className="text-blackshadow dark:text-white">
                  {" "}
                  {InterSect.spanname}
                </span>{" "}
                <br />
                <span className="text-blackshadow dark:text-white uppercase font-bold text-[2rem] sm:text-[2.4rem] lg:text-[3rem] xl:text-[3.6rem]">
                  {InterSect.middletext} <br />
                  {InterSect.spanwork}
                </span>
              </h5>
              <p className=" text-subtext dark:text-white font-light text-[1.24rem] mb-6">
                {InterSect.subtitle}
              </p>
              <div className="mb-5">
                <button className="bg-redreg      text-[#252525] font-light dark:text-darkbgcolor  p-[5px_24px_6px] ">
                  <a href="#contact">{InterSect.contact}</a>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mr-3 sm:mr-6 my-10 md:m0-0 lg:mr-0 md:h-[400px] flex justify-end lg:justify-center items-center">
              <div className="  flex justify-center items-center">
                <div>
                  <div className="relative h-[220px] sm:h-[260px] w-[170px] sm:w-[210px] img-container bg-purplereg flex items-center justify-start border  ">
                    <Image
                      src={darkMode ? userinfo.picture2 : userinfo.picture}
                      alt="dp"
                      width={240}
                      height={240}
                      className="absolute bottom-0 left-[-25px]   w-full"
                    />
                    <span className="lapbox absolute top-0 left-[-6.5rem] bg-purplereg  text-[2.64rem]  w-16 h-16 flex items-center justify-center  border  ">
                      <FaLaptopCode />
                    </span>
                  </div>
                  <div className="absolute top-0 right-0 flex items-center bottom-0">
                    <h4 className="font-light text-[0.8rem] vertical-rl flex items-center gap-2 text-blackshadow dark:text-white">
                      {InterSect.follow}
                      <div className="w-[1px] h-14 bg-blackshadow dark:bg-darktext"></div>
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
                    </h4>
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
