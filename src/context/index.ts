import { createContext } from 'react'
import { State, Point } from '../types'

interface Value {
  state?: State
  point?: Point
  advance?: () => void
  select?: (sequence: string) => void
  ratio?: number
}

const value: Value = {}
const context = createContext<Value>(value)

export default context
