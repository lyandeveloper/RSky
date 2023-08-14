import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import CustomDrawer from '../CustomDrawer';

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    if(!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.fake_div}></div>
      <a href="/">
        <span>RS</span>ky
      </a>
      <nav>
        <ul>
          <Link href="#">
            <li>Home</li>
          </Link>
          <Link href="/explore">
            <li>Explorar</li>
          </Link>
          <Link href="#">
            <li>Sobre</li>
          </Link>
          <Link href="#">
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
      <IconButton onClick={handleOpenDrawer} className={styles.btn_mobile}>
        <Menu/>
      </IconButton>
      <CustomDrawer anchor='top' open={open} setOpen={setOpen}>
        <nav className={styles.menu_mobile}>
            <IconButton onClick={() => setOpen(false)} className={styles.btn_close}>
              <Close fontSize='large'/>
            </IconButton>
            <ul>
              <Link href="#">
                <li>Home</li>
              </Link>
              <Link href="/explore">
                <li>Explorar</li>
              </Link>
              <Link href="#">
                <li>Sobre</li>
              </Link>
              <Link href="#">
                <li>Contato</li>
              </Link>
          </ul>
        </nav>
      </CustomDrawer>
    </header>
  );
}

export default Header;
