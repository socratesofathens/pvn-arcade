import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'
import ReadersBlock from 'readers-block-react'
import KitchenDefense from 'kitchen-defense-react'

import { HEIGHT } from '../lib/config'
import loadPoint from '../lib/loadPoint'
import parseNumber from '../lib/parseNumber'

import main from '../sequence/main.json'

import GlobalStyle from '../style/Global'
import MainStyle from '../style/Main'

import Renders from './Renders'

import { Point, State } from '../types'
import advanceState from '../lib/advanceState'

const initial: State = {
  entities: [],
  index: 0,
  sequence: main
}

const point: Point = initial.sequence[initial.index]

const loaded = loadPoint({ state: initial, point })

export default function App (): JSX.Element {
  const [state, setState] = useState<State>(loaded)

  const point = state.sequence[state.index]

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

  function effect (): void {
    function tick (): void {
      const sumIndex = state.index + 1

      advanceTo(sumIndex)
    }

    if (point.delay != null) {
      const delay = parseNumber(point.delay)

      setTimeout(tick, delay)
    }
  }

  useEffect(effect, [point])

  const components: Record<string, any> = {
    'readers-block-react': ReadersBlock,
    'kitchen-defense-react': KitchenDefense
  }

  const Component = state.component != null && components[state.component]

  function next (result?: any): any {
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

  return (
    <>
      <GlobalStyle />

      <MainStyle ref={ref} color='white'>
        {content}
      </MainStyle>
    </>
  )
}
