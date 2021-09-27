import { css } from 'styled-components'

interface TextStyleProps {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  color?: string
}

function size ({ fontSize }: {
  fontSize?: string | number
}): string | undefined {
  if (fontSize != null) {
    const size = `${fontSize}em`

    return size
  }
}

function family ({ fontFamily }: {
  fontFamily?: string
}): string | undefined {
  if (fontFamily != null) {
    return fontFamily
  }

  return 'Arial, sans'
}

const textStyle = css<TextStyleProps>`
  color: ${props => props.color};
  font-family: ${family};
  font-weight: ${props => props.fontWeight};
  font-size: ${size};
`

export default textStyle
