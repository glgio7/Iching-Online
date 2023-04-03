import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  border: none;
  
  list-style: none;
  
  text-decoration: none;
  font-family: "Nunito", sans-serif;

}

img{
  width: 100%;
}

html,body{
  width: 100%;
  height: 100%;
  background-color: #101010;
}

`;

export default GlobalCSS;
