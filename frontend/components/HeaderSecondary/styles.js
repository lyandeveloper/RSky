import styled from 'styled-components';
import { MAIN, GRAY, GRAY_LIGHT } from '../../styles/Colors';
export const HeaderContainer = styled.header``;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  justify-content: space-evenly;
`;

export const Logo = styled.a`
  font-size: 28px;
  font-weight: 700;
  color: ${GRAY};
  text-decoration: none;
`;

export const LogoDetail = styled.span`
  color: ${MAIN};
`;

export const Form = styled.form``;

export const Input = styled.input`
  padding: 8px;
  width: 600px;
  border-radius: 4px;
  border: 1px solid ${GRAY_LIGHT};
  outline: 0;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  background: ${MAIN};
  padding: 10px 0;
`;

export const MenuContent = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const MenuItem = styled.li`
  margin-right: 20px;

  &hover {
    border-bottom: 1px solid white;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: white;
  transition: border-bottom 0.5s;
  font-size: 14px;
`;
