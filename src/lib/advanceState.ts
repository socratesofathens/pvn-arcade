import { State } from '../types'
import loadPoint from './loadPoint'

export default function advanceState (state: State): State {
  const sumIndex = state.index + 1
  const inside = sumIndex < state.sequence.length

  if (inside) {
    const point = state.sequence[sumIndex]
    const nextState = { ...state, index: sumIndex }
    const loadedState = loadPoint({ state: nextState, point })

    return loadedState
  }

  return state
}
