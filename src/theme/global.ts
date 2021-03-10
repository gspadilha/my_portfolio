import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  ${normalize}

  @media(max-width:1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width:720px) {
    html {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .leaflet-container {
    z-index: 2;
  }

  #__next {
    display: flex;
    flex: 1;
  }
`;
