import React from "react";
import { Footer } from "../constant/constant";
import insta from '../assets/Icons/social.png'
import git from '../assets/Icons/github.png'
import Linkedin from '../assets/Icons/linkedin.png'
import facebook from '../assets/Icons/facebook (1).png'
import Image from "next/image";


const FooterSection = () => {
  return (
    <div className="border-t border-gray-300">
      <div className="p-5 flex justify-between items-center">
        <h4 className="text-[0.8rem] text-subtext">{Footer.copyright}</h4>
        <h4 className="text-[0.8rem] text-subtext">{Footer.dev}</h4>
        <div className="flex justify-between items-center gap-5">
          <Image
          src={insta}
          alt='insta'
          width={24}
          height={24}
          />
          <Image
          src={facebook}
          alt='insta'
          width={24}
          height={24}
          />
          <Image
          src={Linkedin}
          alt='insta'
          width={24}
          height={24}
          />
          <Image
          src={git}
          alt='insta'
          width={24}
          height={24}
          />
        
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
