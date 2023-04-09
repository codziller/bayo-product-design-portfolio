import Head from "next/head";
import PrivacyPolicyList from "./legal/privacy-policy";

export default function Home() {
  return (
    <>
      <Head>
        <title>Housepadi</title>
        <meta name="description" content="Housepadi" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Housepadi" />
        <meta property="og:description" content="Housepadi" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@housepadi" />
        <meta name="twitter:creator" content="@housepadi" />
        <meta name="twitter:title" content="Housepadi" />
        <meta name="twitter:description" content="Housepadi" />
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
        <PrivacyPolicyList />
      </main>
    </>
  );
}
