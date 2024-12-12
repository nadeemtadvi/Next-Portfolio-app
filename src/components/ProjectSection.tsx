import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";


const ProjectSection = () => {
  return (
    <div className="">
      <div className="   dark:bg-darkbgcolor">
        <div className="max-w-screen-xl mx-auto pt-20">
          <div className="">
            <div
              id="skills"
              className="dark:text-darkbgcolor  text-[#252525] text-[2rem]  mb-12 flex justify-center items-center  text-center  "
            >
              <div className="relative  w-[240px] bg-white   text-[1.8rem]  font-light border border-gray-200  dark:-darkblackshadow">
                {Project.project}
              
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 mx-auto  gap-6 sm:px-8 px-4 py-4 sm:py-10 lg:py-24">
            {Project.projectObject.map((item, index) => (
              <div key={index} className="py-4 sm:py-6  lg:py-0">
                {/* Image Section */}
                <div
                  className={` border  m-0 lg:m-0 w-full  `}
                >
                  <div className="">
                    <Image
                      src={item.image}
                      alt="dp"
                      width={100}
                      height={100}
                      className="img-project  !w-full  border-b-2  "
                    />
                    <div className="bg-purplereg dark:bg-darkytext  p-5  ">
                      <div className="">
                        <div className="text-[#272727] dark:text-white   font-medium text-[0.95rem] sm:text-[1.2rem] md:text-[1.6rem] ">
                          <h4 className="">{item.title}</h4>
                          <p className="font-light text-[1rem] mt-4 mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque autem quod praesentium ducimus. Cumque, mollitia!</p>
                         
                        </div>
                        <div className="flex items-center gap-6 pt-6 border-t">
                        <Link href={item.LiveLink} target="_blank">
                            <div className="flex gap-3 items-center justify-center h-[38px]  px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full dark:text-white   font-light  text-[0.95rem] sm:text-[1.1rem]">
                              <CiGlobe className="text-[1.5rem]"/><span>Website</span>
                            </div>
                          </Link>
                        <div className="self-center  ">
                          <Link href={item.Link} target="_blank">
                            <h4 className="dark:text-[#252525] text-blackshadow font-light bg-[#fafafa] border-2 border-[#e4e4e7] rounded-full text-[0.95rem] sm:text-[1.1rem] flex gap-3 items-center justify-center h-[38px]  px-4">
                              {item.Github && <item.Github />} <span >Repository</span>
                            </h4>
                          </Link>
                        </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center flex-wrap  overflow-hidden  gap-1.5">
                        {item.button &&
                          item.button.map((items, index) => (
                            <button
                              key={index}
                              className="bg-gray-100 px-3   rounded-full h-[28px] flex items-center justify-center  text-blackshadow  py-1  font-light"
                            >
                              <span className=" text-[0.6rem] sm:text-[0.8rem]  inline-block">
                                {items}
                              </span>
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
