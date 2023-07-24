import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import estates from '../../services/content';
import Header from '../../components/HeaderSecondary';
import SideBar from '../../components/SideBar';
import Estate from '../../components/Estate'; 
import styles from './styles.module.scss';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

function Explore() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <section className={`${styles.houses_content} container`}>
          {estates.map((estate) => (
            <Estate
              key={estate.id}
              url={`/estate/${estate.id}/${estate.slug}`}
              imgUrl={estate.img}
              price={estate.price}
              description={estate.description}
              location={estate.location}
              area={estate.area}
              bathrooms={estate.bathrooms}
              rooms={estate.rooms}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Explore;
