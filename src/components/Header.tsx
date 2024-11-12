"use client";
import React, { useEffect, useState } from "react";
import { headerItem, DwnldButton, images } from "@/src/constant/constant";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
interface Headerdataprops {
  darkMode: boolean;
  setDarkMode:(mode:boolean) => void;
}

const Header = ({darkMode,setDarkMode}:Headerdataprops) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [active, setActive] = useState<number | null>(null);
 

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className="mb-[0rem] shadow-sm dark:bg-black">
        <div className="flex justify-between items-center p-5 ">
          <div className="">
          <Image
                src={darkMode ? images.image2 : images.image}
                alt="logo"
                className="logo-dev"
                width={170}
                height={170}
              />
           
          </div>
          <div className="hidden md:block">
            <ul className="flex justify-between items-center gap-14 dark:text-white">
              {Object.values(headerItem).map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActive(index)}
                  className={`${
                    active === index ? "active" : ""
                  } hover:text-mainColor hover:bg-mainColorten dark:hover:text-darkmainColor dark:hover:bg-darkmainColorten p-[2px_10px_3px] rounded-[6px] `}
                >
                  <a href={`#${item.page}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <div
              onClick={toggleDarkMode}
              className="text-gray-900  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:text-white"
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </div>
            <button className="border border-mainColor text-mainColor dark:border-darkmainColor dark:text-darkmainColor rounded-[6px] p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:hover:bg-darkmainColorten hover:bg-mainColorten">
              <Link href="/Nadeem_CV.pdf" download="Nadeem_CV.pdf" passHref>
               
                <span className="hidden md:block">
                {DwnldButton.btn}
                </span>
              <span className="md:hidden block">
                <span className="flex items-center gap-1">

               <IoMdDownload/> CV
                </span>
              </span>

              </Link>
            </button>
          </div>
          <div className="sm:hidden block">
            <div className="relative">
              <button onClick={handleToggle} className="text-xl">
                <HiMenu className="dark:text-white"/>
              </button>
              {toggle ? (
                <div className="absolute top-[45px] bg-white dark:bg-darksectionColor dark:text-white left-[-120px]">
                  <ul className="shadow-md min-w-[150px]  !pb-0 rounded-[6px]">
                    {Object.values(headerItem).map((item, index) => (
                      <li
                        key={index}
                        className="p-2.5  border-b border-gray-300 dark:border-darkmainColorten hover:bg-gray-300 dark:hover:bg-darkmainColorten"
                      >
                        <a href={`#${item.page}`}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
