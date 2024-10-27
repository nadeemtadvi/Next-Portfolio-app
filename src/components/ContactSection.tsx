import React from "react";
import { Contact } from "../constant/constant";

const ContactSection = () => {
  return (
    <div className="mb-[1rem] sm:mb-[4rem] p-5">
      <div className="text-center mb-[1rem] sm:mb-[4rem]">
        <button id='contact' className="mb-[1rem] rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]">
          {Contact.contact}
        </button>

        <h4 className="text-[2rem] text-titletext font-medium mb-2">
          {Contact.title}
        </h4>
        <p className="text-[1.04rem] text-subtext">{Contact.subtitle}</p>
      </div>
      <div className="sm:grid grid-cols-[40%_auto] ">
        <div>
          {Contact.contactList.map((item, index) => (
            <div key={index} className="grid grid-cols-[50px_auto] items-center mb-8">
              <div>
                <div className="rounded-[6px] w-10 h-10 bg-mainColor text-white flex justify-center items-center text-[20px]">{item.icon && <item.icon/>}</div>
              </div>
              <div>
                <div  className="pl-2 ">
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
          <form>
            <div className="grid gap-6  md:grid-cols-2 mb-6">
              <div>
                <input
                  type="text"
                  id="first_name"
                  className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-[6px] focus:ring-mainColor focus:border-mainColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mainColor dark:focus:border-mainColor"
                  placeholder={Contact.fullname}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-[6px] focus:ring-mainColor focus:border-mainColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mainColor dark:focus:border-mainColor"
                  placeholder={Contact.email}
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  className=" border border-gray-300 outline-none text-gray-900 text-sm rounded-[6px] focus:ring-mainColor focus:border-mainColor block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mainColor dark:focus:border-mainColor"
                  placeholder={Contact.phone}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm outline-none text-gray-900  rounded-[6px] border border-gray-300 focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mainColor dark:focus:border-mainColor"
                placeholder={Contact.message}
                defaultValue={""}
              />
            </div>
            <div className="text-end">
              <button className="bg-mainColor text-white rounded-[6px] p-[5px_24px_6px]">
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
