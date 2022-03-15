import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    #root {
        width: 100%;
        height: 100%;
    }
`