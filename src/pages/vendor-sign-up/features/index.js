import React from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "assets/icons/logo.svg";
import Form from "./Form";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-start space-y-10 md:space-y-0 w-full min-h-[450px] h-screen md:space-x-8 website-banner pr-5 md:pr-0 pl-5 md:pl-[4%] lg:pl-[6%] relative bg-white z-20">
      <div className="flex flex-col justify-start items-start text-left md:basis-[55%] w-full h-fit z-[5] !ml-0 !mt-0">
        <header className="fixed top-0 flex flex-row justify-between items-center mx-auto w-full md:w-[55%] h-[64px] md:h-[84px] mb-4 bg-white z-[99999] pr-10 md:pr-0">
          <Link
            className="!my-0 z-[99999] flex items-center justify-start gap-1 ml-[-16px]"
            href="/"
          >
            <Logo className="scale-[0.8]" />
          </Link>

          <Link className="underline hidden sm:block" href="/">
            Go back
          </Link>
          <Link className="sm:hidden" href="/">
            <AiOutlineClose />
          </Link>
        </header>

        <Form />
      </div>

      {/* <div className="flex flex-col justify-center items-center md:items-end md:basis-[40%] w-full h-full "> */}
      <div className="hidden md:flex flex-col justify-center items-center md:items-end h-full bg-gloves_image bg-cover bg-no-repeat p-0 bg-center z-[8] fixed right-0 top-0 w-full md:min-w-[36%] md:max-w-[36%] " />
      {/* </div> */}
    </div>
  );
};

export default Banner;
