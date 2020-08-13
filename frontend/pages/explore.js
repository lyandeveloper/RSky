import React from "react";
import Head from "next/head";
import Header from "../components/HeaderSecondary";

function Explore() {
  return (
    <>
      <Head>
        <title>RSky | Explorar</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
    </>
  );
}

export default Explore;
