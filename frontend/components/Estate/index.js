import React from 'react';
import Link from 'next/link';
import { FaRegHeart, FaBed, FaToilet, FaObjectUngroup } from 'react-icons/fa';
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
            <FaRegHeart color="#2289ff" />
          </EstateHeader>
          <EstateBody>
            <EstateBodyCategory>{category}</EstateBodyCategory>
            <EstateBodyDescription>{description}</EstateBodyDescription>
            <EstateBodyPlace>{location}</EstateBodyPlace>
          </EstateBody>
          <EstateFooter>
            <EstateFooterFeatures>
              <EstateFooterItems>
                <FaObjectUngroup color="#2289ff" size={20} />
                <EstateFooterInfo>{area}</EstateFooterInfo>
              </EstateFooterItems>
              <EstateFooterItems>
                <FaToilet color="#2289ff" size={20} />
                <EstateFooterInfo>{bathrooms}</EstateFooterInfo>
              </EstateFooterItems>
              <EstateFooterItems>
                <FaBed color="#2289ff" size={20} />
                <EstateFooterInfo>{rooms}</EstateFooterInfo>
              </EstateFooterItems>
            </EstateFooterFeatures>
            <EstateFooterContact>
              <Button className="button-secondary">Telefone</Button>
              <Button>Mensagem</Button>
            </EstateFooterContact>
          </EstateFooter>
        </EstateInfo>
      </EstateContainer>
    </>
  );
}

export default Estate;
