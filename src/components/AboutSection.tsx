import React from "react";
import { AboutMe } from "../constant/constant";
import { AboutSectiondataprops } from "../models/Interface";

const AboutSection = ({ darkMode }: AboutSectiondataprops) => {
  return (
    <div>
      {/* Moving Text Section */}
      

      {/* About Me Section */}
      <div className={`${darkMode ? "" : "bg-grid"}`}>
        <div className="">
          <div className="">
            {/* Profile Image */}
            <div className="flex items-center justify-center my-8 md:my-0">
              {/* Add profile image here if needed */}
            </div>

            {/* About Me Content */}
            <div className="relative flex items-center justify-center">
              <p className="text-[1.04rem] p-5 rounded-[6px] text-white dark:text-darkytext mb-2 sm:mb-4 text-justify">
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
