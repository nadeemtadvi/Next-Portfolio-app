import React from "react";
import { InterSect, userinfo } from "@/src/constant/constant";
import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { IntroSectiondataprops } from "../models/Interface";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


const IntroSection = ({darkMode}: IntroSectiondataprops) => {
  return (
    <div className="">
      <div className="sm:grid grid-cols-2 p-5">
        <div className=" flex justify-start items-center">
          <div>
            <h5 className="text-titletext dark:text-white font-semibold text-[2.6rem] leading-[48px] mb-5">
              {InterSect.title}
              <span className="text-mainColor dark:text-darkmainColor"> {InterSect.spanname}</span>{" "}
              {InterSect.middletext}
              <span className="text-mainColor dark:text-darkmainColor"> {InterSect.spanwork}</span>
            </h5>
            <p className="sm:w-[75%] text-subtext dark:text-darksubtext text-[0.93rem] mb-6">
              {InterSect.subtitle}
            </p>
            <div className="mb-5">
              <button className="bg-mainColor dark:bg-darkmainColor text-white dark:text-black rounded-[6px] p-[5px_24px_6px] hover:bg-[#111b8d]">
                <a href="#contact">{InterSect.contact}</a>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className=" relative flex justify-center items-center">
            <div>
              <div className=" mr-12 flex items-center justify-start">
                <Image
                  src={darkMode ? userinfo.picture2 : userinfo.picture}
                  alt="dp"
                  width={400}
                  height={460}
                />
              </div>
              <div className="absolute top-0 right-0 flex items-center bottom-0">
                <h4 className="text-[0.8rem] vertical-rl flex items-center gap-2 text-mainColor dark:text-darkmainColor">
                  {InterSect.follow}
                  <div className="w-[1px] h-14 bg-mainColor dark:bg-darkmainColor"></div>
                  <div className="text-[22px] flex gap-1">
                  <Link href="https://www.linkedin.com/in/nadeem-tadvi-290339159" target="_blank">
                  <FaLinkedin/>
                  </Link>
                  <FaSquareInstagram/>
                  <FaSquareWhatsapp/>
                  <Link href="https://github.com/nadeemtadvi" target="_blank">
                  <FaSquareGithub/>
                  </Link>
                  </div>

                 
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
