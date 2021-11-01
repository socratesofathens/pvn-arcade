import context from '.'

import loadSequence from '../lib/loadSequence'

import { Point, State } from '../types'

export default function Provider ({ state, setState, point, ratio }: {
  state: State
  setState: any
  point: Point
  ratio: number
}): JSX.Element {
  function select (sequence: string): void {
    setState((state: State) => {
      const loaded = loadSequence({ state, sequence })

      return loaded
    })
  }

  const value = { state, point, select, ratio }

  return <context.Provider value={value} />
}
