import css from "styled-jsx/css";

export default css`
  .hero {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-height: 900px;
    margin-top: 50px;
  }

  .hero-banner {
    position: relative;
    width: 600px;
    height: 600px;
  }

  .hero-banner img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }

  .hero-text {
    position: relative;
    top: 200px;
    width: 500px;
    padding: 10px;
  }

  .hero-text h2 {
    font-size: 32px;
    color: #314862;
    font-weight: normal;
  }

  .hero-text p {
    margin-top: 10px;
    font-weight: lighter;
    color: #555;
  }

  .hero button {
    padding: 15px 20px;
    margin-top: 10px;
  }

  .search form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 11px 37px -28px rgba(107, 107, 107, 1);
    padding: 30px 0;
  }

  form label {
    display: flex;
    flex-direction: column;
    color: #314862;
  }

  label input {
    margin-top: 10px;
    margin-right: 30px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  form button {
    padding: 20px 30px;
    margin-top: 20px;
  }

  section.about-us {
    margin-top: 180px;
    min-height: 800px;
    display: flex;
  }

  .about-img {
    position: relative;
    width: 200em;
    height: 520px;
  }

  .about-img img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .about-text {
    margin-left: 20px;
  }

  .about-text span {
    color: #2289ff;
  }

  .about-text h2 {
    font-size: 32px;
    font-weight: normal;
    color: #314862;
  }

  .about-text p {
    margin-top: 20px;
    font-weight: lighter;
    color: #555;
  }

  .btn-about {
    margin-top: 20px;
  }

  .recent {
    min-height: 600px;
    width: 100%;
  }

  .recent .recent-sub {
    color: #2289ff;
  }

  .recent h2 {
    color: #314862;
    font-size: 28px;
    font-weight: 600;
    margin-top: 10px;
  }

  .recent-link {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .recent-link a {
    margin-right: 5px;
    text-decoration: none;
    color: #314862;
    font-weight: bold;
    font-size: 14px;
  }

  .how-works {
    min-height: 800px;
    width: 100%;
  }

  .how-works > span {
    display: flex;
    justify-content: center;
    color: #2289ff;
  }

  .how-works > h2 {
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: 600;
    margin-top: 10px;
    color: #314862;
  }

  .how-works > p {
    position: relative;
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    font-size: 14px;
    text-align: center;
    color: #555;
  }
  .services-wrapper {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
  }

  .services-wrapper .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50%;
  }

  .services-wrapper span {
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px;
    color: #222;
  }

  .services-wrapper p {
    font-size: 14px;
    margin-top: 20px;
    width: 300px;
    color: #555;
  }

  .highlights {
    position: relative;
    top: 300px;
  }

  .highlights > span {
    display: flex;
    justify-content: center;
    color: #2289ff;
  }

  .highlights > h2 {
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: 600;
    margin-top: 10px;
    color: #314862;
  }

  .highlights > p {
    position: relative;
    margin-top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    font-size: 14px;
    text-align: center;
    color: #555;
  }

  .houses {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 50px;
    row-gap: 110px;
    position: relative;
  }

  .highlights > button {
    margin-top: 110px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .help {
    position: relative;
    top: 600px;
  }

  .help h2 {
    text-align: center;
    color: #222;
  }

  .help form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    box-shadow: 0px 20px 37px -28px rgba(107, 107, 107, 1);
    padding: 20px 0;
    border-radius: 50px;
  }

  .help form input {
    margin-top: 20px;
    margin-right: 10px;
    padding: 10px;
    border: 0;
    width: 30%;
    font-size: 16px;
  }

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
`;
