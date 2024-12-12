import React from "react";
import { Footer } from "../constant/constant";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="bg-white  footer ">
      <div className="p-5 flex justify-between items-center">
        <h4 className="text-[0.8rem] text-[#252525] dark:text-darksubtext">
          {Footer.copyright}
        </h4>
        <h4 className="text-[0.8rem] text-[#252525] dark:text-darksubtext">
          {Footer.dev}
        </h4>
        <div className="flex-wrap flex justify-between items-center gap-1 sm:gap-5 text-[#252525] dark:text-[#252525] text-[24px]">
          <FaSquareInstagram />
          <FaSquareWhatsapp />
          <Link href="https://github.com/nadeemtadvi" target="_blank">
            <FaSquareGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nadeem-tadvi-290339159"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
