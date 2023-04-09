import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "assets/icons/logo.svg";

const Header = () => {
  const location = useRouter();

  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

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

  const pathIsUsecase = pathname.includes("/usecase");

  return (
    <header
      className={` ${
        pathIsUsecase ? "" : "border-b-[0.5px] border-grey"
      } bg-white transition-colors duration-500 ease-in-out website-header flex flex-row justify-between items-center w-full h-[64px] md:h-[84px] px-6 md:px-14 lg:px-16 2xl:px-20 z-50 drop-shadow-[0_0_30px_rgba(0,0,0,0.1)] max-w-9xl mx-auto`}
    >
      <div className="relative flex flex-row justify-between items-center mx-auto w-full">
        <Link
          className="!my-0 z-[99999] flex items-center justify-start gap-1"
          href="/"
        >
          <Logo className="scale-[0.8]" />

          <span className="text-black medium-font text-xl">Housepadi</span>
        </Link>

        {/* <div
          className={`hidden lg:flex justify-end items-center px-10 pt-[9px] pb-[3px] w-fit space-x-5 transition-all duration-150 ease-in-out  rounded-[87px] ${
            navbarBgIsBlueGradient ? "header-nav-section" : "bg-grey-greyLight"
          }`}
        >
          {headerLinks.map(({ title, link, links, slug }) => (
            <div
              className="relative w-full h-full"
              key={title}
              onMouseEnter={() => {
                setActiveNav(title);
              }}
              onMouseLeave={() => setActiveNav("")}
            >
              <Link
                href={link}
                className={`flex justify-center items-center ${
                  navbarBgIsBlueGradient
                    ? "hover:text-grey-light text-white stroke-grey"
                    : "hover:text-blue text-grey-text"
                }  font-light space-x-1.5 mb-[6px] py-1  px-2.5 icon-text transition-all duration-300 ease-in-out
                 
                 ${
                   pathIsNotBase &&
                   (link.includes(pathname) || pathname.includes(slug)) &&
                   `border-[0.8px] rounded-full active-nav ${headerLinksActiveClass} ${
                     links ? "pl-4" : "pl-2.5"
                   }  `
                 }`}
              >
                <span className={`text-current whitespace-nowrap`}>
                  {title}
                </span>
                {links && (
                  <ArrowDownIcon className="scale-[0.85] transition-all duration-300 ease-in-out" />
                )}
              </Link>
              {links && activeNav === title && (
                <Dropdown
                  links={links}
                  path={pathname}
                  onClick={() => setActiveNav("")}
                />
              )}
            </div>
          ))}
        </div> */}

        {/* <div className="hidden lg:flex flex-row justify-start items-center space-x-2 pl-2">
          <a target="_blank" rel="noreferrer">
            <Button
              text="Sign in"
              isOutline={!navbarBgIsBlueGradient}
              whiteBg={navbarBgIsBlueGradient}
              textColor={navbarBgIsBlueGradient && "black"}
              textClass="text-base"
            />
          </a>
          <a
          
            target="_blank"
            rel="noreferrer"
          >
            <Button blackBg text="Contact Sales" textClass="text-base" />
          </a>
        </div> */}

        {/* <Hamburger
          handlecClick={() => {
            setSidenavOpen(!sidenavOpen);
          }}
          className={sidenavOpen ? "ham_crossed" : ""}
          navbarBgIsBlueGradient={navbarBgIsBlueGradient}
        /> */}

        {/* Mobile side nav */}
        {/* <div
          className={`flex flex-col justify-start items-start lg:hidden bg-white py-24 px-5 sm:px-10 fixed top-0 right-0 left-0 bottom-0 h-screen w-full transition-all duration-150 ease-in-out overflow-y-scroll ${
            sidenavOpen ? "translate-x-0 flex" : "-translate-x-[150%]"
          }`}
        >
          {headerLinks.map(({ title, link, links, notPage }) => (
            <div
              className={`relative w-full mb-6 ${
                links ? "border-b-1/2 border-grey-bordercolor" : ""
              }`}
              key={title}
            >
              <div
                className={`flex justify-start items-center hover:text-blue text-grey-text text-base font-light space-x-14 mb-6 ${
                  pathIsNotBase && link.includes(pathname) && "!text-blue"
                }`}
                onClick={() => {
                  setActiveNav(activeNav ? "" : title);
                }}
              >
                <Link href={notPage ? "#" : link}>
                  <span className="text-current whitespace-nowrap">
                    {title}
                  </span>
                </Link>

                {links && (
                  <div>
                    <ArrowDownIcon className="text-blue stroke-current" />
                  </div>
                )}
              </div>
              {links &&
                activeNav === title &&
                links?.map(({ name, link, icon, href }) =>
                  link ? (
                    <Link
                      href={link}
                      key={name}
                      className={`flex justify-start items-center p-4 hover:text-blue text-grey-text text-base font-light whitespace-nowrap ${
                        pathIsNotBase && link.includes(pathname) && "!text-blue"
                      }`}
                      onClick={() => {
                        setActiveNav("");
                        setSidenavOpen(false);
                      }}
                    >
                      {icon}
                      <span className="text-current whitespace-nowrap pl-5">
                        {name}
                      </span>
                    </Link>
                  ) : href ? (
                    <a
                      href={href}
                      key={name}
                      className={`flex justify-between items-center p-4 hover:text-blue text-grey-text text-base font-light whitespace-nowrap gap-5`}
                      onClick={() => {
                        setActiveNav("");
                        setSidenavOpen(false);
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="text-current whitespace-nowrap pl-5">
                        {name}
                      </span>

                      <ArrowRight className="scale-[0.7]" />
                    </a>
                  ) : null
                )}
            </div>
          ))}

          <div className="flex flex-col justify-start items-center gap-8 w-full">
            <a
              className="w-full"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Sign in"
                isOutline={!navbarBgIsBlueGradient}
                whiteBg={navbarBgIsBlueGradient}
                textColor={navbarBgIsBlueGradient && "black"}
                textClass="text-base"
                fullWidth
              />
            </a>
            <a
              className="w-full"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                blackBg
                text="Contact Sales"
                textClass="text-base"
                fullWidth
              />
            </a>
          </div>
        </div> */}
        {/* Mobile side nav */}
      </div>
    </header>
  );
};

export default Header;
