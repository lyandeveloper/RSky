import styled from 'styled-components';
import { MAIN, SECONDARY, GRAY } from '../../styles/Colors';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 0 !important;
`;

export const Logo = styled.a`
  font-weight: bold;
  font-size: 28px;
  color: ${GRAY};
  text-decoration: none;
`;

export const LogoDetail = styled.span`
  color: ${MAIN};
`;

export const Menu = styled.nav``;

export const MenuContent = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
  color: ${SECONDARY};
  cursor: pointer;
`;
