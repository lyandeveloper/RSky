import Head from "next/head";
import Header from "../components/Header";

export default function App() {
  return (
    <>
      <Head>
        <title>R.State</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
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
      </main>

      <style>{`
        .hero {
          display: flex;
          flex-direction: row; 
          justify-content: space-between;
          width: 100%;
          min-height: 900px;
          margin-top: 20px;
        }
        
        .hero-banner {
          position: relative;
          width: 600px;
          height: 600px; 
        }

        .hero-banner img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 100%;
        }

        .hero-text {
          position: relative;
          top: 200px;
          width: 500px;
          padding: 10px;
        }

        .hero-text h2 {
          font-size: 32px;
          color: #314862;
          font-weight: normal;
        }

        .hero-text p {
          margin-top: 10px;
          font-weight: lighter;
          color: #555;
        }

        .hero button {
          padding: 15px 20px;; 
          margin-top: 10px; 
        }

        form {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center; 
          box-shadow: 0px 11px 37px -28px rgba(107,107,107,1);
          padding: 30px 0;
        }

        form label {
          display: flex;
          flex-direction: column;
          color: #314862;
        }

        label input {
          margin-top: 10px;
          margin-right: 30px;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }

        form button {
          padding: 20px 30px;   
          margin-top: 20px; 
        }

        section.about-us {
          margin-top: 100px;
          min-height: 800px;
          display: flex;
        }

        .about-img {
          position: relative;
          width: 200em;
          height: 520px
        }

        .about-img img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .about-text {
          margin-left: 20px;
        }

        .about-text span {
          color: #2289ff;
        }

        .about-text h2 {
          font-size: 32px;
          font-weight: normal;
          color: #314862;
        }

        .about-text p{
          margin-top: 20px;
          font-weight: lighter;
          color: #555;
        }

        .btn-about {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
