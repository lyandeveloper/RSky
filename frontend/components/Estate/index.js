import React from 'react';
import Link from 'next/link';
import { FaRegHeart, FaBed, FaToilet, FaObjectUngroup } from 'react-icons/fa';
import { MAIN } from '../../styles/Colors';
import {
  EstateContainer,
  EstateBanner,
  EstateInfo,
  EstateHeader,
  EstatePrice,
  EstateBody,
  EstateBodyCategory,
  EstateBodyDescription,
  EstateBodyPlace,
  EstateFooter,
  EstateFooterFeatures,
  EstateFooterItems,
  EstateFooterInfo,
  EstateFooterContact,
  Button,
} from './styles';

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
      <EstateContainer href={url}>
        <EstateBanner src={imgUrl} alt="" />
        <EstateInfo>
          <EstateHeader>
            <EstatePrice>{`R$ ${price}`}</EstatePrice>
            <FaRegHeart color={MAIN} />
          </EstateHeader>
          <EstateBody>
            <EstateBodyCategory>{category}</EstateBodyCategory>
            <EstateBodyDescription>{description}</EstateBodyDescription>
            <EstateBodyPlace>{location}</EstateBodyPlace>
          </EstateBody>
          <EstateFooter>
            <EstateFooterFeatures>
              <EstateFooterItems>
                <FaObjectUngroup color={MAIN} size={20} />
                <EstateFooterInfo>{area}</EstateFooterInfo>
              </EstateFooterItems>
              <EstateFooterItems>
                <FaToilet color={MAIN} size={20} />
                <EstateFooterInfo>{bathrooms}</EstateFooterInfo>
              </EstateFooterItems>
              <EstateFooterItems>
                <FaBed color={MAIN} size={20} />
                <EstateFooterInfo>{rooms}</EstateFooterInfo>
              </EstateFooterItems>
            </EstateFooterFeatures>
          </EstateFooter>
        </EstateInfo>
      </EstateContainer>
    </>
  );
}

export default Estate;
