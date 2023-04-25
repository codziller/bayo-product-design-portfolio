import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/images/bayo-img.png" as="image" />
        <link rel="preload" href="/images/hero-about.png" as="image" />
        <link rel="preload" href="/images/pl-hero.png" as="image" />
        <link rel="preload" href="/images/virtual-account.png" as="image" />
        <link rel="preload" href="/images/payment-link.png" as="image" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
