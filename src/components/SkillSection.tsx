import React from "react";
import WorkSection from "./WorkSection";
import { SkillSectiondataprops } from "../models/Interface";

const SkillSection = ({ darkMode }: SkillSectiondataprops) => {
  return (
    <section className="bg-purplelight dark:bg-darkbgcolor ">
      <div className="">
        {/* Content Wrapper */}
        <div className="relative ">
          {/* Work Experience Section */}
          <div>
            <WorkSection darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
