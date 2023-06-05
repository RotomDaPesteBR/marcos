import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
    }

    ::-webkit-scrollbar-thumb {
    }

    ::-webkit-scrollbar-track {
    }

  }

  body {
    font: 400 1rem 'Work Sans', 'Montserrat', sans-serif;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('./background.png');
    background-color: ${({ theme }) => theme.colors.background};
    background-size: 100% 100%;
    background-position: center top;
  }

  img{
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  html {
    @media (max-width: 600px)   {
    }
    @media (max-width: 800px) {
    }
    @media (max-width: 1000px) {
    }
  }

  .container {
    width: 100%;
    height: 100%;
  }

`;
