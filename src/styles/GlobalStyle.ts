import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {  
  font-family: ${(prop) => prop.theme.fonts.primary};
}

header{
  padding-top:10px;
  height:100%;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  text-align: center;
}

a{
  text-decoration: none;
color: inherit;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}`;

export default GlobalStyle;
