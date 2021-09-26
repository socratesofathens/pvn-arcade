import { css } from 'styled-components'

interface TextStyleProps {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  color?: string
}

const textStyle = css<TextStyleProps>`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}em;
`

export default textStyle
