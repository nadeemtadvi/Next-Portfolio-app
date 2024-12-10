import React from "react";
import WorkSection from "./WorkSection";
import { SkillSectiondataprops } from "../models/Interface";

const SkillSection = ({ darkMode }: SkillSectiondataprops) => {
  return (
    <section className="bg-purplelight dark:bg-darkbgcolor py-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        {/* Content Wrapper */}
        <div className="relative grid md:grid-cols-2 gap-8">
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
