import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --mainBlue: #2a2a72;
  --lightBlue: #009ffd;
  --mainWhite: #f3f3f3;
  --mainDark: #232528;
  --mainYellow: #ffa400;
}
  html,
  body {
    height: 100%;
    width: 100%;
    color: var(--mainDark) !important;
  }

  body {
    font-family: Oswald, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .text-title {
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
  }
  .text-blue {
    color: var(--mainBlue);
  }
  .text-bright {
    color: var(--lightBlue);
  }
  .btn-black {
    background: transparent;
    text-transform: capitalize;
    font-size: 0.8rem !important;
    color: var(--mainDark);
    border-radius: 0 !important;
    border: 0.1rem solid var(--mainDark) !important;
    cursor: pointer;
    :hover {
      background: var(--mainDark) !important;
      color: var(--mainWhite) !important;
    }
  }
  .cart-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--mainYellow);
  }

  #app {
    background-color: var(--mainWhite) !important;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
