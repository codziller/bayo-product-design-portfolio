import React from "react";
import Link from "next/link";

import Logo from "assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="website-footer flex flex-col justify-center items-center w-full py-8 md:py-12 px-5 md:px-[5%] lg:px-[8%] bg-black space-y-8 md:space-y-12 relative overflow-hidden ">
      <Link className="!my-0" href="/">
        <Logo className="scale-[0.95]" />
      </Link>
      <div className="flex flex-row justify-between items-center w-full border-t-1/2 border-grey-fade pt-4 md:pt-10">
        <p className="w-full h-full text-center text-grey-white font-light text-sm md:text-base md:px-6 opacity-[0.9] leading-loose ">
          © {new Date().getFullYear()} Housepadi, All Rights Reserved
        </p>
      </div>
      <div className="blue-black-fade-gradient absolute bottom-[-50px] right-[-50px] min-h-[450px] min-w-[300px] rounded-full" />
    </footer>
  );
};

export default Footer;
