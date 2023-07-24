import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
import styles from './styles.module.scss';

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
    if(id !== undefined && slug !== undefined) { 
      const estate = estates.find(
        (estate: any) => estate.id == id && estate.slug == slug
      );
      if (!estate) return '';

      setEstates(estate);
    }
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
  }, [id, slug]);

  return (
    <>
      <HeaderSecondary />
      <section className={styles.house_info_details}>
        <div className={styles.house_slide_container}>
          <Swiper spaceBetween={150} slidesPerView={3}>
            <SwiperSlide>
              <div className={styles.house_img_slide}>
                <img
                  src="https://troyhomes.co.uk/wp-content/uploads/2016/11/Mirror-House-4.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.house_img_slide}>
                <img
                  src="https://p0.pikist.com/photos/827/31/living-room-apartment-interior-design-indoors-decoration-room-house-interior-modern.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.house_img_slide}>
                <img
                  src="https://www.telegraph.co.uk/content/dam/interiors/2018/spark/bathstore/bathstore-bathroom-interior.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.house_img_slide}>
                <img
                  src="https://i.mlcdn.com.br/portaldalu/fotosconteudo/50960.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.house_img_slide}>
                <img
                  src="https://houseoflastthings.com/wp-content/uploads/2018/10/Room-Interior-Design-Ideas.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <section className={`${styles.house_details_body} container`}>
          <div className={styles.house_header_wrapper}>
            <div className={styles.house_details_header}>
              <h2>{estate?.name}</h2>
              <p>{estate?.location}</p>
              <div className={styles.house_details_features}>
                <div className={styles.house_features_items}>
                  <FaObjectUngroup size={20} color="#2289ff" />
                  <span>{estate?.area}</span>
                </div>
                <div className={styles.house_features_items}>
                  <FaToilet size={20} color="#2289ff" />
                  <span>{estate?.bathrooms}</span>
                </div>
                <div className={styles.house_features_items}>
                  <FaBed size={20} color="#2289ff" />
                  <span>{estate?.rooms}</span>
                </div>
              </div>
            </div>
            <div className={styles.house_details_price}>
              <h2>
                <CurrencyFormat
                  value={estate?.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$'}
                />{' '}
              </h2>

              <div className={styles.buttons}>
                <CopyToClipboard text={postUrl} onCopy={copyEvent}>
                  <button className={styles.button_secondary}>
                    <FaShare /> Compartilhar
                  </button>
                </CopyToClipboard>

                <button className={styles.btn_contact} onClick={openModal}>
                  {' '}
                  <FaWhatsapp size={22} /> <span>Contatar</span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.house_details_description}>
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
            <div className={styles.info}>
              <h2>Descrição</h2>
              <p>{estate?.description}</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default EstateDetails;
