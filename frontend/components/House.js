import React from "react";
import { FaRegHeart, FaBed, FaToilet, FaObjectUngroup } from "react-icons/fa";
// import { Container } from './styles';

function House() {
  return (
    <>
      <a href="" className="house-container">
        <img
          src="https://troyhomes.co.uk/wp-content/uploads/2016/11/Mirror-House-4.jpg"
          alt=""
        />
        <div className="house-info">
          <div className="house-header">
            <h2>R$ 280.000</h2>
            <FaRegHeart color="#2289ff" />
          </div>
          <div className="house-body">
            <div className="house-body-category">CASA</div>
            <div className="house-body-description">
              Casa térrea com sala de estar , sala de jantar , cozinha, 3
              dormitórios
            </div>
            <div className="house-body-place">Ubajara-CE, Centro</div>
          </div>
          <div className="house-footer">
            <div className="house-footer-features">
              <div className="house-footer-items">
                <FaObjectUngroup color="#2289ff" size={20} />
                <span>150m2</span>
              </div>
              <div className="house-footer-items">
                <FaToilet color="#2289ff" size={20} />
                <span>2</span>
              </div>
              <div className="house-footer-items">
                <FaBed color="#2289ff" size={20} />
                <span>3</span>
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

export default House;
