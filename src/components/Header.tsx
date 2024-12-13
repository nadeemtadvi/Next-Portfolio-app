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
      <div className="mb-[0rem]  bg-secondaryColor  dark:bg-primaryColor border-b ">
        <div className="max-w-screen-xl mx-auto">
          {" "}
          <div className="h-[75px] flex justify-between  items-center ">
            <div className="px-2 text-center  h-full  flex justify-center  items-center">
              <h2 className="text-[1.2rem] sm:text-[1.72rem] font-extrabold text-primaryColor dark:text-secondaryColor uppercase">
                Nadeem
                <span className="text-[0.42rem] sm:text-[0.78rem]">.style</span>
              </h2>
            </div>
            <div className="hidden lg:block  ">
              <ul className="flex font-light justify-center items-center gap-12 text-primaryColor   dark:text-secondaryColor">
                {Object.values(headerItem).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setActive(index)}
                    className={`text-[15px] sm:text-[20px] ${
                      active === index ? "active" : ""
                    } hover:text-primaryColor hover:bg-primaryColorten dark:hover:text-darkprimaryColor dark:hover:bg-darkprimaryColorten p-[2px_10px_3px]  `}
                  >
                    <a href={`#${item.page}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full  flex-none  flex justify-center  items-center">
                <div
                  onClick={toggleDarkMode}
                  className="text-primaryColor  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:text-secondaryColor"
                >
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
              </div>
              <div className=" text-center  flex justify-center  items-center h-full">
                {" "}
                <button className="mx-2 text-[15px] sm:text-[20px] inline-block bg-buttonColor text-secondaryColor font-light   dark:border-darkprimaryColor dark:text-darkprimaryColor  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:hover:bg-darkprimaryColorten hover:bg-primaryColorten">
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
              <div className="lg:hidden block h-full">
                <div className="  h-full   flex justify-center  items-center ">
                  <div className="relative">
                    <button
                      onClick={handleToggle}
                      className="text-xl p-[1px_10px_2px] sm:p-[5px_24px_6px]"
                    >
                      <HiMenu className="dark:text-primaryColor " />
                    </button>
                    {toggle ? (
                      <div>
                        <div
                          onClick={handleToggle}
                          className="fixed z-10 bg-transparent top-0 right-0 left-0 bottom-0 m-auto "
                        ></div>

                        <div className="absolute z-10 top-[45px] bg-secondaryColor dark:bg-darksectionColor dark:text-primaryColor left-[-120px]">
                          <ul className="shadow-md min-w-[150px]  !pb-0 ">
                            {Object.values(headerItem).map((item, index) => (
                              <li
                                key={index}
                                className="p-1.5 font-light  border-b border-gray-300 dark:border-darkprimaryColorten hover:bg-gray-300 dark:hover:bg-darkprimaryColorten"
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
    </>
  );
};

export default Header;
