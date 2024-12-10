import React from "react";
import { Footer } from "../constant/constant";
import Link from "next/link";
import { FaSquareInstagram, FaSquareWhatsapp, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className=" footer">
      <div className="p-5 flex justify-between items-center">
        {/* Copyright Section */}
        <h4 className="text-[0.8rem] text-colorsecondary dark:text-darksubtext">
          {Footer.copyright}
        </h4>

        {/* Developer Info */}
        <h4 className="text-[0.8rem] text-colorsecondary dark:text-darksubtext">
          {Footer.dev}
        </h4>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 text-colorsecondary text-[24px]">
          <FaSquareInstagram aria-label="Instagram" />
          <FaSquareWhatsapp aria-label="WhatsApp" />
          <Link href="https://github.com/nadeemtadvi" target="_blank" aria-label="GitHub">
            <FaSquareGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nadeem-tadvi-290339159"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
