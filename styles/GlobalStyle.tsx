import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Pretendard Variable";
        src: url('font/PretendardVariable.ttf');
    }  

    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    }

    @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    
    *{
        box-sizing: border-box;   
    }
    
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, figure{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
        vertical-align: baseline; 
        font-family: "Pretendard Variable";
    }
    button {
        /* padding: 0; */
        border: 0;
        background: transparent;
        cursor: pointer;
    } 
    body, html {
        height: 100dvh; //dvh와 같은 상황도 고려해야한다.
    }
 
    div#__next{
        height: 100%;
    }
`;

export default GlobalStyles;
