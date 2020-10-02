import React from "react";
import Link from "next/link";

function HeaderSecondary() {
  return (
    <>
      <header>
        <div className="header-wrapper container">
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
          <div className="profile">
            <button>Cadastre-se</button>
          </div>
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

      <style jsx>{`
        .header-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
        }

        nav {
          display: flex;
          justify-content: center;
          background: #2289ff;
          padding: 10px 0;
        }

        nav ul {
          display: flex;
          flex-direction: row;
          list-style: none;
        }

        nav ul li {
          margin-right: 20px;
        }

        nav a {
          text-decoration: none;
          color: white;
          transition: border-bottom 0.5s;
          font-size: 14px;
        }

        nav a:hover {
          border-bottom: 1px solid white;
        }

        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #888;
          text-decoration: none;
        }

        .logo span {
          color: #2289ff;
        }

        .search-bar input {
          padding: 8px;
          width: 600px;
          border-radius: 4px;
          border: 1px solid #ccc;
          outline: 0;
        }

        .profile {
          display: flex;
          align-items: center;
          flex-direction: row;
          color: #555;
          font-size: 14px;
        }

        .profile img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 5px;
        }
      `}</style>
    </>
  );
}

export default HeaderSecondary;
