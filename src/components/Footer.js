import React from "react";
import logo from ".././image/image 1.svg";
import logo1 from ".././image/social/image 10.png";
import logo2 from ".././image/social/image 11.png";
import logo3 from ".././image/social/image 12.png";
import logo4 from ".././image/social/image 13.png";
import footerlogo from "./../image/pngwing 1.png";

const Footer = () => {
  return (
    <div className="bg-black pt-5">
      <img className="w-[110px] mx-auto" src={logo} alt="" />
      <div className="flex justify-center items-center space-x-7 mt-5">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
      <p className="text-center text-white mt-7 mb-5">
        Copyright © 2021. FAFC. All rights reserved.
      </p>
      <img
        src={footerlogo}
        alt=""
        className="w-full md:mt-[-450px] lg:mt-[-480px] 2xl:mt-[-580px]"
      />
    </div>
  );
};

export default Footer;
