import React from 'react';
import Head from 'next/head';
import HeaderSecondary from '../components/HeaderSecondary';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FaWhatsapp,
  FaObjectUngroup,
  FaToilet,
  FaBed,
  FaRegHeart,
  FaShare,
} from 'react-icons/fa';
import Footer from '../components/Footer';

// import { Container } from './styles';

function EstateDetails() {
  return (
    <>
      <Head>
        <title>RSky | Details</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderSecondary />

      <section className="house-info-details">
        <div className="house-slide-container">
          <Swiper spaceBetween={150} slidesPerView={3}>
            <SwiperSlide>
              <div className="house-img-slide">
                <img
                  src="https://troyhomes.co.uk/wp-content/uploads/2016/11/Mirror-House-4.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="house-img-slide">
                <img
                  src="https://p0.pikist.com/photos/827/31/living-room-apartment-interior-design-indoors-decoration-room-house-interior-modern.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="house-img-slide">
                <img
                  src="https://www.telegraph.co.uk/content/dam/interiors/2018/spark/bathstore/bathstore-bathroom-interior.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="house-img-slide">
                <img
                  src="https://i.mlcdn.com.br/portaldalu/fotosconteudo/50960.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="house-img-slide">
                <img
                  src="https://houseoflastthings.com/wp-content/uploads/2018/10/Room-Interior-Design-Ideas.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <section className="house-details-body container">
          <div className="house-header-wrapper">
            <div className="house-details-header">
              <h2>Casa Térrea</h2>
              <p>Toronto, Canadá</p>
              <div className="house-details-features">
                <div className="house-features-items">
                  <FaObjectUngroup size={20} color="#2289ff" />
                  <span>150m2</span>
                </div>
                <div className="house-features-items">
                  <FaToilet size={20} color="#2289ff" />
                  <span>3</span>
                </div>
                <div className="house-features-items">
                  <FaBed size={20} color="#2289ff" />
                  <span>2</span>
                </div>
              </div>
            </div>
            <div className="house-details-price">
              <h2>R$ 240.000</h2>

              <div className="buttons">
                <button>
                  <FaRegHeart /> Favorito
                </button>

                <button>Contatar</button>
              </div>
            </div>
          </div>

          <div className="house-details-description">
            <div className="info">
              <h2>Descrição</h2>
              <p>
                Casa térrea com sala de estar , sala de jantar , cozinha, 3
                banheiros e 2 dormitórios
              </p>
            </div>
            <button className="button-secondary">
              <FaShare /> Compartilhar
            </button>
          </div>
        </section>
      </section>
      <style jsx>{`
        .house-details-body {
          margin-bottom: 20px;
        }

        .house-img-slide img {
          width: 800px;
          height: 500px;
        }

        .house-header-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 20px 0;
        }

        .house-details-body h2 {
          color: #333;
        }

        .house-details-header > h2 {
          font-size: 28px;
        }

        .house-details-header > p {
          font-weight: 300;
          color: #444;
        }

        .house-details-price {
          font-size: 28px;
          display: flex;
          align-items: flex-end;
          flex-direction: column;
        }

        .house-details-price button {
          margin-top: 20px;
        }

        .house-details-features {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        .house-features-items {
          display: flex;
          align-items: center;
          flex-direction: row;
          margin-right: 20px;
          padding: 10px;
          font-size: 14px;
        }

        .house-features-items span {
          margin-left: 8px;
          font-weight: 300;
          color: #444;
        }

        .house-details-description {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .house-details-price .buttons button {
          margin-left: 10px;
        }

        .house-details-description p {
          width: 300px;
          font-weight: 300;
          color: #444;
        }
      `}</style>
    </>
  );
}

export default EstateDetails;
