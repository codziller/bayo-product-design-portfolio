import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "assets/icons/logo.svg";
import LogoWhite from "../../../public/logo_white.svg";
import { Button } from "components/general/button";
import Hamburger from "./hamburger";

const Header = () => {
  const location = useRouter();

  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const scrolltoId = (id) => {
    var access = document?.getElementById(id);
    access?.scrollIntoView({ behavior: "smooth" }, false);
  };

  const headerLinks = [
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "FAQS",
      link: "/#faqs",
      onClick: () => scrolltoId("faqs"),
    },
    {
      title: "Contact Us",
      link: "mailto:hello@cleand.com",
    },
  ];

  const changeNavbarBg = () => {
    if (window.scrollY >= 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    changeNavbarBg();
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  const pathname = location.pathname;
  const pathIsNotBase = pathname !== "/";

  return (
    <header
      className={`bg-white transition-colors duration-500 ease-in-out website-header flex flex-row justify-between items-center w-full h-[64px] md:h-[84px] px-5 md:px-14 lg:px-16 2xl:px-20 z-50 drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] max-w-9xl mx-auto`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto w-full">
        <Link
          className="!my-0 z-[99999] flex items-center justify-start gap-1 ml-[-16px]"
          href="/"
        >
          {sidenavOpen ? (
            <LogoWhite className="scale-[0.8]" />
          ) : (
            <Logo className="scale-[0.8]" />
          )}
        </Link>

        <div
          className={`hidden md:flex justify-end items-center px-10 pt-[9px] pb-[3px] w-fit space-x-5 transition-all duration-150 ease-in-out  rounded-[87px] `}
        >
          {headerLinks.map(({ title, link, onClick }) => (
            <div
              onClick={onClick && onClick}
              className="relative w-full h-full"
              key={title}
            >
              <Link
                href={link}
                className={`flex justify-center items-center hover:text-blue text-grey-blue font-semibold space-x-1.5 mb-[6px] py-1  px-2.5 icon-text transition-all duration-300 ease-in-out
                 
                 ${
                   pathIsNotBase &&
                   link.includes(pathname) &&
                   `text-grey-darker`
                 }`}
              >
                <span className={`text-current whitespace-nowrap`}>
                  {title}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden slg:flex flex-row justify-start items-center space-x-2 pl-2">
          <Link className="w-full" href="/vendor-sign-up">
            <Button text="Become a vendor" isOutline />
          </Link>
          <a target="_blank" rel="noreferrer">
            <Button text="Join waitlist" />
          </a>
        </div>

        <Hamburger
          handlecClick={() => {
            setSidenavOpen(!sidenavOpen);
          }}
          className={sidenavOpen ? "ham_crossed" : ""}
        />

        {/* Mobile side nav */}
        <div
          className={`flex flex-col justify-start items-center lg:hidden bg-grey-darker py-24 px-5 sm:px-10 fixed top-0 right-0 left-0 bottom-0 h-screen w-full transition-all duration-150 ease-in-out overflow-y-scroll ${
            sidenavOpen ? "translate-x-0 flex" : "-translate-x-[150%]"
          }`}
        >
          {headerLinks.map(({ title, link, onClick, notPage }) => (
            <div
              onClick={onClick && onClick}
              className={`relative w-full mb-6 text-center `}
              key={title}
            >
              <div
                className={`flex justify-center items-center hover:text-blue text-white text-base font-light space-x-14 mb-6 ${
                  pathIsNotBase && link.includes(pathname) && "!text-blue"
                }`}
              >
                <Link href={notPage ? "#" : link}>
                  <span className="text-current whitespace-nowrap">
                    {title}
                  </span>
                </Link>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-start items-center gap-8 w-full">
            <Link className="w-full" href="/vendor-sign-up">
              <Button text="Become a vendor" isOutline fullWidth />
            </Link>
            <a target="_blank" rel="noreferrer" className="w-full">
              <Button text="Join waitlist" className="w-full" />
            </a>
          </div>
        </div>
        {/* Mobile side nav */}
      </div>
    </header>
  );
};

export default Header;
