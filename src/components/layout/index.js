import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";
import { getPageByPath } from "utils/pages";

const Layout = ({ children }) => {
  const location = useRouter();

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

      <Header />
      <section className="w-full flex flex-row flex-grow">
        <main
          className={`website-content w-full  md:mt-[80px] flex flex-col flex-grow bg-white`}
        >
          {children}
        </main>
      </section>
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
