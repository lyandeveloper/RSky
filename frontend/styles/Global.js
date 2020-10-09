import { createGlobalStyle } from 'styled-components';
import { MAIN, HOVER } from './Colors';

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

  button {
    color: white;
    font-weight: bold;
    cursor: pointer;
    background-color: ${MAIN};
    border-radius: 30px;
    border: 0;
    padding: 15px 20px;
    transition: background-color 0.5s;
  }

  .button-secondary {
    background: none;
    color: ${MAIN};
    transition: color 0.5s;
  }

  .button-secondary:hover {
    background: none;
    color: ${HOVER};
  }

  button:hover {
    background-color: ${HOVER};
  }

  .container {
    max-width: 1280px;
    padding: 0 2%;
    margin: 0 auto;
  }


`;

export default GlobalStyles;
