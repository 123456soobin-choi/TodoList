import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
  
  body {
    color: #5fa8d3;
  }
`;

export default GlobalStyle;
