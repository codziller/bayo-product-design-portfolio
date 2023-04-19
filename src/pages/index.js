import Head from "next/head";
import { Nunito_Sans, Poppins } from "@next/font/google";
import HomePage from "./home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cleand</title>
        <meta name="description" content="Cleand" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cleand" />
        <meta property="og:description" content="Cleand" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Cleand" />
        <meta name="twitter:creator" content="@Cleand" />
        <meta name="twitter:title" content="Cleand" />
        <meta name="twitter:description" content="Cleand" />
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
      <main className="w-full">
        <HomePage />
      </main>
    </>
  );
}
