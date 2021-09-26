import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: black;
  }
`

export default GlobalStyle
