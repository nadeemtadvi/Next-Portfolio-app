import React from "react";
import { AboutMe } from "../constant/constant";
import { AboutSectiondataprops } from "../models/Interface";

const AboutSection = ({ darkMode }: AboutSectiondataprops) => {
  return (
    <div>
      {/* Moving Text Section */}
      <div className="overflow-x-hidden whitespace-nowrap bg-black border-t-2 border-b-2 border-purplereg dark:border-black text-[1.4rem] font-medium text-white dark:text-darktext">
        <div className="moveelement">
          {Array(7)
            .fill(AboutMe.title)
            .map((title, index) => (
              <h4 key={index} className="inline-block py-3 px-12">
                {title}
              </h4>
            ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className={`${darkMode ? "" : "bg-grid"}`}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-[200px_auto] lg:grid-cols-[324px_auto] gap-4 lg:gap-10 px-4 sm:px-8 py-12 lg:py-28">
            {/* Profile Image */}
            <div className="flex items-center justify-center my-8 md:my-0">
              {/* Add profile image here if needed */}
            </div>

            {/* About Me Content */}
            <div className="relative flex items-center justify-center mx-4 md:mx-10 lg:mx-16">
              <p className="bg-yellowlight shadow-md text-[1.04rem] p-5 rounded-[6px] text-subtext dark:text-darkytext mb-2 sm:mb-4 text-justify">
                {AboutMe.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
