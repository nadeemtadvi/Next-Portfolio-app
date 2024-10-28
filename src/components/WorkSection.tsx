import React from "react";
import { Works } from "../constant/constant";
import Image from "next/image";

const WorkSection = () => {
  return (
    <div className="sm:mb-[2rem] p-5">
      <div className="text-center">
        <button id='work' className="sm:mb-[2.5rem] rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
          {Works.button}
        </button>
      </div>

      <div className="sm:grid grid-cols-2 ">
        <div className="flex justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105">
        <Image src={Works.image} alt="insta" width={250} height={250} />
        </div>
        <div>
          <div>
            <h4 className="text-[2rem] text-titletext font-medium mb-2 sm:mb-4">{Works.title}
              <span className="text-[1.2rem] text-titletext font-normal">  ({Works.startDate} - {Works.endDate})</span>
            </h4>
            <p className="text-[1.04rem] text-subtext mb-2 sm:mb-4">{Works.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
