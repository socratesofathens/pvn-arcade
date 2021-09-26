import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

import GlobalStyle from './style/Global'
import Main, { HEIGHT } from './style/Main'

import parseNumber from './parseNumber'
import Render from './Render'
import sequence from './sequence.json'
import { Entity, Point } from './types'

export default function App (): JSX.Element {
  const [index, setIndex] = useState(0)
  const [entities, setEntities] = useState<Entity[]>([])

  const point: Point = sequence[index]

  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>()
  const ratio = height / HEIGHT

  const renders = entities.map(entity => {
    const render = <Render key={entity.name} entity={entity} ratio={ratio} />

    return render
  })

  function effect (): void {
    if (point.remove != null || point.add != null) {
      const removedEntities = point.remove != null
        ? entities.filter(entity => {
          if (point.remove != null) {
            return !point.remove.includes(entity.name)
          }

          return true
        })
        : entities

      const combinedEntities = point.add != null
        ? [...removedEntities, ...point.add]
        : removedEntities

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
      <GlobalStyle />

      <Main ref={ref} color='white'>
        {renders}
      </Main>
    </>
  )
}
