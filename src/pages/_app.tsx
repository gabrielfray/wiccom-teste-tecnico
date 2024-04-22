import React from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import "@/styles/swiperStyles.css";
import GlobalStyles from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
