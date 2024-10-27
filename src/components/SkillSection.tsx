import React from "react";
import { Skills } from "../constant/constant";
import Image from "next/image";

const SkillSection = () => {
  return (
    <div className="mt-[2rem] mb-[2rem] bg-sectionColor p-5">
      <div className="p-5">
        <div className="flex justify-center  mb-10">
          <div className="text-center">
            <button className="rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
              {Skills.skill}
            </button>
            <p className="mt-3 text-[1.04rem] text-subtext mb-4">
              {Skills.title}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {Skills.skillObj.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center items-center mb-2">
                <div className="">
                <Image src={item.image} alt="insta" width={100} height={100} className="p-2" />
                </div>
              </div>
              <h4 className="text-center text-[1.04rem] text-subtext mb-4">
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
