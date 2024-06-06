import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
   
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
        font-family: 'Pretendard';
    }
    button {
        /* padding: 0; */
        border: 0;  
        background: transparent;
        cursor: pointer;
    } 
    body, html {
        height: 100dvh; //dvh와 같은 상황도 고려해야한다.
        max-width: 430px;
        margin: 0 auto;
    }
    input, ::placeholder, textarea {
        font-family: 'Pretendard';
    }
    div#__next{
        height: 100%;
    }
`;

export default GlobalStyles;
