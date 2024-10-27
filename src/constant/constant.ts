import {
  AboutSectionProps,
  ContactSectionProps,
  Downloadbtn,
  FooterSectionProps,
  headerIt,
  IntroSectionProps,
  ProjectSectionProps,
  SkillSectionProps,
  Userobject,
  WorkSectionProps,
} from "../models/Interface";

import javas from '../assets/Images/Skills/javascript-js.1024x1024.png'
import types from '../assets/Images/Skills/typescript-icon.1024x1024.png'
import gits from '../assets/Images/Skills/git.png'
import story from '../assets/Images/Skills/storybook-icon.822x1024.png'
import figma from '../assets/Images/Skills/figma-icon.png'
import reduxs from '../assets/Images/Skills/redux.png'
import reacts from '../assets/Images/Skills/react.png'
import tailw from '../assets/Images/Skills/tailwind-css-icon.png'
import illustrate from '../assets/Images/Intro/Devices-amico (1).png'
import cmplogo from '../assets/Images/CompanyLogo/AplLogo.png'
import logo from '../assets/Images/LOGO/N-Dev  (1).png'
import profile from '../assets/Images/Profile/Visit.jpg'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const userinfo: Userobject = {
  name: "info Code",
  picture:illustrate,
  skills: ["HTML", "CSS", "JAVASCRIPT"],
};

export const headerItem: headerIt = {
  about: { label: "About", page: "about" },
  skill: { label: "Skills", page: "skills" },
  work: { label: "Work", page: "work" },
  project: { label: "Project", page: "project" },
  contact: { label: "Contact", page: "contact" },
  image:logo,
};
export const DwnldButton: Downloadbtn = {
  btn: "Download",
};

export const InterSect: IntroSectionProps = {
  title: "Hi, I’m",
  spanname: "Nadeem",
  middletext: ",a passionate",
  spanwork: "Frontend Developer",
  subtitle:
    "lorem ipsum sample text is here so do not read this is danger and you will get in danger this is good website and good portfolio.",
  contact: "Contact Me",
  resume: "View Resume",
  image: "",
  follow: "Follow me on ",
};

export const AboutMe: AboutSectionProps = {
  about: "About me",
  title: "Curous about me?",
  subtitle:
    "I’m Tanvir, a creative Product Designer. I’ve been helping busto solve their problems with my design for 2 years. Developed a responsive blogging platform using React and Redux for efficient state management, improving data flow and user experience. Styled dynamic components and ensured mobile responsiveness using Tailwind CSS, achieving a modern and visually appealing design. Implemented CRUD functionalities for blogs, enabling users to create, edit, and delete posts seamlessly",
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
  ],
};

export const Works: WorkSectionProps = {
  button:'Experience',
  title: "Frontend Developer",
  startDate: "Jan 2024",
  endDate: "Sept 2024",
  subtitle:
    "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figma, I enhanced both the visual appeal and usability of websites, making interactions smooth and enjoyable. I also optimized web performance through efficient coding and testing practices, leading to faster load times and improved responsiveness.Collaborating closely with cross-functional teams, I aligned project goals and met deadlines, consistently delivering high-quality solutions.",
  image: cmplogo,
};

export const Project: ProjectSectionProps = {
  project: "Projects",
  projectObject: [
    {
      image: "",
      title: "Spotify Clone",
      button: ["HTML", "CSS", "JavaScript"],
      subtitle:
        "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figm ...",
    },
    {
      image: "",
      title: "Spotify Clone",
      button: ["HTML", "CSS", "JavaScript"],
      subtitle:
        "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figm ...",
    },
    {
      image: "",
      title: "Spotify Clone",
      button: ["HTML", "CSS", "JavaScript"],
      subtitle:
        "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figm ...",
    },
    {
      image: "",
      title: "Spotify Clone",
      button: ["HTML", "CSS", "JavaScript"],
      subtitle:
        "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figm ...",
    },
  ],
};

export const Contact: ContactSectionProps = {
  contact: "Contact",
  title: "Let’s Discuss",
  subtitle: "Let’s make something amazing together",
  contactList: [
    { icon: IoCallOutline, title: "Call me", subtitle: "+91-6261296132" },
    { icon: MdOutlineEmail, title: "Email me", subtitle: "nadeemtadvi1@gmail.com" },
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

export const Footer:FooterSectionProps ={
  copyright:'@ 2024 All Rights Reserved',
  dev:'Designed by Nadeem',
}
