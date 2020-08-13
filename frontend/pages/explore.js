import React from "react";
import Head from "next/head";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../components/HeaderSecondary";

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
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay
        slidesPerView={1}
        className="swiper container"
      >
        <SwiperSlide>
          <div className="house-carousel">
            <div className="overlay"></div>
            <div className="house-info">
              <div className="title">
                <h2>Palace</h2>
                <span>Toronto, Canadá</span>
              </div>

              <div className="price">
                <span>R$ 240.000</span>
                <span>30 propostas</span>
              </div>
            </div>
            <img
              src="https://troyhomes.co.uk/wp-content/uploads/2016/11/Mirror-House-4.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="house-carousel">
            <div className="overlay"></div>
            <div className="house-info">
              <div className="title">
                <h2>Atisha Palace</h2>
                <span>Las Vegas, Eua</span>
              </div>

              <div className="price">
                <span>R$ 180.000</span>
                <span>20 propostas</span>
              </div>
            </div>
            <img
              src="https://news3lv.com/resources/media/710495dd-b841-4a4a-989b-d54c7483da3f-large3x4_A7R00137HDR.jpg?1564019073984"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="house-carousel">
            <div className="overlay"></div>
            <div className="house-info">
              <div className="title">
                <h2>S Palace</h2>
                <span>Califórnia, Eua</span>
              </div>

              <div className="price">
                <span>R$ 150.000</span>
                <span>15 propostas</span>
              </div>
            </div>
            <img
              src="https://i.pinimg.com/originals/93/f9/96/93f996eff6750f30d56f6fed11edd368.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="house-carousel">
            <div className="overlay"></div>
            <div className="house-info">
              <div className="title">
                <h2>SA Villa</h2>
                <span>Rio de Janeiro, Brasil</span>
              </div>

              <div className="price">
                <span>R$ 120.000</span>
                <span>10 propostas</span>
              </div>
            </div>
            <img
              src="https://www.caandesign.com/wp-content/uploads/2015/07/Al-Rio-de-Janeiro-02-1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
        .house-carousel {
          position: relative;
          width: 100%;
          height: 600px; 
        }

        .house-carousel img {
          position; absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          object-fit: cover;
        } 

        .house-info {
          position: absolute; 
          z-index: 999;  
          bottom: 0;
          padding: 40px; 
          width: 100%; 
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price { 
          display: flex;
          flex-direction: column;
        }

        .price span:first-child{
          font-size: 28px;
          font-weight: semi-bold;
        }

        .house-info h2 {
          font-size: 60px;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,10,10,0.4);
        } 
      `}</style>
    </>
  );
}

export default Explore;
