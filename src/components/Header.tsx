"use client";
import React, { useEffect, useState } from "react";
import { headerItem, DwnldButton, images } from "@/src/constant/constant";
import Image from "next/image";
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
      <div className="mb-[0rem]  bg-white dark:bg-borderblack border-b-2 border-borderblack">
        <div className="max-w-screen-xl mx-auto">
          {" "}
          <div className="grid grid-cols-[18%_auto_25%] items-center ">
            <div className="border-r-2 text-center border-borderblack py-[1.38rem]  ">
              <Image
                src={darkMode ? images.image2 : images.image}
                alt="logo"
                className="logo-dev inline-block"
                width={170}
                height={170}
              />
            </div>
            <div className="hidden md:block pl-10 py-6   border-r-2 border-borderblack">
              <ul className="flex font-semibold justify-center items-center gap-12  dark:text-white">
                {Object.values(headerItem).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setActive(index)}
                    className={`${
                      active === index ? "active" : ""
                    } hover:text-mainColor hover:bg-mainColorten dark:hover:text-darkmainColor dark:hover:bg-darkmainColorten p-[2px_10px_3px]  `}
                  >
                    <a href={`#${item.page}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 items-center ">
              <div className="flex-none border-r-2 border-borderblack py-6 ">
                <div
                  onClick={toggleDarkMode}
                  className="text-gray-900  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:text-white "
                >
                  {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
              </div>
              <div className="grow text-center">
                {" "}
                <button className="rounded-[8px] inline-block bg-[#ff9728db] text-white font-semibold  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border-2 border-borderblack  dark:border-darkmainColor dark:text-darkmainColor  p-[1px_10px_2px] sm:p-[5px_24px_6px] dark:hover:bg-darkmainColorten hover:bg-mainColorten">
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
            </div>
            <div className="sm:hidden block py-6 ">
              <div className="relative">
                <button onClick={handleToggle} className="text-xl">
                  <HiMenu className="dark:text-white" />
                </button>
                {toggle ? (
                  <div>
                    <div
                      onClick={handleToggle}
                      className="fixed z-10 bg-transparent top-0 right-0 left-0 bottom-0 m-auto "
                    ></div>

                    <div className="absolute top-[45px] bg-white dark:bg-darksectionColor dark:text-white left-[-120px]">
                      <ul className="shadow-md min-w-[150px]  !pb-0 ">
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
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
