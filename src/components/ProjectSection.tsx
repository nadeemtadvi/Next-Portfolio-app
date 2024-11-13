import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";
const ProjectSection = () => {
  return (
    <div className="mb-[2rem] ">
      <div className=" p-5">
        <div className="mb-14">
          <h4
            id="project"
           className="dark:text-white text-[2rem]   text-[#252525] font-medium">
        <span className="p-[0px_42px_4px_0px] border-b-2 border-mainColor dark:border-darkmainColor">

            {Project.project}
        </span>
          
          </h4>
        </div>
        <div className="md:grid grid-cols-2 gap-8">
          {Project.projectObject.map((item, index) => (
            <div key={index} className="py-2 mb-10 md:mb-0">
              <div className="h-[160px] sm:h-[260px] w-full border border-gray-200 dark:border-darkmainColorten  p-2 mb-3 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={item.image}
                  alt="dp"
                  width={400}
                  height={400}
                  className=" !w-full !h-full "
                />
              </div>
              <div>
                <div>
                  <div className="flex justify-between gap-5   mb-2 sm:mb-2">
                    <h4 className="text-[#272727] dark:text-darktitletext font-medium text-[1.2rem] md:text-[1.6rem] flex items-center">
                      <span>{item.title}</span>
                      <Link href={item.LiveLink} target="_blank">
                        <span className="text-mainColor dark:text-darkmainColor border-b border-mainColor dark:border-darkmainColor font-medium ml-4 text-[1.1rem]">
                          Live Demo
                        </span>
                      </Link>
                    </h4>
                    <div className="self-center mr-4">
                      <Link href={item.Link} target="_blank">
                      <h4 className="dark:text-white text-mainColor text-[28px]">{item.Github && <item.Github/>}</h4>
                      
                      </Link>
                    </div>
                  </div>

                  <p className="text-[0.98rem] md:text-[1.04rem] dark:text-darksubtext text-subtext mb-2 sm:mb-4 ">
                    {item.subtitle}
                  </p>
                  <div className=" flex items-center flex-wrap gap-[1px] ">
                    {item.button &&
                      item.button.map((items, index) => (
                        <button
                          key={index}
                          className="  text-[0.9rem] bg-mainColorten text-mainColor dark:bg-darkmainColorten dark:text-darkmainColor font-medium p-[4px_16px_3px]"
                        >
                          {items}
                        </button>
                      ))}
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
