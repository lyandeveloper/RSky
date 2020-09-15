import React from "react";
import Head from "next/head";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/HeaderSecondary";
import SideBar from "../components/sideBar";
import House from "../components/House";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

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
      <main>
        <SideBar />
        <section className="houses_content container">
          <House />
          <House />
          <House />
          <House />
          <House />
          <House />
        </section>
      </main>
      <style jsx>{`
        main {
          width: 100%;
          background-color: #eee;
          display: flex;
          flex-direction: row;
        }

        .houses_content {
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
}

export default Explore;
