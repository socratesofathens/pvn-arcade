import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

import Div from './Div'
import Dynamic from './Dynamic'
import Global from './Global'
import Main, { HEIGHT } from './Main'

import parseNumber from './parseNumber'
import sequence from './sequence.json'
import { Entity, Image, Point, Text } from './types'

export default function App (): JSX.Element {
  const [index, setIndex] = useState(0)
  const [entities, setEntities] = useState<Entity[]>([])

  const point: Point = sequence[index]

  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>()
  const currentRatio = height / HEIGHT

  function getFontSize (value?: string | number): number | undefined {
    if (value != null) {
      const fontSizeNumber = parseNumber(value)
      const fontSize = fontSizeNumber * currentRatio

      return fontSize
    }
  }

  const dynamics = entities.map(entity => {
    if (entity.type === 'image') {
      const image = entity as Image

      return (
        <Dynamic
          key={image.name}
          name={image.name}
          size={image.size}
          left={image.left}
          top={image.top}
        />
      )
    }

    if (entity.type === 'text') {
      const text = entity as Text
      const fontSize = getFontSize(text.fontSize)

      return (
        <Div
          key={text.name}
          left={text.left}
          top={text.top}
          color={text.color}
          fontFamily={text.fontFamily}
          fontWeight={text.fontWeight}
          fontSize={fontSize}
        >
          {text.content}
        </Div>
      )
    }
  })

  function effect (): void {
    if (point.add != null) {
      const combinedEntities = [...entities, ...point.add]
      setEntities(combinedEntities)
    }

    if (point.delay != null) {
      const sumIndex = index + 1
      const under = sumIndex < sequence.length

      if (under) {
        const tick = function (): void {
          setIndex(sumIndex)
        }

        const delayNumber = parseNumber(point.delay)
        setTimeout(tick, delayNumber)
      }
    }
  }

  useEffect(effect, [point])

  return (
    <>
      <Global />

      <Main
        ref={ref}
        color='white'
      >
        {dynamics}
      </Main>
    </>
  )
}
