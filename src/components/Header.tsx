"use client";
import React, { useEffect, useState } from "react";
import { headerItem, DwnldButton, images } from "@/src/constant/constant";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { Headerdataprops } from "../models/Interface";

const Header = ({ darkMode, setDarkMode }: Headerdataprops) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-white dark:bg-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="h-[75px] flex justify-between items-center lg:grid lg:grid-cols-[18%_auto_25%]">
          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <Image
              src={darkMode ? images.image2 : images.image}
              alt="logo"
              className="logo-dev"
              width={170}
              height={170}
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-12 text-black dark:text-white">
              {Object.values(headerItem).map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`p-[2px_10px_3px] ${
                    activeIndex === index
                      ? "active"
                      : "hover:text-black hover:bg-blackten dark:hover:text-darkblack dark:hover:bg-darkblackten"
                  }`}
                >
                  <a href={`#${item.page}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-[5px_24px_6px] text-gray-900 dark:text-white"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>

            {/* Download CV Button */}
            <button className="rounded-[6px] bg-redreg text-white hover:bg-blackten dark:bg-darkblack dark:hover:bg-darkblackten p-[5px_24px_6px]">
              <Link href="/Nadeem_CV.pdf" download="Nadeem_CV.pdf" passHref>
                <span className="hidden md:block">{DwnldButton.btn}</span>
                <span className="md:hidden flex items-center gap-1">
                  <IoMdDownload /> CV
                </span>
              </Link>
            </button>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-xl p-[5px_24px_6px]"
                aria-label="Toggle Menu"
              >
                <HiMenu className="dark:text-white" />
              </button>

              {menuOpen && (
                <div>
                  {/* Overlay */}
                  <div
                    onClick={toggleMenu}
                    className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-transparent"
                  />

                  {/* Mobile Menu */}
                  <div className="absolute z-10 top-[45px] left-[-120px] bg-white dark:bg-darksectionColor dark:text-white min-w-[150px]">
                    <ul>
                      {Object.values(headerItem).map((item, index) => (
                        <li
                          key={index}
                          className="p-1.5 hover:bg-gray-300 dark:hover:bg-darkblackten"
                        >
                          <a href={`#${item.page}`}>{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
