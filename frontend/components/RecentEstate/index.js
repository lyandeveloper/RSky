import React from 'react';
import { FaBed, FaToilet, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
// import { Container } from './styles';

function RecentEstate({ imgUrl, price, name, location, rooms, bathrooms }) {
  return (
    <>
      <div className="house">
        <span className="overlay"></span>
        <img src={imgUrl} alt={name} />
        <div className="info">
          <span className="price">R${price}</span>
          <div className="house-header-wrapper">
            <div className="house-header">
              <span className="house-name">{name}</span>
              <span className="house-location">
                <FaMapMarkerAlt color="#314862" /> {location}
              </span>
            </div>
            <div className="house-rooms">
              <span className="house-icons">
                <FaBed color="#314862" />
                <span>{rooms}</span>
              </span>
              <span className="house-icons">
                <FaToilet color="#314862" />
                <span>{bathrooms}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .house {
            position: relative;
            width: 300px;
            height: 300px; 
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.5s;
            margin-top: 10px;
          }

          .house img {
            position: absolute;
            width: 100%;
            height: 80%;
            object-fit: cover;
            border-radius: 10px;
          }

          .overlay {
            position: absolute;
            width: 100%;
            height: 80%;
            background: rgba(0,0,0,0);
            border-radius: 10px;
            z-index: 1;
            transition: background 0.5s;
          }

          .house:hover .overlay {
            background: rgba(0,0,0,0.3);
          }

          .house:hover {
            transform: scale(1.01);
          }

          .info {
            position: absolute;
            width: 100%;
            bottom: 0;
            background: #fff;
            box-shadow: 0px 11px 50px -28px rgba(10,10,10,1);
            padding: 10px;
            z-index: 2;
            border: 1px solid #eee;
            border-radius: 10px 10px 0 0;
          }

          .price {
            display: flex;
            justify-content: flex-end;
            font-size: 22px; 
            color: #314862;
          }

          .house-header-wrapper {
            display: flex; 
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
          }

          .house-header {
            display: flex;
            flex-direction: column;
          }

          .house-name {
            font-size: 22px; 
            font-weight: 600;
            color: #314862;
          }

          .house-location {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: lighter;
            color: #222;
          }

          .house-icons:first-child {
            margin-right: 10px;
          }

          .house-icons span {
            margin-left: 2px;
            color: #314862;
          }
      `}
      </style>
    </>
  );
}

export default RecentEstate;
