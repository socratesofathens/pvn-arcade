import styled from 'styled-components'

interface ImageProps {
  size?: string | number
  left?: string | number
  top?: string | number
  center?: boolean
}

function percent (value?: string | number): string | undefined {
  if (value != null) {
    const percentage = `${value}%`

    return percentage
  }
}

const Image = styled.img<ImageProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  height: ${props => percent(props.size)};
  left: ${props => percent(props.left)};
  top: ${props => percent(props.top)};
`

export default Image
