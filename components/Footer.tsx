import React from "react";
import Image from "next/image";
import payment_methods from "/public/images/payment_methods.png";
import { DM_Sans } from "next/font/google";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";

// Font section
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <main className="flex flex-col items-center relative mt-[10%]">
      <div className="flex items-center justify-between p-8 px-20 bg-black w-[1440px] h-[180px] rounded-[20px] absolute top-[-20%] text-white">
        <h1 className="text-[40px] font-bold leading-tight">
          STAY UPTO DATE ABOUT <br />
          OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col w-[349px] max-h-[105px] gap-3">
          <div className="flex items-center p-4 bg-white h-[48px] rounded-[62px] gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
                fill="black"
                fill-opacity="0.4"
              />
            </svg>
            <p className="text-[#00000066] text-start">Enter your email address</p>
          </div>
          <div className="text-black flex items-center justify-center bg-white h-[48px]  rounded-[62px]">
            <p className="font-medium text-base">Subscribe to Newsletter</p>
          </div>
        </div>
      </div>
      <footer className="w-full flex flex-col items-center justify-center bg-[#F0F0F0] min-h-[499px] gap-4">
        <div className="w-full flex items-center justify-between gap-1 my-8 max-w-[1440px]">
          <div className="flex flex-col items-start justify-center gap-[32px]">
            <h1 className={`${dm_sans.className} text-4xl font-bold`}>
              JWC.CO
            </h1>
            <p className="opacity-60">
              We have clothes that suits your style
              <br /> and which you’re proud to wear.
              <br /> From women to men.
            </p>
            <div className="flex gap-4">
              <IoLogoTwitter className="w-6 h-6" />
              <FiFacebook className="w-6 h-6" />
              <IoLogoInstagram className="w-6 h-6" />
              <IoLogoGithub className="w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <h1 className="text-base font-bold">C O M P A N Y</h1>
            <ul className="space-y-4">
              <li className="opacity-60">About</li>
              <li className="opacity-60">Features</li>
              <li className="opacity-60">Works</li>
              <li className="opacity-60">Career</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <h1 className="text-base font-bold">H E L P</h1>
            <ul className="space-y-4">
              <li className="opacity-60">Customer Support</li>
              <li className="opacity-60">Delivery Details</li>
              <li className="opacity-60">Terms & Conditions</li>
              <li className="opacity-60">Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <h1 className="text-base font-bold">F A Q</h1>
            <ul className="space-y-4">
              <li className="opacity-60">Account</li>
              <li className="opacity-60">Manage Deliveries</li>
              <li className="opacity-60">Orders</li>
              <li className="opacity-60">Payments</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <h1 className="text-base font-bold">R E S O U R C E S</h1>
            <ul className="space-y-4">
              <li className="opacity-60">Free eBooks</li>
              <li className="opacity-60">Development Tutorial</li>
              <li className="opacity-60">How to - Blog</li>
              <li className="opacity-60">Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div className="w-[75%] h-0.5 bg-[#0000001A]"></div>

        <div className="min-w-[1500px] flex items-center justify-between">
          <p className="opacity-60">
            JWC.CO © 2000-2023, All Rights Reserved
          </p>
          <Image
            src={payment_methods}
            alt="Payment methods"
            width={300}
            height={300}
            className="self-end"
          />
        </div>
      </footer>
    </main>
  );
}

export default Footer;
