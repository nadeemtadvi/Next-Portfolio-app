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


import illustrate from "../assets/Images/Profile/profileN.png";
import illustrate2 from "../assets/Images/Profile/profileN.png";
import cmplogo3 from "../assets/Images/CompanyLogo/cmplogo.jpg";
import cmplogo from "../assets/Images/CompanyLogo/AplLogo.png";
import cmplogo2 from "../assets/Images/CompanyLogo/AplLogo-removebg-preview.png";
import logo from "../assets/Images/LOGO/Nadeemlight.png";
import darklogo from "../assets/Images/LOGO/Nadeemdark.png";
import profile from "../assets/Images/Profile/Visit.jpg";
import shamidarbar from "../assets/Images/Project/shamidarbar.png";
import shanti from "../assets/Images/Project/shanti.png";
import wellspring from "../assets/Images/Project/wellspring.png";
import cryptopedia from "../assets/Images/Project/crypto.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { SiStorybook } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


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
  spanname: "Nadeem,",
  middletext: "a passionate",
  spanwork: "Frontend Developer",
  subtitle:
    "I specialize in frontend developer, crafting responsive, user-friendly websites with a focus on clean, maintainable code.  I stay updated on the latest trends to deliver innovative solutions.",
  contact: "Contact Me",
  resume: "View Resume",
  image: "",
  follow: "Follow me on ",
};

export const AboutMe: AboutSectionProps = {
  about: "About me",
  title: "Curious about me?",
  subtitle:
    "I’m Nadeem, Frontend developer, building modern, responsive, and user-friendly websites that enhance the digital experience. With a strong focus on clean, maintainable code and performance optimization, I utilize technologies like HTML, CSS, JavaScript, and React to bring ideas to life. Passionate about creating seamless and intuitive user interfaces, I continuously stay updated with the latest trends and best practices in frontend development to deliver innovative solutions for design and functionality challenges.",
  image: profile,

};

export const Skills: SkillSectionProps = {
  skill: "Skills",
  title: "The Skills , tools and technologies i am really good at:",
  skillObj: [
    { image: SiTypescript, label: "Typescript" },
    { image: IoLogoJavascript, label: "Javascript" },
    { image: SiStorybook, label: "Storybook" },
    { image: FaGitAlt, label: "Git" },
    { image: SiFigma, label: "Figma" },
    { image: DiPhotoshop, label: "Adobe Photoshop" },
    { image: DiIllustrator, label: "Adobe Illustrator" },
    { image: FaReact, label: "React" },
    { image: SiRedux, label: "Redux" },
    { image: SiTailwindcss, label: "Tailwind" },
  ],
};

export const Works: WorkSectionProps = {
  workDetail: [
    {

      title: "Frontend Developer",
      startDate: "Dec 2024",
      endDate: "Feb 2025",
      subtitle:
        "I developed and maintained responsive websites, ensuring a smooth user experience across all devices. Using HTML, CSS, JavaScript, and React, I optimized performance, reduced load times, and improved responsiveness. Collaborating with cross-functional teams, I consistently delivered high-quality, user-friendly solutions on time.",
      image: cmplogo3,
      image2: cmplogo3,
    },
    {

      title: "UI UX Developer",
      startDate: "Jan 2024",
      endDate: "Sept 2024",
      subtitle:
        "I developed and maintained responsive websites to ensure a seamless user experience across all devices. By designing intuitive interfaces in Figma, I enhanced both the visual appeal and usability of websites, making interactions smooth and enjoyable. I also optimized web performance through efficient coding and testing practices, leading to faster load times and improved responsiveness.Collaborating closely with cross-functional teams, I aligned project goals and met deadlines, consistently delivering high-quality solutions.",
      image: cmplogo,
      image2: cmplogo2,
    },
  ]
};
export const Project: ProjectSectionProps = {
  project: "Projects",
  projectObject: [
    {
      image: shamidarbar,
      Link: "https://github.com/nadeemtadvi/Foodie-Cafe-App",
      LiveLink: "https://shamidarbar.netlify.app/",
      Github: FaGithub,
      title: "Shami Darbar",
      button: ["HTML", "CSS", "JavaScript", "Tailwind"],
      subtitle:
        "Foodie-Cafe-App is a modern and responsive landing page designed to captivate users and provide a seamless introduction to the Foodie-Resto app. Built using HTML, Tailwind CSS, and JavaScript, this project emphasizes clean design, fast loading speeds, and user engagement.",
    },
    {
      image: wellspring,
      Link: "https://github.com/nadeemtadvi/blogapp-frontend-vite",
      LiveLink: "https://wellspringblog.netlify.app/",
      Github: FaGithub,
      title: "WellSpring",
      button: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Mongodb", "expressjs",],
      subtitle:
        "**Wellspring** is a modern blogging platform with advanced features like content generation powered by AI. This application provides a seamless user experience with robust backend support and an elegant frontend design."
    },
    {
      image: cryptopedia,
      Link: "https://github.com/nadeemtadvi/Cryptopedia-Backend",
      LiveLink: "https://cryptopedia-update.netlify.app/",
      Github: FaGithub,
      title: "Cryptopedia",
      button: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Mongodb", "expressjs",],
      subtitle:
        "A complete blogging website built with a MERN stack and styled using Tailwind CSS. Features include post creation, editing, and deletion, along with user authentication and dynamic content rendering. Backend and frontend are seamlessly integrated, providing a smooth user experience. "
    },
    {
      image: shanti,
      Link: "https://github.com/nadeemtadvi/Furniture-app",
      LiveLink: "https://shantifurniture.netlify.app/",
      Github: FaGithub,
      title: "Shanti Furniture",
      button: ["HTML", "CSS", "JavaScript", "React", "Tailwind",],
      subtitle:
        "Furniture E-commerce App - A responsive e-commerce application for furniture items, built with React and Tailwind CSS. This app provides a modern and clean user interface for browsing and purchasing furniture, designed to be fully responsive across all devices."
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
