import React from 'react';
import {
  FaArrowRight,
  FaHandshake,
  FaPiggyBank,
  FaSearch
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import estates from '../../services/content';
import Header from '../Header';
import RecentEstate from '../RecentEstate';
import Footer from '../Footer';
import styles from './styles.module.scss';
import { useWindowSize } from '../../helpers/useWindowSize';

function LandingPage() {
  const { width, height } = useWindowSize();
  return (
    <>
      <Header />
      <section className={`${styles.hero} container`}>
        <div className={styles.hero_text}>
          <h2>Encontre os melhores lugares para você morar</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            necessitatibus eum rerum quasi, mollitia accusamus sed quis
            quibusdam molestiae optio ab assumenda consequatur nulla suscipit
            earum odio natus enim temporibus?
          </p>
          <button type="button">Saiba mais</button>
        </div>
        <div className={styles.hero_banner}>
          <img
            src="https://wallpapers.com/images/featured/beautiful-house-x1yu28g8twzle26l.jpg"
            alt=""
          />
        </div>
      </section>

      <section className={`${styles.search} container`}>
        <form action="">
          <label htmlFor="location">
            Localização
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Brazil"
            />
          </label>
          <label htmlFor="property-type">
            Tipo de propriedade
            <input
              type="text"
              name="property-type"
              id="property-type"
              placeholder="Apartamento"
            />
          </label>
          <label htmlFor="max-price">
            Preço máximo
            <input
              type="text"
              name="max-price"
              id="max-price"
              placeholder="R$ 600"
            />
          </label>
          <button type="submit">Procurar</button>
        </form>
      </section>

      <section className={`${styles.about_us} container`}>
        <div className={styles.about_img}>
          <img
            src="https://data.1freewallpapers.com/download/mansion-a-ferrari-what-a-dream.jpg"
            alt=""
          />
        </div>
        <div className={styles.about_text}>
          <span>Sobre nós</span>
          <h2>Nós providenciamos as melhores propriedades para você!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eveniet nesciunt consequatur minima! Dolor officia, soluta
            expedita temporibus repudiandae quasi velit atque, vel debitis,
            corrupti sed amet nemo quod vero!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            eveniet nesciunt consequatur minima! Dolor officia, soluta
            expedita temporibus repudiandae quasi velit atque, vel debitis
          </p>

          <button className={styles.btn_about}>Saiba Mais</button>
        </div>
      </section>

      <section className={`${styles.recent} container`}>
        <span className={styles.recent_sub}>Recentes</span>
        <h2>Propriedades recentes</h2>
        <span className={styles.recent_link}>
          <a href="#">Explorar mais</a>
          <FaArrowRight size={14} color="#314862" />
        </span> 

        <Swiper spaceBetween={width === 1024 ? -280 : width <= 768 ? -40 : 150} slidesPerView={width <= 425 ? 1 : width <= 1024 ? 2 : 4}>
          {estates.map((estate) => (
            <SwiperSlide>
              <RecentEstate
                imgUrl={estate.img}
                name={estate.name}
                location={estate.location}
                rooms={estate.rooms}
                bathrooms={estate.bathrooms}
                price={estate.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.how_works}>
        <span>Serviços</span>
        <h2>Como funciona</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veritatis! Quisquam perspiciatis quidem cum voluptas libero.
        </p>

        <div className={`${styles.services_wrapper} container`}>
          <div className={styles.service}>
            <FaSearch size={30} color="#2289ff" />
            <span>Encontre um lar</span>
            <p>
              Seja um apartamento ou uma casa simples. Encontre propriedades
              de diversos tipos preços e escolha uma de acordo com seu gosto
            </p>
          </div>

          <div className={styles.service}>
            <FaHandshake size={30} color="#2289ff" />
            <span>Corretores</span>
            <p>
              Nosso sistema consta com uma gama de corretores, você pode
              filtrar pelos melhores corretores e também avalia-los de acordo
              com seus serviços
            </p>
          </div>

          <div className={styles.service}>
            <FaPiggyBank size={30} color="#2289ff" />
            <span>Seja um vendedor</span>
            <p>
              Caso não queira comprar uma propriedade e queira vender uma,
              você também pode colocar suas propriedades a venda
            </p>
          </div>
        </div>
      </section>

      <section className={styles.highlights}>
        <span>Destaques</span>
        <h2>Propriedades em destaque</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
          veritatis! Quisquam perspiciatis quidem cum voluptas libero.
        </p>

        <div className={`${styles.houses} container`}>
          {estates.map((estate) => (
            <RecentEstate
              imgUrl={estate.img}
              name={estate.name}
              location={estate.location}
              rooms={estate.rooms}
              bathrooms={estate.bathrooms}
              price={estate.price}
            />
          ))}
        </div>

        <button type="button">Carregar mais</button>
      </section>

      <section className={styles.help}>
        <h2>Alguma dúvida?</h2>
        <h2>Deixe-nos ajudar você</h2>

        <form className="container" action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
      <Footer/>
    </>
  );
}

export default LandingPage;
