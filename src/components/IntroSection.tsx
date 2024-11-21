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
import arrowImg from "../assets/Images/Shapes/arrow4.png"

const IntroSection = ({ darkMode }: IntroSectiondataprops) => {
  return (
    <div className="bg-[#ff97280d]">
      {" "}
   
      <div className="max-w-screen-xl mx-auto">
        <div className="relative sm:grid grid-cols-2 py-20">
          <Image
                    src={arrowImg}
                    alt="dp"
                    width={120}
                    height={120}
                    className="absolute rotate-[-58deg] bottom-[4rem] left-0 right-0 m-auto"
                  />
          <div className=" flex justify-start items-center -r -borderblack">
            <div>
              <h5 className="text-titletext dark:text-white font-medium text-[1.3rem] leading-[48px] mb-5">
                {InterSect.title}
                <span className="text-mainColor dark:text-darkmainColor">
                  {" "}
                  {InterSect.spanname}
                </span>{" "}
                <br />
                <span className="text-mainColor dark:text-darkmainColor uppercase font-bold text-[3.6rem]">
                  {InterSect.middletext} <br />
                  {InterSect.spanwork}
                </span>
              </h5>
              <p className="sm:w-[75%] text-subtext dark:text-darksubtext text-[0.93rem] mb-6">
                {InterSect.subtitle}
              </p>
              <div className="mb-5">
                <button className="bg-[#ff9728db] rounded-[8px] border-2 border-borderblack dark:bg-darkmainColor shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] text-white font-semibold dark:text-borderblack  p-[5px_24px_6px] hover:bg-[#111b8d]">
                  <a href="#contact">{InterSect.contact}</a>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="  flex justify-center items-center">
              <div>
                <div className="relative h-[260px] w-[210px] img-container bg-[#90A7EB] flex items-center justify-start border-[3px] border-[#323130] shadow-[8px_8px_0px_1px_rgba(0,0,0,0.8)]">
                  <Image
                    src={darkMode ? userinfo.picture2 : userinfo.picture}
                    alt="dp"
                    width={240}
                    height={240}
                    className="absolute bottom-0 left-[-25px]   w-full"
                  />
                   <span className="lapbox absolute top-0 left-[-6.5rem] bg-[#90A7EB]  text-[2.64rem]  w-16 h-16 flex items-center justify-center  border-2 border-[#323130] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <FaLaptopCode />
                </span>
                </div>
                <div className="absolute top-0 right-0 flex items-center bottom-0">
                  <h4 className="font-semibold text-[0.8rem] vertical-rl flex items-center gap-2 text-mainColor dark:text-darkmainColor">
                    {InterSect.follow}
                    <div className="w-[2px] h-14 bg-mainColor dark:bg-darkmainColor"></div>
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
  );
};

export default IntroSection;
