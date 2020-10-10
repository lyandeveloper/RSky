import React from "react";
import Link from "next/link";
// import { Container } from './styles';

function Header() {
  return (
    <header className="container">
      <div className="logo">
        <span>RS</span>ky
      </div>
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
      <button>Cadastre-se</button>
      <style jsx>
        {`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            padding: 10px 0; 
          }
          header .logo {
            font-weight: bold;
            font-size: 28px;
            color: #888;
          }

          .logo span {
            color: #2289FF;
          }
          ul {
            display: flex;
            align-items: center:
            flex-direction: row;
            list-style: none;
          }

          li {
            margin-right: 20px;
            color: #193f6a;
            cursor: pointer;
          } 
        `}
      </style>
    </header>
  );
}

export default Header;