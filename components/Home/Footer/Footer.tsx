import React from "react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold ">
            {/* Solution */}
            </h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Enterprice */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* By Work flow */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* By Team */}
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold ">
            {/* Company */}
            </h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* About Us */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* News & Press */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Our Customer */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Leadership */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Careers */}
          </p>
        </div>
        {/* 3rd */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold ">
            {/* Resources */}
            </h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Blog */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Webinar & Events */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* Podcast */}
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            {/* E-book & Guides */}
          </p>
        </div>
        {/* 4th part  */}
        <div>
          <h1 className="text-lg font-bold ">
            {/* Contact Us */}
          </h1>
          <div className="mt-6">
            
            
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">
              {/* Our Email */}
              </h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              
            </h1>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Webdev. All rights reserved
        </p>
        <h1 className="text-sm text-gray-600">
              
              </h1>
        <h1 className="text-base font-bold text-blue-950 mt-1">
        Our Mobile Number===080-5519-5711
            </h1>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <span className="text-gray-500 hover:text-gray-800">
          <a
  href="https://www.facebook.com/profile.php?id=61572949598458"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-gray-800"
>
  <FaFacebook />
</a>
          </span>
          <span className="text-gray-500 hover:text-gray-800">
          <a
        href="https://x.com/Webuild336539" // あなたのXのURLを指定
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800"
      >
        <FaXTwitter />
      </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
