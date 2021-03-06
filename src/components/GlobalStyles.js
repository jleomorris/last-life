import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray
    }

    &::-webkit-scrollbar-track {
      background: white;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }

  h1 {
    font-size: 6rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: white;
  }

  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #333;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
    
  }
  
  a {
    text-decoration: none;
    color: #333;
  }

  input {
    font-family: "Montserrat", sans-serif;
  }

  .extra-small-cards {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
  }

  .small-cards {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .medium-cards {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
    
    .large-cards {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  .card-highlighted {
    background: #bfbfeb !important;
  }

  // Media queries
  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }


`;

export default GlobalStyles;
