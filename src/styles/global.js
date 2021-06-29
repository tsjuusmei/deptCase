import { createGlobalStyle } from "styled-components";
import TekoRegular from "./fonts/Teko-Regular.ttf";
import ArialMTRegular from "./fonts/Arial-MT-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Teko';
    src: url(${TekoRegular}) format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'ArialMT';
    src: url(${ArialMTRegular}) format('truetype');
    font-weight: 400;
  }
  
  h1, h2 {
    font-family: 'Teko';
    font-weight: 200;
    margin: 0;
  }

  h1 {
    font-size: calc(10em + 10px)
  }

  h2 {
    font-size: calc(2em + 6px)
  }

  h3 {
    font-size: calc(1em + 2px);
    font-family: Arial, sans-serif;
    color: #939393;
  }

  button {
    font-family: 'ArialMT', Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2em;
    border: none;
  }

`;

export default GlobalStyle;
