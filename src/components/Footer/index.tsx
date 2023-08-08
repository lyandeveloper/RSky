import React from 'react';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

import styles from './styles.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <span>RS</span>ky
        </div>

        <div className={styles.social_medias}>
          <span>
            <Link href="#">
              <FaFacebook size={40} />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaInstagram size={40} />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaTwitter size={40} />
            </Link>
          </span>
          <span>
            <Link href="#">
              <FaEnvelope size={40} />
            </Link>
          </span>
        </div>
        <nav className={styles.footer_menu}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explorar</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          {new Date().getFullYear()} {'\u00A9'} Todos os direitos reservados -
          Elian Campos{' '}
        </div>
      </footer>
    </>
  );
}

export default Footer;
