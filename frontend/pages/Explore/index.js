import React from 'react';
import Head from 'next/head';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/HeaderSecondary';
import SideBar from '../components/SideBar';
import Estate from '../components/Estate';

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
          <Estate
            imgUrl="https://troyhomes.co.uk/wp-content/uploads/2016/11/Mirror-House-4.jpg"
            price="240.000"
            description="Casa térrea com sala de estar , sala de jantar , cozinha, 5
              dormitórios"
            location="Toronto, Canadá"
            area="150m2"
            bathrooms={3}
            rooms={5}
          />
          <Estate
            imgUrl="https://europetrippers.files.wordpress.com/2013/04/10597113.jpg"
            location="Las Vegas, Eua"
            rooms={4}
            bathrooms={3}
            description="Uma bela casa com uma linda vista a espera de você."
            area="120m2"
            price="180.000"
          />
          <Estate
            imgUrl="https://i.pinimg.com/originals/93/f9/96/93f996eff6750f30d56f6fed11edd368.jpg"
            location="Califórnia, Eua"
            description="Casa com garagem, 2 andares e muito mais"
            rooms={4}
            bathrooms={2}
            area="100m2"
            price="150.000"
          />
          <Estate
            imgUrl="https://www.caandesign.com/wp-content/uploads/2015/07/Al-Rio-de-Janeiro-02-1.jpg"
            location="Rio de Janeiro, Brasil"
            description="Casa com uma vista linda de frente ao mar e com piscina"
            rooms={3}
            bathrooms={3}
            area="115m2"
            price="120.000"
          />
          <Estate
            imgUrl="https://imagens-revista.vivadecora.com.br/uploads/2015/06/Reforma-de-fachada2.jpg"
            location="São Paulo, Brasil"
            description="Desfrute morar na maior cidade do Brasil e no melhor lugar"
            rooms={2}
            bathrooms={3}
            area="124m2"
            price="80.000"
          />
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
