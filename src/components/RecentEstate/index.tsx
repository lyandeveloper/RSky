import React from 'react';
import { FaBed, FaMapMarkerAlt, FaToilet } from 'react-icons/fa';
import styles from './styles.module.scss';

function RecentEstate({ imgUrl, price, name, location, rooms, bathrooms }) {
  return (
    <>
      <div className={styles.house}>
        <span className={styles.overlay}></span>
        <img src={imgUrl} alt={name} />
        <div className={styles.info}>
          <span className={styles.price}>R${price}</span>
          <div className={styles.house_header_wrapper}>
            <div className={styles.house_header}>
              <span className={styles.house_name}>{name}</span>
              <span className={styles.house_location}>
                <FaMapMarkerAlt color="#314862" /> {location}
              </span>
            </div>
            <div className={styles.house_rooms}>
              <span className={styles.house_icons}>
                <FaBed color="#314862" />
                <span>{rooms}</span>
              </span>
              <span className={styles.house_icons}>
                <FaToilet color="#314862" />
                <span>{bathrooms}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentEstate;
