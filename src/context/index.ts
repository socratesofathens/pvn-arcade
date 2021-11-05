import { createContext } from 'react'
import { Value } from '../types'

const value: Value = {}
const context = createContext<Value>(value)

export default context
