import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";
const ProjectSection = () => {
  return (
    <div className="mb-[2rem] ">
      <div className=" p-5">
        <div className="text-center pt-6">
          <button
            id="project"
            className="mb-[2.5rem] rounded-full bg-mainColorten text-mainColor dark:bg-darkmainColorten dark:text-darkmainColor font-medium p-[2px_20px_3px]"
          >
            {Project.project}
          </button>
        </div>
        <div className="md:grid grid-cols-2 gap-4">
          {Project.projectObject.map((item, index) => (
            <div key={index} className="py-2 sm:p-5 ">
              <div className="h-[260px] w-full border border-gray-200 dark:border-darkmainColorten rounded-[10px] p-2 mb-3 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={item.image}
                  alt="dp"
                  width={400}
                  height={400}
                  className="!w-full !h-full rounded-[10px]"
                />
              </div>
              <div>
                <div>
                  <div className="flex justify-between gap-5   mb-2 sm:mb-4">
                    <h4 className="text-titletext dark:text-darktitletext font-medium text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] flex items-center">
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
                  <div className=" flex items-center flex-wrap gap-3 ">
                    {item.button &&
                      item.button.map((items, index) => (
                        <button
                          key={index}
                          className=" rounded-full text-[0.9rem] bg-mainColorten text-mainColor dark:bg-darkmainColorten dark:text-darkmainColor font-medium p-[1px_16px_2px]"
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
