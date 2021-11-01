import ImageBox from './box/Image'
import TextBox from './box/Text'
import ButtonBox from './box/Button'

import { Button, Entity, Image, Text } from '../types'

export default function RenderView ({ entity }: {
  entity: Entity
}): JSX.Element {
  if (entity.type === 'image') {
    const image = entity as Image

    return (
      <ImageBox
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
      <TextBox
        left={text.left}
        top={text.top}
        color={text.color}
        fontFamily={text.fontFamily}
        fontWeight={text.fontWeight}
        fontSize={text.fontSize}
      >
        {text.content}
      </TextBox>
    )
  }

  if (entity.type === 'button') {
    const button = entity as Button

    return (
      <ButtonBox
        left={button.left}
        top={button.top}
        color={button.color}
        fontFamily={button.fontFamily}
        fontWeight={button.fontWeight}
        fontSize={button.fontSize}
        sequence={button.sequence}
      >
        {button.content}
      </ButtonBox>
    )
  }

  return <></>
}
