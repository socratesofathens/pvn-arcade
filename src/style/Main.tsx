import styled from 'styled-components'

export const WIDTH = 1600
export const HEIGHT = 900
export const RATIO = WIDTH / HEIGHT
export const FLIP = HEIGHT / WIDTH

function image ({ image }: {
  color?: string
  image?: string
}): string | undefined {
  if (image != null) {
    const url = `url(${image})`

    return url
  }
}

const MainStyle = styled.main`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
  background-image: ${image};
  background-color: ${props => props.color};
  width: 100vw; 
  height: calc(${FLIP} * 100vw);
  max-height: 100vh;
  max-width: calc(${RATIO} * 100vh);
  
  /* center */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
`

export default MainStyle
