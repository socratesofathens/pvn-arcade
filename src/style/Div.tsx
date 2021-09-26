import styled from 'styled-components'

import centerStyle from './center'
import textStyle from './text'

interface DivProps {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
}

const DivStyle = styled.div<DivProps>`
  ${centerStyle}
  ${textStyle}
`

export default DivStyle
