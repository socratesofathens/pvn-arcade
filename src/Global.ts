import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const Global = createGlobalStyle`
  ${normalize}

  html, body, div {
    width: 100%;
    height: 100%;
  }

  body {
    background: black;
  }
`

export default Global
