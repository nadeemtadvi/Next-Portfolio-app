"use client"
import React, { useEffect, useState } from "react";
import { Contact } from "../constant/constant";
import { useForm, ValidationError } from "@formspree/react";

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
    <div className="mb-[1rem] sm:mb-[4rem] p-5">
      <div className="text-center mb-[1rem] sm:mb-[4rem]">
        <button
          id="contact"
          className="mb-[1rem] rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]"
        >
          {Contact.contact}
        </button>

        <h4 className="text-[2rem] text-titletext font-medium mb-2">
          {Contact.title}
        </h4>
        <p className="text-[1.04rem] text-subtext">{Contact.subtitle}</p>
      </div>
      {showMessage && (
        <p className=" text-[20px] bg-green-100 rounded-[4px] text-green-600 z-50 fixed top-[10px] right-[30px] p-[4px_50px_7px]">
          Message has been sent!
        </p>
       )} 
      <div className="sm:grid grid-cols-[40%_auto] ">
        <div>
          {Contact.contactList.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[50px_auto] items-center mb-3 sm:mb-8"
            >
              <div>
                <div className="rounded-[6px] w-10 h-10 bg-mainColor text-white flex justify-center items-center text-[20px]">
                  {item.icon && <item.icon />}
                </div>
              </div>
              <div>
                <div className="pl-2 ">
                  <h5 className="text-blurtext text-[1.04rem] mb-1">
                    {item.title}
                  </h5>
                  <h5 className="text-titletext font-medium text-[1.04rem] ">
                    {item.subtitle}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:gap-6  md:grid-cols-2 mb-3 sm:mb-6">
              <div>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-[6px] focus:ring-mainColor focus:border-mainColor block w-full p-2.5"
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
                  className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-[6px] focus:ring-mainColor focus:border-mainColor block w-full p-2.5"
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
                  className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-[6px] focus:ring-mainColor focus:border-mainColor block w-full p-2.5"
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
            <div className="mb-3 sm:mb-6">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm outline-none text-gray-900  rounded-[6px] border border-gray-300 focus:ring-mainColor focus:border-mainColor"
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
                className="bg-mainColor text-white rounded-[6px] p-[5px_24px_6px] hover:bg-[#111b8d]"
              >
                {Contact.msgButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
