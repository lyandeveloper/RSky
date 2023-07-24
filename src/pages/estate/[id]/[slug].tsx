import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CurrencyFormat from 'react-currency-format';
import {
  FaBed,
  FaObjectUngroup,
  FaShare,
  FaToilet,
  FaWhatsapp
} from 'react-icons/fa';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import FormModal from '../../../components/FormModal';
import HeaderSecondary from '../../../components/HeaderSecondary';
import estates from '../../../services/content';

type EstateProps = {
  id: number;
  name: string;
  img: string;
  slug: string;
  price: number;
  description: string;
  location: string;
  area: string;
  bathrooms: number;
  rooms: number;
}

function EstateDetails() {
  const router = useRouter();
  const { id, slug } = router.query;
  const [estate, setEstates] = useState<EstateProps>();

  const [modal, setModal] = useState(false);
  const [postUrl, setPostUrl] = useState('');

  const findEstates = () => {
    const estate = estates.find(
      (estate: any) => estate.id == id && estate.slug == slug
    );
    if (!estate) return '';

    setEstates(estate);
  };

  function copyEvent() {
    toast.info('Link copiado!');
  }

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  useEffect(() => {
    setPostUrl(window.location.href);
    findEstates();
  }, []);

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
              <h2>{estate?.name}</h2>
              <p>{estate?.location}</p>
              <div className="house-details-features">
                <div className="house-features-items">
                  <FaObjectUngroup size={20} color="#2289ff" />
                  <span>{estate?.area}</span>
                </div>
                <div className="house-features-items">
                  <FaToilet size={20} color="#2289ff" />
                  <span>{estate?.bathrooms}</span>
                </div>
                <div className="house-features-items">
                  <FaBed size={20} color="#2289ff" />
                  <span>{estate?.rooms}</span>
                </div>
              </div>
            </div>
            <div className="house-details-price">
              <h2>
                <CurrencyFormat
                  value={estate?.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$'}
                />{' '}
              </h2>

              <div className="buttons">
                <CopyToClipboard text={postUrl} onCopy={copyEvent}>
                  <button className="button-secondary">
                    <FaShare /> Compartilhar
                  </button>
                </CopyToClipboard>

                <button className="btn-contact" onClick={openModal}>
                  {' '}
                  <FaWhatsapp size={22} /> <span>Contatar</span>
                </button>
              </div>
            </div>
          </div>

          <div className="house-details-description">
            <Modal
              isOpen={modal}
              shouldCloseOnOverlayClick={true}
              onRequestClose={closeModal}
              style={{
                overlay: {
                  zIndex: 999,
                },
                content: {
                  top: '50%',
                  left: '50%',
                  width: '500px',
                  height: '500px',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                },
              }}
            >
              <FormModal postUrl={postUrl} />
            </Modal>
            <div className="info">
              <h2>Descrição</h2>
              <p>{estate?.description}</p>
            </div>
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

        .buttons {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        .btn-contact {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        .btn-contact span {
          margin-left: 5px;
        }
      `}</style>
    </>
  );
}

export default EstateDetails;
