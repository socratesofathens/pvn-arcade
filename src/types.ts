import { RefCallback } from 'react'

export interface Frame {
  size?: string | number
  top?: string | number
  left?: string | number
}

export type Cleaner = () => void
export type Effect = Cleaner | undefined

export interface Point {
  delay?: string | number
  add?: Entity[]
  remove?: string[]
  next?: string
  component?: string
  value?: string
  reset?: boolean
  sequence?: string
}

export interface Entity {
  name: string
  type: 'text' | 'image' | 'button' | 'zone'
  left: string | number
  top: string | number
}

export interface Zone extends Entity {
  width: string | number
  height: string | number
  sequence: string
}

export interface Image extends Entity {
  size: string | number
  file: string
}

export interface Text extends Entity {
  content: string | number
  fontSize?: string | number
  color?: string
  fontFamily?: string
  fontWeight?: string | number
}

export interface Button extends Text {
  sequence?: string
  save?: boolean
  load?: boolean
}

export interface State {
  index: number
  entities: Entity[]
  sequence: Point[]
  values: Record<string, string>
  component?: string
  value?: string
}

export interface Value {
  state?: State
  point?: Point
  ratio?: number
  advance?: () => void
  select?: (sequence?: string) => void
  setValue?: (name: string, value: string) => void
  save?: () => void
  load?: () => void
  ref?: RefCallback<HTMLDivElement>
  width?: number
  height?: number
  getRealX?: (value: string | number) => number
  getRealY?: (value: string | number) => number
}
