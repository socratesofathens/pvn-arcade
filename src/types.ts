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
}

export interface Entity {
  name: string
  type: string
  left: string | number
  top: string | number
}

export interface Image extends Entity {
  size: string | number
}

export interface Text extends Entity {
  content: string | number
  fontSize?: string | number
  width?: string | number
  color?: string
  fontFamily?: string
  fontWeight?: string | number
}
