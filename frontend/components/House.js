import React from 'react';
import { FaBed, FaToilet, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
// import { Container } from './styles';

function House() {
  return (
    <>
      <div className='house'>
        <img src='https://wallpaperaccess.com/full/259715.jpg' alt='house' />
        <div className='info'>
          <span className='price'>R$80.000</span>
          <div className='house-header-wrapper'>
            <div className='house-header'>
              <span className='house-name'>Palace</span>
              <span className='house-location'>
                <FaMapMarkerAlt color='#314862' /> Toronto, Canadá
              </span>
            </div>
            <div className='house-rooms'>
              <span className='house-icons'>
                <FaBed color='#314862' />
                <span>4</span>
              </span>
              <span className='house-icons'>
                <FaToilet color='#314862' />
                <span>2</span>
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
          }

          .house img {
            position: absolute;
            width: 100%;
            height: 80%;
            object-fit: cover;
            border-radius: 10px;
          }

          .info {
            position: absolute;
            width: 100%;
            bottom: 0;
            background: #fff;
            box-shadow: 0px 11px 50px -28px rgba(10,10,10,1);
            padding: 10px;
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

export default House;
