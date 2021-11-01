import { useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

import context from '../context'

import { HEIGHT } from '../lib/config'
import loadPoint from '../lib/loadPoint'
import parseNumber from '../lib/parseNumber'

import main from '../sequence/main.json'

import GlobalStyle from '../style/Global'
import MainStyle from '../style/Main'

import advanceState from '../lib/advanceState'
import loadSequence from '../lib/loadSequence'

import { Point, State } from '../types'

import Content from './Content'

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

  function effect (): void {
    function tick (): void {
      const { index } = state

      setState(state => {
        const current = state.index === index

        if (current) {
          const advanced = advanceState(state)

          return advanced
        }

        return state
      })
    }

    if (point.delay != null) {
      const delay = parseNumber(point.delay)

      setTimeout(tick, delay)
    }
  }

  useEffect(effect, [point])

  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>()
  const ratio = height / HEIGHT

  function advance (): void {
    setState(advanceState)
  }

  function select (sequence: string): void {
    setState((state: State) => {
      const loaded = loadSequence({ state, sequence })

      return loaded
    })
  }

  const value = { state, point, advance, select, ratio }

  const content = (
    <Content />
  )

  return (
    <>
      <GlobalStyle />

      <MainStyle ref={ref} color='white'>
        <context.Provider value={value}>
          {content}
        </context.Provider>
      </MainStyle>
    </>
  )
}
