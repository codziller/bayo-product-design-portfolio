import "styles/globals.css";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Head from "next/head";
import * as gtag from "utils/gtag";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Bayo</title>

        <meta name="description" content="Bayo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bayo" />
        <meta
          property="og:description"
          content="Find reliable cleaning and laundry services at your fingertips from our vetted pool of providers."
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Bayo" />
        <meta name="twitter:creator" content="@Bayo" />
        <meta name="twitter:title" content="Bayo" />
        <meta
          name="twitter:description"
          content="Find reliable cleaning and laundry services at your fingertips from our vetted pool of providers."
        />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta name="twitter:image:alt" content="" />

        <meta name="twitter" content="summary_large_image" />
        {/* <meta
          name="“google-site-verification”"
          content=""
        /> */}
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtm-tag-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${gtag.GA_TRACKING_ID}', {
         page_path: window.location.pathname,
       });
     `,
        }}
      />
      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}
