import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss'

function HeaderSecondary() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header_wrapper} container`}>
        <a href="/" className="logo">
          <span>RS</span>ky
        </a>
        <form className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Buscar lugares, propriedades e muitos mais..."
          />
        </form>
        <></>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Compra</a>
          </li>
          <li>
            <a href="">Aluguel</a>
          </li>
          <li>
            <a href="">Lançamentos</a>
          </li>
          <li>
            <a href="">Central de Ajuda</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderSecondary;
