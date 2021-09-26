import { css } from 'styled-components'
import percent from '../percent'

interface CenterProps {
  left?: string | number
  top?: string | number
}

const centerStyle = css<CenterProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  left: ${props => percent(props.left)};
  top: ${props => percent(props.top)};
`

export default centerStyle
