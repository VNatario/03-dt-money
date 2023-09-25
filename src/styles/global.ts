import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.green}
    }

    body {
        background-color: ${(props) => props.theme['main-shape']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
        line-height: 1.6;
    }
`
