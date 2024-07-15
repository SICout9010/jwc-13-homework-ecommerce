import React from "react";
import { DM_Sans } from "next/font/google";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

// Font section
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Header() {
  return (
    <nav className="w-full flex justify-center bg-white">
      <div className="w-full flex items-center justify-between gap-1 mx-[100px] my-[32px] max-w-[1240px]">
        <h1 className={`${dm_sans.className} font-bold text-3xl`}>JWC.CO</h1>
        <ul className="flex justify-between gap-4">
          <li className="flex gap-1 items-center">
            Shop
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5306 10.468L8.53063 5.46804C8.46095 5.39812 8.37816 5.34265 8.28699 5.30479C8.19583 5.26694 8.09809 5.24745 7.99938 5.24745C7.90067 5.24745 7.80293 5.26694 7.71176 5.30479C7.6206 5.34265 7.53781 5.39812 7.46813 5.46804L2.46813 10.468C2.32723 10.6089 2.24808 10.8 2.24808 10.9993C2.24808 11.1986 2.32723 11.3896 2.46813 11.5305C2.60902 11.6714 2.80012 11.7506 2.99938 11.7506C3.19864 11.7506 3.38973 11.6714 3.53063 11.5305L8 7.06117L12.4694 11.5312C12.6103 11.6721 12.8014 11.7512 13.0006 11.7512C13.1999 11.7512 13.391 11.6721 13.5319 11.5312C13.6728 11.3903 13.7519 11.1992 13.7519 10.9999C13.7519 10.8007 13.6728 10.6096 13.5319 10.4687L13.5306 10.468Z"
                fill="black"
              />
            </svg>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        {/* Search bar */}
        <div className="w-full max-w-[590px] flex border-2 bg-gray-200 p-3 rounded-[62px] gap-4">
          <IoSearchOutline className="w-6 h-6" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-gray-200 outline-none"
          />
        </div>
        <div className="flex gap-4">
          <IoCartOutline className="w-6 h-6" />
          <IoPersonCircleOutline className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
