import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={`${styles.header} container`}>
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
    </header>
  );
}

export default Header;
