import { ReactNode, useEffect, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

import advanceState from '../lib/advanceState'
import { HEIGHT } from '../lib/config'
import loadPoint from '../lib/loadPoint'
import loadSequence from '../lib/loadSequence'
import parseNumber from '../lib/parseNumber'

import main from '../sequence/main.json'

import { Point, State } from '../types'

import context from '.'

const initial: State = {
  entities: [],
  index: 0,
  sequence: main,
  values: {}
}

const point: Point = initial.sequence[initial.index]

const loaded = loadPoint({ state: initial, point })

export default function Provider ({ children }: {
  children: ReactNode
}): JSX.Element {
  const [state, setState] = useState<State>(loaded)
  const { index } = state

  const point = state.sequence[state.index]

  function effect (): void {
    function tick (): void {
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

  useEffect(effect, [point, index])

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

  function setValue (name: string, value: string): void {
    setState((state: State) => {
      const values = { ...state.values, [name]: value }

      const setState = { ...state, values }

      return setState
    })
  }

  function save (): void {
    const json = JSON.stringify(state)

    localStorage.setItem('save', json)
  }

  function load (): void {
    const json = localStorage.getItem('save')

    if (json != null) {
      const state = JSON.parse(json)

      setState(state)
    }
  }

  const value = {
    state, point, ratio, save, load, advance, setValue, select, ref
  }

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}
