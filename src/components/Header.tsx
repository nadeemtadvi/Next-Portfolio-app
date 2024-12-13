"use client";
import React, { useEffect, useState } from "react";
import { headerItem, DwnldButton } from "@/src/constant/constant";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { Headerdataprops } from "../models/Interface";

const Header = ({ darkMode, setDarkMode }: Headerdataprops) => {
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
      <div className="mb-[0rem]  bg-white  dark:bg-blackshadow border-b ">
        <div className="max-w-screen-xl mx-auto">
          {" "}
          <div className="h-[75px] flex sm:justify-between  lg:grid grid-cols-[18%_auto_25%] items-center ">
            <div className="border-r text-center  h-full  flex justify-center  items-center">
              <h2 className="text-[1.2rem] sm:text-[1.72rem] font-extrabold text-[#252525] dark:text-white uppercase">Nadeem<span className="text-[0.42rem] sm:text-[0.78rem]">.style</span></h2>
            </div>
            <div className="hidden lg:block    ">
              <ul className="flex font-light justify-center items-center gap-12   dark:text-white">
                {Object.values(headerItem).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setActive(index)}
                    className={`text-[0.96rem] sm:text-[1.24rem] ${
                      active === index ? "active" : ""
                    } hover:text-blackshadow hover:bg-blackshadowten dark:hover:text-darkblackshadow dark:hover:bg-darkblackshadowten p-[2px_10px_3px]  `}
                  >
                    <a href={`#${item.page}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex   items-center  h-full">
              <div className="border-l h-full  flex-none border-r  flex justify-center  items-center">
                <div
                  onClick={toggleDarkMode}
                  className="text-gray-900  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:text-white"
                >
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
              </div>
              <div className="grow text-center mx-5 lg:mx-0 flex justify-center  items-center h-full">
                {" "}
                <button className="text-[0.96rem] sm:text-[1.24rem] inline-block bg-redreg text-white font-light   dark:border-darkblackshadow dark:text-darkblackshadow  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:hover:bg-darkblackshadowten hover:bg-blackshadowten">
                  <Link href="/Nadeem_CV.pdf" download="Nadeem_CV.pdf" passHref>
                    <span className="hidden md:block">{DwnldButton.btn}</span>
                    <span className="md:hidden block">
                      <span className="flex items-center gap-1">
                        <IoMdDownload /> CV
                      </span>
                    </span>
                  </Link>
                </button>
              </div>
              <div  className="lg:hidden block h-full">
              <div className="  border-l  h-full flex justify-center  items-center" >
              <div className="relative">
                <button onClick={handleToggle} className="text-xl p-[1px_10px_2px] sm:p-[5px_24px_6px]">
                  <HiMenu className="dark:text-[#252525] " />
                </button>
                {toggle ? (
                  <div>
                    <div
                      onClick={handleToggle}
                      className="fixed z-10 bg-transparent top-0 right-0 left-0 bottom-0 m-auto "
                    ></div>

                    <div className="absolute z-10 top-[45px] bg-white dark:bg-darksectionColor dark:text-[#252525] left-[-120px]">
                      <ul className="shadow-md min-w-[150px]  !pb-0 ">
                        {Object.values(headerItem).map((item, index) => (
                          <li
                            key={index}
                            className="p-1.5 font-light  border-b border-gray-300 dark:border-darkblackshadowten hover:bg-gray-300 dark:hover:bg-darkblackshadowten"
                          >
                            <a href={`#${item.page}`}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
