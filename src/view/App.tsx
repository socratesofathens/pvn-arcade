import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'
import ReadersBlock from 'readers-block-react'
import KitchenDefense from 'kitchen-defense-react'

import GlobalStyle from '../style/Global'
import MainStyle from '../style/Main'

import parseNumber from '../lib/parseNumber'
import main from '../sequence/main.json'
import { Entity, Point, State } from '../types'
import { HEIGHT } from '../lib/config'
import Renders from './Renders'

const initial: State = {
  entities: [],
  index: 0,
  sequence: main
}

function removeEntities ({ entities, names }: {
  entities: Entity[]
  names?: string[]
}): Entity[] {
  if (names == null) {
    return entities
  }

  const filtered = entities.filter(entity => {
    const match = names.includes(entity.name)

    return !match
  })

  return filtered
}

function mergeEntities ({ a, b }: {
  a: Entity[]
  b?: Entity[]
}): Entity[] {
  if (b == null) {
    return a
  }

  const updated = a.map(entityA => {
    const match = b.find(entityB => entityB.name === entityA.name)

    if (match == null) {
      return entityA
    }

    return match
  })

  const filtered = b.filter(entityB => {
    const found = updated.find(enityA => enityA.name === entityB.name)
    const unfound = found == null

    return unfound
  })

  const merged = [...updated, ...filtered]

  return merged
}

function loadEntities ({ entities, point }: {
  entities: Entity[]
  point: Point
}): Entity[] {
  const removed = removeEntities({ entities, names: point.remove })

  const merged = mergeEntities({ a: removed, b: point.add })

  return merged
}

function loadPoint ({ state, point }: {
  state: State
  point: Point
}): State {
  const entities = loadEntities({ entities: state.entities, point })

  const loaded = { ...state, entities, component: point.component }

  return loaded
}

function advanceState (state: State): State {
  const sumIndex = state.index + 1
  const inside = sumIndex < state.sequence.length

  if (inside) {
    console.log('inside test')
    const nextState = { ...state, index: sumIndex }

    return nextState
  }

  return state
}

export default function App (): JSX.Element {
  const [state, setState] = useState<State>(initial)
  console.log('state.index test:', state.index)
  const point: Point = state.sequence[state.index]

  function effect (): void {
    const loaded = loadPoint({ state, point })
    setState(loaded)

    if (point.delay != null) {
      const tick = function (): void {
        const sumIndex = state.index + 1

        advanceTo(sumIndex)
      }

      const delayNumber = parseNumber(point.delay)
      setTimeout(tick, delayNumber)
    }
  }

  useEffect(effect, [point])

  const components: Record<string, any> = {
    'readers-block-react': ReadersBlock,
    'kitchen-defense-react': KitchenDefense
  }

  console.log('state.component test:', state.component)

  const Component = state.component != null && components[state.component]
  console.log('Component test:', Component)

  function advance (): void {
    setState(state => {
      const advanced = advanceState(state)

      return advanced
    })
  }

  function advanceTo (nextIndex: number): void {
    setState(state => {
      const current = state.index === nextIndex - 1

      if (current) {
        const advanced = advanceState(state)

        return advanced
      }

      return state
    })
  }

  function next (result?: any): any {
    console.log('result test:', result)

    advance()
  }

  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>()
  const ratio = height / HEIGHT

  const content = Component != null && Component !== false
    ? <Component next={next} />
    : (
      <Renders
        entities={state.entities}
        ratio={ratio}
        setState={setState}
        next={next}
      />
    )

  console.log('content test:', content)

  return (
    <>
      <GlobalStyle />

      <MainStyle ref={ref} color='white'>
        {content}
      </MainStyle>
    </>
  )
}
