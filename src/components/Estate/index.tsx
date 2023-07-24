import CurrencyFormat from 'react-currency-format';
import { FaBed, FaObjectUngroup, FaToilet } from 'react-icons/fa';
import { MAIN } from '../../styles/Colors';
import {
  EstateBanner,
  EstateBody,
  EstateBodyCategory,
  EstateBodyDescription,
  EstateBodyPlace,
  EstateContainer,
  EstateFooter,
  EstateFooterFeatures,
  EstateFooterInfo,
  EstateFooterItems,
  EstateHeader,
  EstateInfo,
  EstatePrice
} from './styles';

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
      <EstateContainer href={url}>
        <EstateBanner src={imgUrl} alt="" />
        <EstateInfo>
          <EstateHeader>
            <EstatePrice>
              <CurrencyFormat
                value={price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'R$'}
              />{' '}
            </EstatePrice>
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
