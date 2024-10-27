import React from "react";
import { Project } from "../constant/constant";

const ProjectSection = () => {
  return (
    <div className="mb-[2rem] bg-sectionColor">
      <div className=" p-5">
        <div className="text-center pt-6">
          <button id='project' className="mb-[2.5rem] rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
            {Project.project}
          </button>
        </div>
        <div className="md:grid grid-cols-2 gap-4">
          {Project.projectObject.map((item, index) => (
            <div key={index} className="p-5">
              <div className="h-[260px] w-full bg-black mb-3">{/* Image`` */}</div>
              <div>
                <div>
                  <h4 className="text-[2rem] text-titletext font-medium mb-2 sm:mb-4">
                    {item.title}
                  </h4>
                  <p className="text-[1.04rem] text-subtext mb-2 sm:mb-4 ">
                    {item.subtitle}
                  </p>
                  <div className=" flex items-center gap-5 ">
                    {item.button &&
                      item.button.map((items, index) => (
                        <button
                          key={index}
                          className=" rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]"
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
