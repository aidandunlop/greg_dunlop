import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Work Sans', 'sans-serif'; }

html, body {
  height: 100%; 
}
.carousel .slide {
  background: white!important;
}
`;

export default GlobalStyle;
