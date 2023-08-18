import { createGlobalStyle } from "styled-components"

const ApplicationStyles = createGlobalStyle `
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        font-family: 'Roboto', sans-serif;
    }

    body, html {
        margin: 0;
        min-height: 100dvh;
        width: 100%;
        height: 100%;
    }
`
export default ApplicationStyles;