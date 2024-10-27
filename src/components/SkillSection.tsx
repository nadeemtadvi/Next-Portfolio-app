import React from "react";
import { Skills } from "../constant/constant";
import Image from "next/image";

const SkillSection = () => {
  return (
    <div className="mt-[2rem] mb-[2rem] bg-sectionColor p-5">
      <div className="p-5">
        <div className="flex justify-center  mb-10">
          <div className="text-center">
            <button id='skills' className="rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
              {Skills.skill}
            </button>
            <p className="mt-3 text-[1.04rem] text-subtext mb-2 sm:mb-4">
              {Skills.title}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-8">
          {Skills.skillObj.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-[6px]">
              <div className="flex justify-center items-center ">
                <div className="">
                <Image src={item.image} alt="insta" width={100} height={100} className="p-[20px_10px_0px_10px] !h-[100px] !w-[100px]" />
                </div>
              </div>
              <h4 className="text-center text-[1.04rem] text-subtext my-6 ">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
