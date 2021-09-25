import Dynamic from './Dynamic'
import Global from './Global'
import Main from './Main'

import sequence from './sequence.json'

export default function App (): JSX.Element {
  const index = 0
  const point = sequence[index]

  const images = point.images.map(image => (
    <Dynamic
      key={image.name}
      name={image.name}
      size={image.size}
      left={image.left}
      top={image.top}
    />
  ))

  return (
    <>
      <Global />

      <Main color='white'>
        {images}
      </Main>
    </>
  )
}
