"use client";
import React, { useEffect, useState } from "react";
import { Contact } from "../constant/constant";
import { useForm, ValidationError } from "@formspree/react";
import cancelImg from "../assets/Images/Shapes/wrong.png";
import Image from "next/image";
import pinImage from "../assets/Images/Shapes/pngwingReverse.png"


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
     
      <div className="bg-purplelight  dark:bg-darkbgcolor">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-8 py-6 sm:py-10 lg:py-20">
          {showMessage && (
            <p className=" text-[20px] bg-green-100  text-green-600 z-50 fixed top-[10px] right-[30px] p-[4px_50px_7px]">
              Message has been sent!
            </p>
          )}
          <div className="">
            <h4
              id="skills"
              className="dark:text-darkbgcolor  text-[2rem]  mb-12 text-[#252525]  text-center  bg-[]"
            >
              <h6 className="relative rotate-[14deg] inline-block  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] p-[5px_26px_6px]  font-medium border   bg-purplereg  dark:-darkblackshadow">
                {Contact.contact}
                <Image
                      src={pinImage}
                      alt="dp"
                      width={100}
                      height={100}
                      className="absolute w-[60px] top-[-1.5rem] left-[-2rem]"
                    />
              </h6>
            </h4>
          </div>
          <div className=" lg:grid sm:grid-cols-[40%_auto] ">
            <div className="relative">
              <Image
                src={cancelImg}
                alt="dp"
                width={128}
                height={128}
                className="absolute w-[106px] lg:w-[120px] h-auto top-[-0.25rem] lg:top-[0.75rem] lg:left-[-1rem] left-[-2rem] "
              />
              <div className="lg:p-5  mb-6 sm:mb-0 ">
                {Contact.contactList.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[60px_auto] lg:grid-cols-[50px_auto] items-center mb-3 sm:mb-8"
                  >
                    <div>
                      <div className=" border  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] w-10 h-10 bg-purplereg text-[#252525] dark:bg-darkblackshadow dark:text-blackshadow flex justify-center items-center text-[20px]">
                        {item.icon && <item.icon />}
                      </div>
                    </div>
                    <div>
                      <div className="lg:pl-2 ">
                        <h5 className="dark:text-darktext text-blurtext text-[1.04rem] mb-1">
                          {item.title}
                        </h5>
                        <h5 className="dark:text-darkhtext text-titletext font-medium text-[1.04rem] ">
                          {item.subtitle}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:p-5 lg:pl-10">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-3 sm:gap-6  md:grid-cols-2 mb-10">
                  <div className="md:mb-4">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className=" bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] border  bg-transparent outline-none  text-gray-900 dark:text-gray-200 text-sm  dark:bg-blackshadow dark:focus:ring-darkblackshadow dark:focus:border-darkblackshadow focus:ring-blackshadow focus: block w-full p-2.5"
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
                      className=" bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:bg-blackshadow bg-transparent dark:text-gray-200 dark:focus:ring-darkblackshadow dark:focus:border-darkblackshadow border  outline-none text-gray-900 text-sm  focus:ring-blackshadow focus: block w-full p-2.5"
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
                      className=" bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:bg-blackshadow bg-transparent dark:text-gray-200 dark:focus:ring-darkblackshadow dark:focus:border-darkblackshadow border  outline-none text-gray-900 text-sm  focus:ring-blackshadow focus: block w-full p-2.5"
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
                    className=" shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] dark:bg-blackshadow dark:focus:ring-darkblackshadow dark:text-gray-200 dark:focus:border-darkblackshadow block p-2.5 w-full text-sm outline-none text-gray-900   border  focus:ring-blackshadow focus:"
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
                    className="bg-redreg  border  shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] text-[#252525] font-medium  dark:text-darkbgcolor  p-[5px_24px_6px] "
                  >
                    {Contact.msgButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
