import React from "react";
import { Footer } from "../constant/constant";
import insta from '../assets/Icons/social.png'
import git from '../assets/Icons/github.png'
import Linkedin from '../assets/Icons/linkedin.png'
import facebook from '../assets/Icons/facebook (1).png'
import Image from "next/image";
import Link from "next/link";


const FooterSection = () => {
  return (
    <div className="footer border-t border-gray-300">
      <div className="p-5 flex justify-between items-center">
        <h4 className="text-[0.8rem] text-subtext dark:text-darksubtext">{Footer.copyright}</h4>
        <h4 className="text-[0.8rem] text-subtext dark:text-darksubtext">{Footer.dev}</h4>
        <div className="flex-wrap flex justify-between items-center gap-1 sm:gap-5">
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
         <Link href="https://www.linkedin.com/in/nadeem-tadvi-290339159" target="_blank"> <Image
          src={Linkedin}
          alt='insta'
          width={24}
          height={24}
          /></Link>
          <Link href="https://github.com/nadeemtadvi" target="_blank"><Image
          src={git}
          alt='insta'
          width={24}
          height={24}
          />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
