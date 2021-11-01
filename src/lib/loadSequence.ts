import { State } from '../types'
import readersBlock from '../sequence/readersBlock.json'
import kitchenDefense from '../sequence/kitchenDefense.json'
import loadPoint from '../lib/loadPoint'

const sequences: Record<string, any> = { readersBlock, kitchenDefense }

export default function loadSequence ({ state, sequence }: {
  state: State
  sequence: string
}): State {
  const data = sequences[sequence]
  const point = data[0]
  const loadedState = loadPoint({ state, point })

  const sequenceState = { ...loadedState, sequence: data, index: 0 }

  return sequenceState
}
