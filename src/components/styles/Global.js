import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
  
        //outline: 1px solid lightgreen;
    }
  
    body {
        background-color: ${({ theme }) => theme.colors.background};
        min-height: 100vh;
        color: ${({ theme }) => theme.colors.text};
        font-family: 'Poppins', sans-serif;
    }
  
    a, a:visited{
        text-decoration: none;
        color: inherit;
    }
  
    ul{
        list-style: none;
    }
  
    h1 {
        font-size: 1rem
    }
  
    img {
        max-width: 100%;
    }

    input, button{
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
    }

`

export default GlobalStyles
