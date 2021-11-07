import { useContext } from 'react'

import context from '../context'
import ImageBox from './box/Image'
import TextBox from './box/Text'
import ButtonBox from './box/Button'

import { Button, Entity, Image, Text } from '../types'

export default function RenderView ({ entity }: {
  entity: Entity
}): JSX.Element {
  const { state } = useContext(context)

  if (entity.type === 'zone') {
    return <></>
  }

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

  const text = entity as Text

  let replaced = text.content.toString()

  if (typeof text.content === 'string') {
    const last = text.content.length - 1
    let start = 0
    while (start < last) {
      const character = replaced[start]
      if (character === '<') {
        const end = replaced.indexOf('>', start)

        if (end > -1) {
          const name = replaced.slice(start + 1, end)
          const before = replaced.slice(0, start)
          const after = replaced.slice(end + 1)

          const value = state?.values[name] ?? ''
          const updated = `${before}${value}${after}`

          replaced = updated
          start = end

          continue
        }
      }

      start = start + 1
    }
  }

  if (entity.type === 'text') {
    return (
      <TextBox
        left={text.left}
        top={text.top}
        color={text.color}
        fontFamily={text.fontFamily}
        fontWeight={text.fontWeight}
        fontSize={text.fontSize}
      >
        {replaced}
      </TextBox>
    )
  }

  if (entity.type === 'button') {
    const button = text as Button

    return (
      <ButtonBox
        left={button.left}
        top={button.top}
        color={button.color}
        fontFamily={button.fontFamily}
        fontWeight={button.fontWeight}
        fontSize={button.fontSize}
        sequence={button.sequence}
        save={button.save}
        load={button.load}
      >
        {replaced}
      </ButtonBox>
    )
  }

  return <></>
}
