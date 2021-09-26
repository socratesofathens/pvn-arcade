import Dynamic from './Dynamic'
import Resize from './Resize'
import { Button, Entity, Image, Text } from './types'
import Box from './Box'

export default function Render ({ entity, ratio }: {
  entity: Entity
  ratio: number
}): JSX.Element {
  if (entity.type === 'image') {
    const image = entity as Image

    return (
      <Dynamic
        file={image.file}
        size={image.size}
        left={image.left}
        top={image.top}
      />
    )
  }

  if (entity.type === 'text') {
    const text = entity as Text

    return (
      <Resize
        ratio={ratio}
        left={text.left}
        top={text.top}
        color={text.color}
        fontFamily={text.fontFamily}
        fontWeight={text.fontWeight}
        fontSize={text.fontSize}
      >
        {text.content}
      </Resize>
    )
  }

  if (entity.type === 'button') {
    const button = entity as Button

    return (
      <Box
        left={button.left}
        top={button.top}
        color={button.color}
        fontFamily={button.fontFamily}
        fontWeight={button.fontWeight}
        fontSize={button.fontSize}
        goto={button.goto}
      >
        {button.content}
      </Box>
    )
  }

  return <></>
}
