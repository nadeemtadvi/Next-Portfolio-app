import React from "react";
import { InterSect, userinfo } from "@/src/constant/constant";
import Image from "next/image";
import { FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp, FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import { IntroSectiondataprops } from "../models/Interface";

const IntroSection = ({ darkMode }: IntroSectiondataprops) => {
  return (
    <div className={`dark:bg-darkbgcolor`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 py-6 lg:py-20">
          {/* Left Section */}
          <div className="flex justify-start items-center">
            <div>
              {/* Title Section */}
              <h5 className="text-titletext dark:text-darktext font-medium text-[0.93rem] leading-[30px] sm:leading-[48px] mb-2">
                {InterSect.title}{" "}
                <span className="text-black dark:text-darktext">
                  {InterSect.spanname}
                </span>
                <br />
                <span className="text-black dark:text-darktext uppercase font-bold text-[2rem] sm:text-[2.4rem] lg:text-[3rem] xl:text-[3.6rem]">
                  {InterSect.middletext}
                  <br />
                  {InterSect.spanwork}
                </span>
              </h5>
              {/* Subtitle */}
              <p className="lg:w-[75%] text-subtext dark:text-darktext text-[0.93rem] mb-6">
                {InterSect.subtitle}
              </p>
              {/* Contact Button */}
              <div className="mb-5">
                <button className="bg-redreg rounded-[6px] text-white font-medium dark:text-darkbgcolor px-6 py-2 hover:shadow-md">
                  <a href="#contact">{InterSect.contact}</a>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-end lg:justify-center items-center">
            <div className="relative flex justify-center items-center">
              {/* Profile Picture Container */}
              <div className="relative h-[220px] sm:h-[260px] w-[170px] sm:w-[210px] bg-purplereg flex items-center justify-start rounded-lg shadow-md hover:shadow-lg">
                <Image
                  src={darkMode ? userinfo.picture2 : userinfo.picture}
                  alt="Profile Picture"
                  width={240}
                  height={240}
                  className="absolute bottom-0 left-[-25px] w-full"
                />
                {/* Icon */}
                <span className="lapbox absolute top-0 left-[-6.5rem] bg-purplereg text-[2.64rem] w-16 h-16 flex items-center justify-center rounded-full shadow-md">
                  <FaLaptopCode />
                </span>
              </div>
              {/* Social Links */}
              <div className="absolute top-0 right-0 flex flex-col items-center gap-2">
                <h4 className="font-medium text-[0.8rem] text-black dark:text-darktext flex items-center">
                  {InterSect.follow}
                </h4>
                <div className="w-[2px] h-14 bg-black dark:bg-darktext"></div>
                <div className="text-[22px] flex gap-2">
                  <Link
                    href="https://www.linkedin.com/in/nadeem-tadvi-290339159"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                  <FaSquareInstagram />
                  <FaSquareWhatsapp />
                  <Link href="https://github.com/nadeemtadvi" target="_blank">
                    <FaSquareGithub />
                  </Link>
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
