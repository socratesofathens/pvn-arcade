/* eslint @typescript-eslint/no-var-requires: "off" */

import loadPoint from '../lib/loadPoint'

import { State } from '../types'

export default function loadSequence ({ state, sequence }: {
  state: State
  sequence?: string
}): State {
  if (sequence == null) {
    return state
  }

  const data = require(`../sequence/${sequence}.json`)
  const point = data[0]
  const loadedState = loadPoint({ state, point })

  const sequenceState = { ...loadedState, sequence: data, index: 0 }

  return sequenceState
}
