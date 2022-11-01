import { createGlobalStyle, createGlobalStyle } from "styled-components";

const createGlobalStyle = createGlobalStyle`
*{
    margin 0; padding: 0; box-sizing: border-box;
}

ul,ol,li{
    list-style: none;

}
a{
    outline: 0; text-decoration: none;
}
body{
    width: 100%; height: 100vh; overflow: hidden; position: relative;
}

`;

export default GlobalStyle;