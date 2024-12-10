import React from "react";
import { DwnldButton, InterSect, userinfo } from "@/src/constant/constant";
import Image from "next/image";
import { FaLinkedin, FaLaptopCode } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareGithub,
} from "react-icons/fa6";
import Link from "next/link";
import { IntroSectiondataprops } from "../models/Interface";
import { IoMdDownload } from "react-icons/io";

const IntroSection = ({ darkMode }: IntroSectiondataprops) => {
  return (
    <div className={`dark:bg-darkbgcolor`}>
      <div className=" mx-auto">
        <div className="">
          {/* Left Section */}
          <div className="flex gap-6 ">
            <div className="flex-none">
              <div className="">
                {/* Profile Picture Container */}
                <div className="relative bg-bgsecondary rounded-full overflow-hidden w-[120px] h-[120px]">
                  <Image
                    src={darkMode ? userinfo.picture2 : userinfo.picture}
                    alt="Profile Picture"
                    width={140}
                    height={140}
                    className="w-full h-auto object-cover"
                  />
                  {/* Icon */}
                </div>
                {/* Social Links */}
                <div className="absolute top-0 right-0 flex flex-col items-center gap-2">
                  <h4 className=" text-[0.8rem] text-colorsecondary dark:text-darktext flex items-center">
                    {InterSect.follow}
                  </h4>
                  <div className="w-[2px] h-14 bg-white dark:bg-darktext"></div>
                  <div className="text-[22px] flex gap-2 text-colorsecondary">
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
            <div className="grow">
              <div>
              {/* Title Section */}
              <h5 className="text-colorprimary dark:text-darktext  text-[1.23rem]">
                {InterSect.title}{" "}
                <span className="text-colorprimary dark:text-darktext">
                  {InterSect.spanname}
                </span>
              </h5>
              <h5>
                <span className="text-colorprimary dark:text-darktext uppercase font-bold text-[0.92rem] ">
                  <span> {InterSect.spanwork}</span>
                </span>
              </h5>
              {/* Subtitle */}
              <p className="text-colorsecondary dark:text-darktext text-[0.93rem]">
                {InterSect.subtitle}
              </p>
              {/* Contact Button */}
              <div className="mb-5">
                <button className="bg-redreg rounded-[6px] text-colorsecondary  dark:text-darkbgcolor px-6 py-2 hover:shadow-md">
                  <a href="#contact">{InterSect.contact}</a>
                </button>
                <button className="rounded-[6px] bg-redreg text-colorsecondary hover:bg-blackten dark:bg-darkblack dark:hover:bg-darkblackten p-[5px_24px_6px]">
                  <Link href="/Nadeem_CV.pdf" download="Nadeem_CV.pdf" passHref>
                    <span className="hidden md:block">{DwnldButton.btn}</span>
                    <span className="md:hidden flex items-center gap-1">
                      <IoMdDownload /> CV
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            </div>
          </div>

          {/* Right Section */}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
