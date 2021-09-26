import styled from 'styled-components'

import center from './center'

interface ButtonStyleProps {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  ${center}
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}em;
`

export default ButtonStyle
