import React from 'react';
import Link from 'next/link';

import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  LogoDetail,
  Form,
  Input,
  Menu,
  MenuContent,
  MenuItem,
  MenuLink,
} from './styles';

function HeaderSecondary() {
  return (
    <HeaderContainer>
      <HeaderWrapper className="header-wrapper container">
        <Logo href="/" className="logo">
          <LogoDetail>RS</LogoDetail>ky
        </Logo>
        <Form className="search-bar">
          <Input
            type="text"
            name="search"
            placeholder="Buscar lugares, propriedades e muitos mais..."
          />
        </Form>
        <></>
      </HeaderWrapper>

      <Menu>
        <MenuContent>
          <MenuItem>
            <MenuLink href="">Compra</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="">Aluguel</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="">Lançamentos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="">Central de Ajuda</MenuLink>
          </MenuItem>
        </MenuContent>
      </Menu>
    </HeaderContainer>
  );
}

export default HeaderSecondary;
