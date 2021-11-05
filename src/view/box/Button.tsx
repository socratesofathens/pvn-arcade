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
  fontWeight,
  save,
  load
}: {
  children?: ReactNode
  sequence?: string
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
  save?: boolean
  load?: boolean
}): JSX.Element {
  const value = useContext(context)

  function onClick (event: MouseEvent): void {
    if (sequence != null) {
      value.select?.(sequence)
    }

    if (save != null && save) {
      value.save?.()
    }

    if (load != null && load) {
      value.load?.()
    }

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
