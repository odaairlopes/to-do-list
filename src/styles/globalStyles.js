import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    width: 100vw;
    height: 100vh;
    
    outline: none;
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;

    background-color: var(--backgroundColor);

    ::-webkit-scrollbar{
      width: 15px;
    }
    ::-webkit-scrollbar-track{
      background-color: var(--primary-dark);
    }

    ::-webkit-scrollbar-thumb{
      background-image: linear-gradient(#535A6B,#2D2F3D);
      border-radius: 10px;
    }
  }

  :root {
  --backgroundColor: #8FB8ED;
  --headerColor:    #a5c6f0;
  --whiteColor:   #FFFFFF;
  --cardColor:    #535A6B;
  --hover:           #2D2F3D;
}
`;
