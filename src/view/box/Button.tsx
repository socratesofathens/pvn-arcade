import { ReactNode, MouseEvent, useContext } from 'react'

import context from '../../context'

import ButtonStyle from '../../style/Button'

export default function ButtonBox ({
  children,
  sequence,
  left,
  top,
  color,
  fontFamily,
  fontSize,
  fontWeight
}: {
  children?: ReactNode
  sequence: string
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
}): JSX.Element {
  const { select } = useContext(context)

  function onClick (event: MouseEvent): void {
    select?.(sequence)

    event.stopPropagation()
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
