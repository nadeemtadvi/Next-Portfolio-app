import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Userobject {
  name: string;
  picture: string | StaticImageData;
  picture2: string | StaticImageData;
  skills: Array<string>;
}

export interface headerobj {
  label: string;
  page: string;
}
export interface ImageStatic {
  image:string | StaticImageData;
  image2:string | StaticImageData;
}
export interface headerIt {
  about: headerobj;
  skill: headerobj;
  work: headerobj;
  project: headerobj;
  contact: headerobj;
}
export interface Downloadbtn {
  btn: string;
}

export interface IntroSectionProps {
  title: string;
  spanname: string;
  spanwork: string;
  middletext: string;
  subtitle: string;
  contact: string;
  resume: string;
  image: string | StaticImageData;
  follow: string;
}

export interface AboutSectionProps {
  about: string;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

export interface skillobject {
  image: string | StaticImageData;
  label: string;
}

export interface SkillSectionProps {
  skill: string;
  title: string;
  skillObj: skillobject[];
}

export interface WorkSectionProps {
  title: string;
  button: string;
  startDate: string;
  endDate: string;
  subtitle: string;
  image: string | StaticImageData;
  image2: string | StaticImageData;
}

export interface projectObj {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  Link: string;
  LiveLink: string;
  Github: IconType;
  button: Array<string>;
}

export interface ProjectSectionProps {
  project: string;
  projectObject: projectObj[];
}

export interface contactObj {
  icon: IconType;
  title: string;
  subtitle: string;
}

export interface ContactSectionProps {
  contact: string;
  title: string;
  subtitle: string;
  contactList: contactObj[];
  msgButton: string;
  fullname: string;
  email: string;
  phone: string;
  message: string;
}


export interface FooterSectionProps {
  copyright:string;
  dev:string;
} 

export interface Headerdataprops {
  darkMode: boolean;
  setDarkMode:(mode:boolean) => void;
}

interface IntroSectiondataprops {
  darkMode:boolean;
}
interface WorkSectiondataprops{
  darkMode:boolean;
}