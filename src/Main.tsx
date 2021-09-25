import styled from 'styled-components'

function image ({ image }: {
  color?: string
  image?: string
}): string | undefined {
  if (image != null) {
    const url = `url(${image})`

    return url
  }
}

const Main = styled.main`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
  background-image: ${image};
  background-color: ${props => props.color};
  width: 100vw; 
  height: calc(9/16 * 100vw);
  max-height: 100vh;
  max-width: calc(16/9 * 100vh);
  
  /* center */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
`

export default Main
