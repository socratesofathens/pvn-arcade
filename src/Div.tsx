import styled from 'styled-components'

import center from './center'

interface DivProps {
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
}

function percent (value?: string | number): string | undefined {
  if (value != null) {
    const percentage = `${value}%`

    return percentage
  }
}

const Div = styled.div<DivProps>`
  ${center}
  left: ${props => percent(props.left)};
  top: ${props => percent(props.top)};
  width: auto;
  height: auto;
  color: ${props => props.color};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}em;
`

export default Div
