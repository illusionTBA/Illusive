import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

const Dynamic: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register SW</title>
      </Head>
      <Script src="/register/dip.js"></Script>
    </>
  );
};

export default Dynamic;
