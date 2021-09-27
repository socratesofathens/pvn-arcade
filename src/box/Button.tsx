import { ReactNode } from 'react'

import ButtonStyle from '../style/Button'

export default function ButtonBox ({
  children, goto, left, top, color, fontFamily, fontSize, fontWeight
}: {
  children?: ReactNode
  goto: string
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
}): JSX.Element {
  const onClick = function (): void {
    console.log(goto)
  }

  return (
    <ButtonStyle
      left={left}
      top={top}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  )
}
