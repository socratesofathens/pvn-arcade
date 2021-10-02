import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import full from './full'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    ${full}
  }

  body {
    background: black;
  }
`

export default GlobalStyle
