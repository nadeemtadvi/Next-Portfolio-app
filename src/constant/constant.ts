import {
  AboutSectionProps,
  ContactSectionProps,
  Downloadbtn,
  FooterSectionProps,
  headerIt,
  ImageStatic,
  IntroSectionProps,
  ProjectSectionProps,
  SkillSectionProps,
  Userobject,
  WorkSectionProps,
} from "../models/Interface";

import javas from "../assets/Images/Skills/javascript-js.1024x1024.png";
import types from "../assets/Images/Skills/typescript-icon.1024x1024.png";
import gits from "../assets/Images/Skills/git.png";
import story from "../assets/Images/Skills/storybook-icon.822x1024.png";
import figma from "../assets/Images/Skills/figma-icon.png";
import reduxs from "../assets/Images/Skills/redux.png";
import reacts from "../assets/Images/Skills/react.png";
import tailw from "../assets/Images/Skills/tailwind-css-icon.png";
import photo from "../assets/Images/Skills/adobe-photoshop-logo-2021.svg";
import illustrator from "../assets/Images/Skills/adobe-Illustrator-logo.svg";
import illustrate from "../assets/Images/Intro/Devices-amico (1).png";
import illustrate2 from "../assets/Images/Intro/Devices-amico.svg";
import cmplogo from "../assets/Images/CompanyLogo/AplLogo.png";
import cmplogo2 from "../assets/Images/CompanyLogo/AplLogo-removebg-preview.png";
import logo from "../assets/Images/LOGO/N-Dev  (1).png";
import darklogo from "../assets/Images/LOGO/darklogo.png";
import profile from "../assets/Images/Profile/Visit.jpg";
import portfolio from "../assets/Images/Project/Screenshot 2024-10-28 231947.png";
import cryptopedia from "../assets/Images/Project/Screenshot 2024-11-03 112611.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
export const userinfo: Userobject = {
  name: "info Code",
  picture: illustrate,
  picture2: illustrate2,
  skills: ["HTML", "CSS", "JAVASCRIPT"],
};
export const images: ImageStatic = {
  image: logo,
  image2: darklogo,
};
export const headerItem: headerIt = {
  about: { label: "About", page: "about" },
  skill: { label: "Skills", page: "skills" },
  work: { label: "Work", page: "work" },
  project: { label: "Project", page: "project" },
  contact: { label: "Contact", page: "contact" },
};
export const DwnldButton: Downloadbtn = {
  btn: "Download CV",
};

export const InterSect: IntroSectionProps = {
  title: "Hi, I’m",
  spanname: "Nadeem",
  middletext: ",a passionate",
  spanwork: "UI UX Developer",
  subtitle:
  "I specialize in UI/UX design, crafting modern, user-friendly interfaces that elevate user experiences. Driven by a passion for innovation, I leverage Figma to bring creative ideas to life and effectively solve design challenges.",
  contact: "Contact Me",
  resume: "View Resume",
  image: "",
  follow: "Follow me on ",
};

export const AboutMe: AboutSectionProps = {
  about: "About me",
  title: "Curious about me?",
  subtitle:
  "I’m Nadeem, a Frontend Developer with 10 months of experience in creating engaging websites. I specialize in UI/UX design and have developed a full-stack blogging platform using React and Redux. My designs are crafted in Figma, ensuring modern, user-friendly interfaces that look great on any device.  I am passionate about solving design challenges and improving user experiences through innovative solutions. Let's create something amazing together!",
  image: profile,

};

export const Skills: SkillSectionProps = {
  skill: "Skills",
  title: "The Skills , tools and technologies i am really good at:",
  skillObj: [
    { image: javas, label: "Javascript" },
    { image: tailw, label: "Tailwind" },
    { image: types, label: "Typescript" },
    { image: gits, label: "Git" },
    { image: reacts, label: "React" },
    { image: figma, label: "Figma" },
    { image: reduxs, label: "Redux" },
    { image: story, label: "Storybook" },
    { image: photo, label: "Adobe Photoshop" },
    { image: illustrator, label: "Adobe Illustrator" },
  ],
};

export const Works: WorkSectionProps = {
  button: "Experience",
  title: "UI UX Developer",
  startDate: "Jan 2024",
  endDate: "Sept 2024",
  subtitle:
    "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figma, I enhanced both the visual appeal and usability of websites, making interactions smooth and enjoyable. I also optimized web performance through efficient coding and testing practices, leading to faster load times and improved responsiveness.Collaborating closely with cross-functional teams, I aligned project goals and met deadlines, consistently delivering high-quality solutions.",
  image: cmplogo,
  image2: cmplogo2,
};

export const Project: ProjectSectionProps = {
  project: "Projects",
  projectObject: [
    {
      image: portfolio,
      Link: "https://github.com/nadeemtadvi/Next-Portfolio-app",
      LiveLink: "https://imdeveloper-app.netlify.app/",
      Github: FaGithubSquare,
      title: "Portfolio-app",
      button: ["HTML", "CSS", "TypeScript", "React", "Nextjs", "Taiwind"],
      subtitle:
        "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figm ...",
    },
    {
      image: cryptopedia,
      Link: "https://github.com/nadeemtadvi/Cryptopedia-Backend",
      LiveLink: "https://cryptopedia-update.netlify.app/",
      Github: FaGithubSquare,
      title: "Cryptopedia",
      button: ["HTML", "CSS", "JavaScript", "React", "Taiwind","Mongodb", "expressjs", ],
      subtitle:
      "A fully responsive blogging website featuring both frontend and backend development. Built to offer a smooth and engaging user experience on all devices. Includes robust functionality for content management and user interactions."  
    },
   
    
  ],
};

export const Contact: ContactSectionProps = {
  contact: "Contact",
  title: "Let’s Discuss",
  subtitle: "Let’s make something amazing together",
  contactList: [
    { icon: IoCallOutline, title: "Call me", subtitle: "+91-6261296132" },
    {
      icon: MdOutlineEmail,
      title: "Email me",
      subtitle: "nadeemtadvi1@gmail.com",
    },
    {
      icon: IoLocationOutline,
      title: "Address",
      subtitle: "Burhanpur, Madhya Pradesh, India",
    },
  ],
  msgButton: "Submit Message",
  fullname: "Full Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
};

export const Footer: FooterSectionProps = {
  copyright: "@ 2024 All Rights Reserved",
  dev: "Designed by Nadeem",
};
