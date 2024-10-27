import React from "react";
import { InterSect, userinfo } from "@/src/constant/constant";
import Image from "next/image";
import insta from "../assets/Icons/instagram.png";
import git from "../assets/Icons/github-sign.png";
import Linkedin from "../assets/Icons/linkedin (1).png";
import facebook from "../assets/Icons/facebook.png";

const IntroSection = () => {
  return (
    <div className="mb-[4rem]">
      <div className="grid grid-cols-2 p-5">
        <div className=" flex justify-start items-center">
          <div>
            <h5 className="text-titletext font-semibold text-[2.6rem] leading-[48px] mb-5">
              {InterSect.title}
              <span className="text-mainColor"> {InterSect.spanname}</span>{" "}
              {InterSect.middletext}
              <span className="text-mainColor"> {InterSect.spanwork}</span>
            </h5>
            <p className="w-[75%] text-subtext text-[1.04rem] mb-6">
              {InterSect.subtitle}
            </p>
            <div className="mb-5">
              <button className="bg-mainColor text-white rounded-[6px] p-[5px_24px_6px]">
                {InterSect.contact}
              </button>
              <button className="ml-2  text-titletext rounded-[6px] p-[5px_24px_6px]">
                {InterSect.resume}
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div>
            <div className=" mr-12 flex items-center justify-start">
              <Image src={userinfo.picture} alt="dp" width={400} height={460} />
            </div>
            <div className="absolute top-0 right-0 flex items-center bottom-0">
              <h4 className="text-[0.8rem] vertical-rl flex items-center gap-2 text-mainColor">
                {InterSect.follow}
                <div className="w-[1px] h-14 bg-mainColor"></div>
                <Image src={insta} alt="insta" width={16} height={16} />
                <Image src={facebook} alt="insta" width={16} height={16} />
                <Image src={Linkedin} alt="insta" width={16} height={16} />
                <Image src={git} alt="insta" width={16} height={16} />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
