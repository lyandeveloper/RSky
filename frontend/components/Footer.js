import React from "react";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="logo">
          <span>RS</span>ky
        </div>

        <div className="social-medias">
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
        <nav className="footer-menu">
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
        <span className="copyright">
          {new Date().getFullYear()} {"\u00A9"} Todos os direitos reservados -
          Elian Campos{" "}
        </span>
      </footer>

      <style jsx>{`
        footer {
          position: relative;
          margin-top: 300px;
          top: 600px;
          width: 100%;
          background: #2289ff;
          color: white;
          height: 300px;
          padding: 50px;
          border-radius: 60px 0 0 0;
        }

        footer .logo {
          font-size: 32px;
          font-weight: bold;
        }

        footer .social-medias {
          display: flex;
          justify-content: center;
        }

        .social-medias span {
          margin-right: 20px;
          cursor: pointer;
        }

        .footer-menu {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .footer-menu ul {
          display: flex;
          flex-direction: row;
          list-style: none;
        }

        .footer-menu li {
          margin-right: 20px;
        }

        .footer-menu a {
          color: white;
          text-decoration: none;
        }

        .copyright {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px;
        }
      `}</style>
    </>
  );
}

export default Footer;
