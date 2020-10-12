import React from 'react';
import Link from 'next/link';
import {
  HeaderContainer,
  Logo,
  LogoDetail,
  Menu,
  MenuContent,
  MenuItem,
} from './styles';

function Header() {
  return (
    <HeaderContainer className="container">
      <Logo href="/">
        <LogoDetail>RS</LogoDetail>ky
      </Logo>
      <Menu>
        <MenuContent>
          <Link href="#">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/explore">
            <MenuItem>Explorar</MenuItem>
          </Link>
          <Link href="#">
            <MenuItem>Sobre</MenuItem>
          </Link>
          <Link href="#">
            <MenuItem>Contato</MenuItem>
          </Link>
        </MenuContent>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
