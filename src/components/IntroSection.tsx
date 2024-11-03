import React from "react";
import { InterSect, userinfo } from "@/src/constant/constant";
import Image from "next/image";
import insta from "../assets/Icons/instagram.png";
import git from "../assets/Icons/github-sign.png";
import Linkedin from "../assets/Icons/linkedin (1).png";
import facebook from "../assets/Icons/facebook.png";
import Link from "next/link";

const IntroSection = () => {
  return (
    <div className="">
      <div className="sm:grid grid-cols-2 p-5">
        <div className=" flex justify-start items-center">
          <div>
            <h5 className="text-titletext font-semibold text-[2.6rem] leading-[48px] mb-5">
              {InterSect.title}
              <span className="text-mainColor"> {InterSect.spanname}</span>{" "}
              {InterSect.middletext}
              <span className="text-mainColor"> {InterSect.spanwork}</span>
            </h5>
            <p className="sm:w-[75%] text-subtext text-[1.04rem] mb-6">
              {InterSect.subtitle}
            </p>
            <div className="mb-5">
              <button className="bg-mainColor text-white rounded-[6px] p-[5px_24px_6px] hover:bg-[#111b8d]">
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
                  src={userinfo.picture}
                  alt="dp"
                  width={400}
                  height={460}
                />
              </div>
              <div className="absolute top-0 right-0 flex items-center bottom-0">
                <h4 className="text-[0.8rem] vertical-rl flex items-center gap-2 text-mainColor">
                  {InterSect.follow}
                  <div className="w-[1px] h-14 bg-mainColor"></div>
                  <Image src={insta} alt="insta" width={16} height={16} />
                  <Image src={facebook} alt="insta" width={16} height={16} />
                  <Link href="https://www.linkedin.com/in/nadeem-tadvi-290339159" target="_blank">
                  <Image src={Linkedin} alt="insta" width={16} height={16} /></Link>
                  <Link href="https://github.com/nadeemtadvi" target="_blank"><Image src={git} alt="insta" width={16} height={16} /></Link>
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
