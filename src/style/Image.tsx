import styled from 'styled-components'
import centerStyle from './center'
import percent from '../percent'

interface ImageProps {
  size?: string | number
  left?: string | number
  top?: string | number
  center?: boolean
}

const ImageStyle = styled.img<ImageProps>`
  ${centerStyle}
  height: ${props => percent(props.size)};
`

export default ImageStyle
