import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

const ProjectSection = () => {
  return (
    <div className="">
      <div className="   dark:bg-darkbgcolor">
        <div className="max-w-screen-xl mx-auto pt-8 md:py-8 lg:py-12">
          <div className="">
            <div
              id="skills"
              className="dark:text-darkbgcolor  text-primaryColor text-[2rem]   flex justify-center items-center  text-center  "
            >
              <div className="relative  w-[240px] bg-secondaryColor   text-[1.8rem]  font-light border border-gray-200  dark:-darkprimaryColor">
                {Project.project}
              </div>
            </div>
          </div>

          <div className="relative md:grid grid-cols-2 mx-auto gap-x-3 lg:gap-x-6 gap-y-8 lg:gap-y-12 sm:px-8 px-4  pt-16 lg:pt-24">
            {Project.projectObject.map((item, index) => (
              <div key={index} className="mb-12 md:mb-0">
                {/* Image Section */}
                <div className={` border  m-0 lg:m-0 w-full  `}>
                  <div className="">
                    <Image
                      src={item.image}
                      alt="dp"
                      width={100}
                      height={100}
                      className="img-project  !w-full  border-b-2  "
                    />
                    <div className="bg-purplereg dark:bg-darkytext  p-3 lg:p-5  ">
                      <div className="">
                        <div className="text-primaryColor dark:text-secondaryColor   font-medium text-[1.2rem] md:text-[1.6rem] ">
                          <h4 className="">{item.title}</h4>
                          <p className="font-light text-lightColor text-[15px] sm:text-[20px] mt-4 mb-8 text-ellipsis">
                            {item.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-6 pt-6 border-t">
                          <Link href={item.LiveLink} target="_blank">
                            <div className="flex gap-3 items-center justify-center h-[38px] px-2 sm:px-4 bg-gradient-to-r from-primaryColor to-gray-700 text-secondaryColor rounded-full dark:text-secondaryColor   font-light  text-[15px] sm:text-[20px]">
                              <CiGlobe className="text-[1.5rem]" />
                              <span>Website</span>
                            </div>
                          </Link>
                          <div className="self-center  ">
                            <Link href={item.Link} target="_blank">
                              <h4 className="dark:text-primaryColor text-primaryColor font-light bg-[#fafafa] border-2 border-[#e4e4e7] rounded-full text-[15px] sm:text-[20px] flex gap-3 items-center justify-center h-[38px]  px-2 sm:px-4">
                                {item.Github && <item.Github />}{" "}
                                <span>Repository</span>
                              </h4>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="h-[70px]">
                        <div className="mt-6 flex items-center flex-wrap  overflow-hidden  gap-1.5">
                          {item.button &&
                            item.button.map((items, index) => (
                              <button
                                key={index}
                                className="bg-gray-100 px-3   rounded-full h-[28px] flex items-center justify-center  text-primaryColor  py-1  font-light"
                              >
                                <span className="capitalize text-[0.86rem] sm:text-[1rem]  inline-block">
                                  {items}
                                </span>
                              </button>
                            ))}
                        </div>
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
