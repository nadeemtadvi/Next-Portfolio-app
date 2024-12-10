"use client";

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
    <div className="bg-purplelight dark:bg-darkbgcolor">
      <div className="">
        {/* Success Message */}
        {showMessage && (
          <p className="fixed top-10 right-30 z-50 bg-green-100 rounded-[6px] text-green-600 p-4 text-[20px]">
            Message has been sent!
          </p>
        )}

        {/* Contact Form Section */}
        <div className="lg:grid sm:grid-cols-[40%_auto]">
          {/* Contact Details */}
          <div className="relative mb-6 sm:mb-0">
          
            <div className="lg:p-5">
              {Contact.contactList.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[60px_auto] lg:grid-cols-[50px_auto] items-center mb-3 sm:mb-8"
                >
                  <div className="flex justify-center items-center w-10 h-10 bg-purplereg text-white dark:bg-darkblack dark:text-white rounded-[6px] text-[20px]">
                    {item.icon && <item.icon />}
                  </div>
                  <div className="lg:pl-2">
                    <h5 className="text-blurtext dark:text-darktext text-[1.04rem] mb-1">
                      {item.title}
                    </h5>
                    <h5 className="text-white dark:text-darkhtext font-medium text-[1.04rem]">
                      {item.subtitle}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:p-5 lg:pl-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:gap-6 md:grid-cols-2 mb-10">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full p-2.5 text-sm bg-transparent dark:bg-black dark:text-gray-200 rounded-[6px] outline-none focus:ring focus:ring-black dark:focus:ring-darkblack"
                    placeholder={Contact.fullname}
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full p-2.5 text-sm bg-transparent dark:bg-black dark:text-gray-200 rounded-[6px] outline-none focus:ring focus:ring-black dark:focus:ring-darkblack"
                    placeholder={Contact.email}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="block w-full p-2.5 text-sm bg-transparent dark:bg-black dark:text-gray-200 rounded-[6px] outline-none focus:ring focus:ring-black dark:focus:ring-darkblack"
                    placeholder={Contact.phone}
                    required
                  />
                  <ValidationError prefix="Tel" field="tel" errors={state.errors} />
                </div>
              </div>
              <div className="mb-10">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full p-2.5 text-sm bg-transparent dark:bg-black dark:text-gray-200 rounded-[6px] outline-none focus:ring focus:ring-black dark:focus:ring-darkblack"
                  placeholder={Contact.message}
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-redreg text-white dark:text-darkbgcolor rounded-[6px] p-[5px_24px_6px] hover:shadow-md"
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
