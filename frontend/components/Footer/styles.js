import styled from 'styled-components';
import { MAIN } from '../../styles/Colors';

export const FooterContainer = styled.footer`
  position: relative;
  margin-top: 300px;
  top: 600px;
  width: 100%;
  background: ${MAIN};
  color: white;
  height: 300px;
  padding: 50px;
  border-radius: 60px 0 0 0;
`;
export const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const LogoDetail = styled.span``;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
`;
export const SocialMediaItem = styled.span`
  margin-right: 20px;
  cursor: pointer;
`;
export const FooterMenu = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const FooterMenuContent = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;
export const FooterMenuItem = styled.li`
  margin-right: 20px;
`;
export const FooterMenuLink = styled.a`
  color: white;
  text-decoration: none;
`;
export const Copyright = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
`;
