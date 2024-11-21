import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";
import starImg from "../assets/Images/Shapes/4star.png"

const ProjectSection = () => {
  return (
    <div className="">
      <div className="overflow-x-hidden whitespace-nowrap bg-white border-t-2 border-b-2 border-mainColor  text-[1.4rem] font-semibold text-mainColor">
      <div className="moveelement ">
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
        <h4 className="inline-block py-3 px-12"> {Project.project}</h4>
      </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative grid md:grid-cols-2  gap-10 my-16">
        <Image
        src={starImg}
        alt="dp"
        width={65}
        height={65}
        className="absolute  top-[-5.3rem] left-[42rem] rotate-[10deg]"

      />
        <Image
        src={starImg}
        alt="dp"
        width={65}
        height={65}
        className="absolute  bottom-[-5.3rem] right-[2rem] rotate-[-28deg]"
      />  <Image
      src={starImg}
      alt="dp"
      width={65}
      height={65}
      className="absolute  bottom-[-5.3rem] right-[2rem] rotate-[110deg]"
    />
          {Project.projectObject.map((item, index) => (
            <div
              key={index}
              className=" "
            >
              {/* Image Section */}
              <div
                className={`border-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]  border-mainColor rounded-[10px] overflow-hidden  w-full dark:-darkmainColorten `}
              >
                <div className="">
                  <Image
                    src={item.image}
                    alt="dp"
                    width={100}
                    height={100}
                    className="img-project  !w-full !h-full border-b-2 border-mainColor transform transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="bg-[#e3dff2]  p-5  h-[170px]">
                  <div className="flex justify-between gap-5 ">
                    <h4 className="text-[#272727] dark:text-darktitletext font-medium text-[1.2rem] md:text-[1.6rem] flex items-center">
                      <span>{item.title}</span>
                      <Link href={item.LiveLink} target="_blank">
                        <span className="text-mainColor dark:text-darkmainColor -b -mainColor dark:-darkmainColor font-medium ml-4 text-[1.1rem]">
                          Live Demo
                        </span>
                      </Link>
                    </h4>
                    <div className="self-center mr-4 ">
                      <Link href={item.Link} target="_blank">
                        <h4 className="dark:text-white text-mainColor text-[28px]">
                          {item.Github && <item.Github />}
                        </h4>
                      </Link>
                    </div>
                  </div>

                
                  <div className="mt-4 flex items-center flex-wrap gap-[1px]">
                    {item.button &&
                      item.button.map((items, index) => (
                        <button
                          key={index}
                          className="text-[0.9rem] bg-[#c4a1ff] text-mainColor dark:bg-darkmainColorten dark:text-darkmainColor font-medium p-[4px_16px_3px]"
                        >
                          {items}
                        </button>
                      ))}
                  </div>
                </div>
                </div>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
