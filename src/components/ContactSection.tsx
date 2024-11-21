"use client";
import React, { useEffect, useState } from "react";
import { Contact } from "../constant/constant";
import { useForm, ValidationError } from "@formspree/react";
import cancelImg from "../assets/Images/Shapes/wrong.png";
import Image from "next/image";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xovqewnl");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="">
      <div className="overflow-x-hidden whitespace-nowrap bg-white border-t-2 border-b-2 border-mainColor  text-[1.4rem] font-semibold text-mainColor">
        <div className="moveelement  ">
          <h4 className="inline-block py-3 px-12"> {Contact.contact}</h4>
          <h4 className="inline-block py-3 px-12"> {Contact.contact}</h4>
          <h4 className="inline-block py-3 px-12"> {Contact.contact}</h4>
          <h4 className="inline-block py-3 px-12"> {Contact.contact}</h4>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl  ">
        {showMessage && (
          <p className=" text-[20px] bg-green-100 rounded-[4px] text-green-600 z-50 fixed top-[10px] right-[30px] p-[4px_50px_7px]">
            Message has been sent!
          </p>
        )}
        <div className=" sm:grid grid-cols-[40%_auto] ">
          <div className="relative">
            <Image
              src={cancelImg}
              alt="dp"
              width={128}
              height={128}
              className="absolute  top-[3rem] left-[-1rem] "
            />
            <div className="p-5 pt-16  ">
              {Contact.contactList.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[50px_auto] items-center mb-3 sm:mb-8"
                >
                  <div>
                    <div className="rounded-[10px] border-2 border-mainColor shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] w-10 h-10 bg-[#90A7EB] text-white dark:bg-darkmainColor dark:text-borderblack flex justify-center items-center text-[20px]">
                      {item.icon && <item.icon />}
                    </div>
                  </div>
                  <div>
                    <div className="pl-2 ">
                      <h5 className="dark:text-darkblurtext text-blurtext text-[1.04rem] mb-1">
                        {item.title}
                      </h5>
                      <h5 className="dark:text-darktitletext text-titletext font-medium text-[1.04rem] ">
                        {item.subtitle}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 pt-16 pl-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:gap-6  md:grid-cols-2 mb-10">
                <div className="mb-4">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="rounded-[10px] bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border-2 border-borderblack bg-transparent outline-none  text-gray-900 dark:text-gray-200 text-sm  dark:bg-transparent dark:focus:ring-darkmainColor dark:focus:border-darkmainColor focus:ring-mainColor focus:border-mainColor block w-full p-2.5"
                    placeholder={Contact.fullname}
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-[10px] bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:bg-transparent bg-transparent dark:text-gray-200 dark:focus:ring-darkmainColor dark:focus:border-darkmainColor border-2 border-borderblack outline-none text-gray-900 text-sm  focus:ring-mainColor focus:border-mainColor block w-full p-2.5"
                    placeholder={Contact.email}
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="rounded-[10px] bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:bg-transparent bg-transparent dark:text-gray-200 dark:focus:ring-darkmainColor dark:focus:border-darkmainColor border-2 border-borderblack outline-none text-gray-900 text-sm  focus:ring-mainColor focus:border-mainColor block w-full p-2.5"
                    placeholder={Contact.phone}
                    required
                  />
                  <ValidationError
                    prefix="Tel"
                    field="tel"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="mb-10">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-[10px] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:bg-transparent dark:focus:ring-darkmainColor dark:text-gray-200 dark:focus:border-darkmainColor block p-2.5 w-full text-sm outline-none text-gray-900   border-2 border-borderblack focus:ring-mainColor focus:border-mainColor"
                  placeholder={Contact.message}
                  defaultValue={""}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#ff9728db] rounded-[10px] border-2 border-mainColor shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] text-white font-semibold dark:bg-darkmainColor dark:text-borderblack  p-[5px_24px_6px] hover:bg-[#111b8d]"
                >
                  {Contact.msgButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
