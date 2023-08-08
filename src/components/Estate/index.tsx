import CurrencyFormat from 'react-currency-format';
import { FaBed, FaObjectUngroup, FaToilet } from 'react-icons/fa';
import { MAIN } from '../../styles/Colors';
import styles from './styles.module.scss';
import estates from '../../services/content';

type EstateProps = {
  url: string;
  imgUrl: string;
  price: number;
  category?: string;
  description: string;
  location: string;
  area: string;
  bathrooms: number;
  rooms: number;
}

function Estate({
  url,
  imgUrl,
  price,
  category,
  description,
  location,
  area,
  bathrooms,
  rooms,
}: EstateProps) {
  return (
    <>
      <a className={styles.estate_container} href={url}>
        <img src={imgUrl} alt="" />
        <div className={styles.estate_info}>
          <div className={styles.estate_header}>
            <h2>
              <CurrencyFormat
                value={price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'R$'}
              />{' '}
            </h2>
          </div>
          <div className={styles.estate_body}>
            <span>{category}</span>
            <p className={styles.estate_body_description}>{description}</p>
            <span className={styles.estate_body_place}>{location}</span>
          </div>
          <div className={styles.estate_footer}>
            <div className={styles.estate_footer_features}>
              <div className={styles.estate_footer_items}>
                <FaObjectUngroup color={MAIN} size={20} />
                <span>{area}</span>
              </div>
              <div className={styles.estate_footer_items}>
                <FaToilet color={MAIN} size={20} />
                <span>{bathrooms}</span>
              </div>
              <div className={styles.estate_footer_items}>
                <FaBed color={MAIN} size={20} />
                <span>{rooms}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Estate;
