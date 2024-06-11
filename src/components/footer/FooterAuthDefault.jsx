/*eslint-disable*/
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="z-[5] flex py-10 w-full bg-white shadow-lg flex-col items-center justify-between px-4 pb-4 lg:mb-6 lg:max-w-[100%] lg:flex-row xl:mb-2 xl:w-[1310px] xl:pb-6 border-t-8 border-gray-200">
      <p className="mb-6 text-center text-sm text-blue-700 hover:text-blue-500 md:text-base lg:mb-0">
        ©{1900 + new Date().getYear()} Lideta Subcity. All Rights Reserved.
      </p>
      <ul className="flex flex-col items-center sm:flex-row sm:flex-nowrap">
        <li className="mb-4 sm:mb-0 sm:mr-6 lg:mr-12 flex items-center">
          <FaPhoneAlt className="mr-2 text-blue-700" />
          <span className="text-sm md:text-base text-blue-700">
            +251 955 986 083
          </span>
        </li>
        <li className="mb-4 sm:mb-0 sm:mr-6 lg:mr-12 flex items-center">
          <FaEnvelope className="mr-2 text-blue-700" />
          <span className="text-sm md:text-base text-blue-700">
            lidetasubcityhr@gmail.com
          </span>
        </li>
        <li className="mb-4 sm:mb-0 sm:mr-6 lg:mr-12 flex items-center">
          <FaFacebook className="mr-2 text-blue-700" />
          <a
            target="_blank"
            href="https://www.facebook.com/lidetasubcity"
            className="text-sm md:text-base text-blue-700 hover:text-blue-500"
          >
            Facebook
          </a>
        </li>
        <li className="flex items-center">
          <FaTelegramPlane className="mr-2 text-blue-700" />
          <a
            target="_blank"
            href="https://t.me/lidetasubcity"
            className="text-sm md:text-base text-blue-700 hover:text-blue-500"
          >
            Telegram
          </a>
        </li>
      </ul>
    </div>
  );
}
