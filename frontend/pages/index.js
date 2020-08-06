import Head from 'next/head';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  FaArrowRight,
  FaSearch,
  FaMeetup,
  FaHandshake,
  FaPiggyBank,
} from 'react-icons/fa';
import Header from '../components/Header';
import House from '../components/House';

export default function App() {
  return (
    <>
      <Head>
        <title>RSky</title>
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

          <Swiper spaceBetween={150} slidesPerView={4}>
            <SwiperSlide>
              <House
                imgUrl='https://troyhomes.co.uk/wp-content/uploads/2016/11/Mirror-House-4.jpg'
                name='Palace'
                location='Toronto, Canadá'
                rooms={5}
                bathrooms={3}
                price='240.000'
              />
            </SwiperSlide>
            <SwiperSlide>
              <House
                imgUrl='https://europetrippers.files.wordpress.com/2013/04/10597113.jpg'
                name='Skb House'
                location='Amsterdã, Holanda'
                rooms={6}
                bathrooms={4}
                price='200.000'
              />
            </SwiperSlide>
            <SwiperSlide>
              <House
                imgUrl='https://news3lv.com/resources/media/710495dd-b841-4a4a-989b-d54c7483da3f-large3x4_A7R00137HDR.jpg?1564019073984'
                name='Atisha Palace'
                location='Las Vegas, Eua'
                rooms={4}
                bathrooms={3}
                price='180.000'
              />
            </SwiperSlide>
            <SwiperSlide>
              <House
                imgUrl='https://i.pinimg.com/originals/93/f9/96/93f996eff6750f30d56f6fed11edd368.jpg'
                name='S Palace'
                location='Califórnia, Eua'
                rooms={4}
                bathrooms={2}
                price='150.000'
              />
            </SwiperSlide>
            <SwiperSlide>
              <House
                imgUrl='https://www.caandesign.com/wp-content/uploads/2015/07/Al-Rio-de-Janeiro-02-1.jpg'
                name='SA Villa'
                location='Rio de Janeiro, Brasil'
                rooms={3}
                bathrooms={3}
                price='120.000'
              />
            </SwiperSlide>
            <SwiperSlide>
              <House
                imgUrl='https://imagens-revista.vivadecora.com.br/uploads/2015/06/Reforma-de-fachada2.jpg'
                name='A Place'
                location='São Paulo, Brasil'
                rooms={2}
                bathrooms={3}
                price='80.000'
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <session className='how-works'>
          <span>Serviços</span>
          <h2>Como funciona</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            veritatis! Quisquam perspiciatis quidem cum voluptas libero.
          </p>

          <div className='services-wrapper container'>
            <div className='service'>
              <FaSearch size={30} color='#2289ff' />
              <span>Encontre um lar</span>
              <p>
                Seja um apartamento ou uma casa simples. Encontre propriedades
                de diversos tipos preços e escolha uma de acordo com seu gosto
              </p>
            </div>

            <div className='service'>
              <FaHandshake size={30} color='#2289ff' />
              <span>Corretores</span>
              <p>
                Nosso sistema consta com uma gama de corretores, você pode
                filtrar pelos melhores corretores e também avalia-los de acordo
                com seus serviços
              </p>
            </div>

            <div className='service'>
              <FaPiggyBank size={30} color='#2289ff' />
              <span>Seja um vendedor</span>
              <p>
                Caso não queira comprar uma propriedade e queira vender uma,
                você também pode colocar suas propriedades a venda
              </p>
            </div>
          </div>
        </session>
      </main>
    </>
  );
}
