import React from "react";
import { Project } from "../constant/constant";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section className="bg-purplelight dark:bg-darkbgcolor">
      <div className=" ">
        {/* Section Heading */}
        

        {/* Projects Grid */}
        <div className="relative ">
          {Project.projectObject.map((project, index) => (
            <div key={index} className="py-4">
              {/* Project Card */}
              <div className="rounded-[6px] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={`Project ${project.title}`}
                  width={100}
                  height={100}
                  className="h-[140px] sm:h-[215px] md:h-[360px] lg:h-[270px] w-full object-cover"
                />

                {/* Project Details */}
                <div className="bg-purplereg p-5 sm:h-[170px]">
                  {/* Title and Links */}
                  <div className="flex justify-between sm:justify-start gap-5">
                    <h4 className="text-white dark:text-darkytext font-medium text-[0.95rem] sm:text-[1.2rem] md:text-[1.6rem] flex items-center">
                      <span className="mr-[5px]">{project.title}</span>|
                      <Link href={project.LiveLink} target="_blank">
                        <span className="text-white dark:text-darkytext font-medium ml-[5px] text-[0.95rem] sm:text-[1.1rem]">
                          Live Demo
                        </span>
                      </Link>
                    </h4>

                    {/* GitHub Link */}
                    {project.Github && (
                      <Link href={project.Link} target="_blank">
                        <h4 className="text-white dark:text-darkytext text-[23px]">
                          <project.Github />
                        </h4>
                      </Link>
                    )}
                  </div>

                  {/* Tech Stack Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.button?.map((tech, idx) => (
                      <button
                        key={idx}
                        className="bg-white text-black dark:bg-darkbgcolor dark:text-darktext font-medium py-1 px-3 text-[0.6rem] sm:text-[0.8rem] rounded"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
