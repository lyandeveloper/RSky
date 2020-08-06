import Head from 'next/head';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from 'react-icons/fa';
import Header from '../components/Header';
import House from '../components/House';

export default function App() {
  return (
    <>
      <Head>
        <title>R.State</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main>
        <Header />
        <section className='hero container'>
          <div className='hero-text'>
            <h2>Encontre os melhores lugares para você morar</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              necessitatibus eum rerum quasi, mollitia accusamus sed quis
              quibusdam molestiae optio ab assumenda consequatur nulla suscipit
              earum odio natus enim temporibus?
            </p>
            <button type='button'>Saiba mais</button>
          </div>
          <div className='hero-banner'>
            <img
              src='https://www.richardmeier.com/wp-content/uploads/2019/06/685_1920x1080-min-1.jpg'
              alt=''
            />
          </div>
        </section>

        <section className='search container'>
          <form action=''>
            <label htmlFor='location'>
              Localização
              <input
                type='text'
                name='location'
                id='location'
                placeholder='Brazil'
              />
            </label>
            <label htmlFor='property-type'>
              Tipo de propriedade
              <input
                type='text'
                name='property-type'
                id='property-type'
                placeholder='Apartamento'
              />
            </label>
            <label htmlFor='max-price'>
              Preço máximo
              <input
                type='text'
                name='max-price'
                id='max-price'
                placeholder='R$ 600'
              />
            </label>
            <button type='submit'>Procurar</button>
          </form>
        </section>

        <section className='about-us container'>
          <div className='about-img'>
            <img
              src='https://data.1freewallpapers.com/download/mansion-a-ferrari-what-a-dream.jpg'
              alt=''
            />
          </div>
          <div className='about-text'>
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

            <button className='btn-about'>Saiba Mais</button>
          </div>
        </section>

        <section className='recent container'>
          <span className='recent-sub'>Recentes</span>
          <h2>Propriedades recentes</h2>
          <span className='recent-link'>
            <Link href='#'>Explorar mais</Link>
            <FaArrowRight size={14} color='#314862' />
          </span>

          <Swiper
            spaceBetween={150}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <House />
            </SwiperSlide>
            <SwiperSlide>
              <House />
            </SwiperSlide>
            <SwiperSlide>
              <House />
            </SwiperSlide>
            <SwiperSlide>
              <House />
            </SwiperSlide>
            <SwiperSlide>
              <House />
            </SwiperSlide>
            <SwiperSlide>
              <House />
            </SwiperSlide>
            ...
          </Swiper>
        </section>
      </main>
    </>
  );
}
