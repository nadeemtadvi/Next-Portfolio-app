import React from "react";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
interface Mainprops{
  darkMode:boolean;
}

const Main = ({darkMode}:Mainprops) => {
  return (
    <>
      <IntroSection darkMode={darkMode}/>
      <AboutSection darkMode={darkMode}/>
      <SkillSection darkMode={darkMode}/>
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Main;
