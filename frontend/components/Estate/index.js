import React from 'react';
import Link from 'next/link';
import { FaRegHeart, FaBed, FaToilet, FaObjectUngroup } from 'react-icons/fa';
// import { Container } from './styles';

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
}) {
  return (
    <>
      <a href={url} className="house-container">
        <img src={imgUrl} alt="" />
        <div className="house-info">
          <div className="house-header">
            <h2>{`R$ ${price}`}</h2>
            <FaRegHeart color="#2289ff" />
          </div>
          <div className="house-body">
            <div className="house-body-category">{category}</div>
            <div className="house-body-description">{description}</div>
            <div className="house-body-place">{location}</div>
          </div>
          <div className="house-footer">
            <div className="house-footer-features">
              <div className="house-footer-items">
                <FaObjectUngroup color="#2289ff" size={20} />
                <span>{area}</span>
              </div>
              <div className="house-footer-items">
                <FaToilet color="#2289ff" size={20} />
                <span>{bathrooms}</span>
              </div>
              <div className="house-footer-items">
                <FaBed color="#2289ff" size={20} />
                <span>{rooms}</span>
              </div>
            </div>
            <div className="house-footer-contact">
              <button className="button-secondary">Telefone</button>
              <button>Mensagem</button>
            </div>
          </div>
        </div>
      </a>

      <style jsx>{`
        .house-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: #fff;
          margin-top: 20px;
          margin-left: 20px;
          box-shadow: 3px 0px 8px 0px rgba(204, 204, 204, 1);
          text-decoration: none;
          color: #444;
        }

        .house-container img {
          width: 400px;
        }

        .house-header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .house-header > h2 {
          color: #444;
        }

        .house-info {
          margin-left: 20px;
          padding: 0 20px;
          width: 100%;
        }

        .house-body-description {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 300;
        }

        .house-body-place {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 300;
        }

        .house-footer {
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .house-footer-features {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .house-footer-items {
          margin-right: 10px;
          display: flex;
          align-items: center;
        }

        .house-footer-items span {
          margin-left: 5px;
        }
      `}</style>
    </>
  );
}

export default Estate;
