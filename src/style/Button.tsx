import styled from 'styled-components'

import centerStyle from './center'
import textStyle from './text'

interface ButtonStyleProps {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  ${centerStyle}
  ${textStyle}
  background: #575757;
  color: white;
  padding: 1%;
  border: 1px solid #707070;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #666;
  }

  &:active {
    background: black;
  }
`

export default ButtonStyle
