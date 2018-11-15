import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        border: 0;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Segoe UI";
        font-size: 13px;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        padding: 0;
        margin: 0;
    }
`

export default GlobalStyle;