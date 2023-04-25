import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Head from "next/head";

import Footer from "./Footer";
import { getPageByPath } from "utils/pages";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./hamburger";

const navs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Work",
    link: "/projects/virtual-account",
  },
  {
    title: "Email",
    url: "mailto:bayodeog@gmail.com",
  },
  {
    title: "Playlist",
    url: "https://open.spotify.com/playlist/2SgWOJ08z2ImPVYcGMrjIr?si=044497732f0a43fb&nd=1",
  },
  {
    title: "Read CV",
    url: "https://read.cv/bayothedesigner",
    type: "box",
  },
];
const Layout = ({ children }) => {
  const location = useRouter();
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    width < 1024 ? setSidenavOpen(false) : setSidenavOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const winWidth = window?.innerWidth;
    setWidth(winWidth);
    function handleResize() {
      setWidth(winWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathname = location.pathname;
  const pathIsNotBase = pathname !== "/";
  const pageMatch = getPageByPath(pathname);
  const page = pathIsNotBase ? pageMatch : null;

  return (
    <div className="w-screen min-h-screen flex flex-grow flex-col max-w-9xl mx-auto">
      {page && (
        <Head>
          <meta property="og:type" content="website" />
          <meta property="description" content={page.description} />
          <meta property="og:title" content={page.title} />
          <meta property="og:description" content={page.description} />
          <meta property="og:image" content={page.thumbnail} />

          <title>{page.title}</title>
        </Head>
      )}
      <header className="fixed w-full px-5 md:px-[8%] lg:px-[7%] py-2 bg-white z-[999]">
        <Hamburger
          handlecClick={() => {
            setSidenavOpen(!sidenavOpen);
          }}
          className={sidenavOpen ? "ham_crossed" : ""}
        />
      </header>

      {sidenavOpen && (
        <div
          className="fixed bg-black/25 top-0 left-0 w-screen h-screen z-[98] lg:hidden"
          onClick={() => setSidenavOpen(false)}
        />
      )}
      <aside
        className={`bg-white z-[99] w-[60%] max-w-[350px] lg:w-[220px] pb-28 min-h-[100vh] flex flex-col fixed 
         transition-transform duration-150 ease-in-out
          ${
            sidenavOpen ? "translate-x-[0]" : "-translate-x-[1000px]"
          } lg:translate-x-0
         `}
      >
        <div className="flex pl-20 flex-1 pt-[46px] flex-col justify-start items-start pb-10 w-full gap-3 cursor-pointer transition-all duration-150 ease-in-out">
          <Link
            className="z-[999] flex items-center justify-start gap-1"
            href="/"
          >
            <Image
              className="ml-2"
              src="/images/avatar.png"
              alt="avatar"
              width={50}
              height={50}
            />
          </Link>
          {navs.map(({ title, url, link, type, slug }) => (
            <Link
              href={link || url}
              key={title}
              className={`hover:!text-blue-hover px-2 py-1  ${
                type === "box"
                  ? "bg-black px-4 py-1 leading-loose text-white text-[18px] ml-[5px]"
                  : "text-grey-dark text-[22px]"
              } ${url ? "underline font-thin" : "font-light"} ${
                location.pathname === link && "!text-blue "
              }`}
              target={url && "_blank"}
              rel={url && "noreferrer"}
            >
              {title}
            </Link>
          ))}
        </div>
      </aside>

      <main
        className={`website-content  min-h-[100vh] w-full lg:pl-[220px] flex flex-col flex-grow bg-white`}
      >
        {children}
      </main>

      {/* Footer start */}
      <Footer />
      {/* Footer end */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
