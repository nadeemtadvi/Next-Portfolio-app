import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";
import pinImage from "../assets/Images/Shapes/pngwingReverse.png"

const ProjectSection = () => {
  return (
    <div className="">
      
      <div className=" bg-purplelight  dark:bg-darkbgcolor">
        <div className="max-w-screen-xl mx-auto">
          <div className="">
            <div
              id="skills"
              className="dark:text-darkbgcolor  text-white text-[2rem]  mb-12 flex justify-center items-center  text-center  "
            >
              <div className="relative rotate-[14deg] w-[240px] rounded-[6px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] p-[5px_20px_6px]  font-medium border border-blackshadow  bg-purplereg  dark:-darkblackshadow">
                {Project.project}
                <Image
                      src={pinImage}
                      alt="dp"
                      width={100}
                      height={100}
                      className="absolute w-[60px] top-[-1.5rem] left-[-2rem]"
                    />
              </div>
             
            </div>
           
          </div>

          <div className="relative  lg:grid grid-cols-2  gap-10 sm:px-8 px-4 py-4 sm:py-10 lg:py-24">
            {Project.projectObject.map((item, index) => (
              <div key={index} className="py-4 sm:py-6  lg:py-0">
                {/* Image Section */}
                <div
                  className={` border  m-0 lg:m-0 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]  border-blackshadow rounded-[6px] overflow-hidden  w-full  `}
                >
                  <div className="">
                    <Image
                      src={item.image}
                      alt="dp"
                      width={100}
                      height={100}
                      className="img-project h-[140px] sm:h-[215px] md:h-[360px] lg:h-[270px]  !w-full  border-b-2 border-blackshadow transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="bg-purplereg  p-5  sm:h-[170px]">
                      <div className="flex justify-between sm:justify-start gap-5 ">
                        <h4 className="text-[#272727]  dark:text-darkytext font-medium text-[0.95rem] sm:text-[1.2rem] md:text-[1.6rem] flex items-center">
                          <span className="mr-[5px]">{item.title}</span>|
                          <Link href={item.LiveLink} target="_blank">
                            <span className=" text-white dark:text-darkytext   font-medium ml-[5px] text-[0.95rem] sm:text-[1.1rem]">
                              Live Demo
                            </span>
                          </Link>
                        </h4>

                        <div className="self-center  sm:mr-4 ">
                          <Link href={item.Link} target="_blank">
                            <h4 className="dark:text-darkytext text-blackshadow text-[23px]">
                              {item.Github && <item.Github />}
                            </h4>
                          </Link>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center flex-wrap rounded-[6px] overflow-hidden  ">
                        {item.button &&
                          item.button.map((items, index) => (
                            <button
                              key={index}
                              className="bg-white    text-blackshadow dark:bg-darkbgcolor py-1 dark:text-darktext font-medium inline-block"
                            >
                              <span className=" text-[0.6rem] sm:text-[0.8rem] border-r border-[#e0e0e0] p-[1px_10px] sm:p-[0px_12px_1px] inline-block">{items}</span>
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
    </div>
  );
};

export default ProjectSection;
