import { ReactNode, MouseEvent } from 'react'

import ButtonStyle from '../../style/Button'

import readersBlock from '../../sequence/readersBlock.json'
import kitchenDefense from '../../sequence/kitchenDefense.json'
const sequences: Record<string, any> = { readersBlock, kitchenDefense }

export default function ButtonBox ({
  children, goto, left, top, color, fontFamily, fontSize, fontWeight, setState
}: {
  children?: ReactNode
  goto: string
  fontFamily?: string
  fontSize?: string | number
  fontWeight?: string | number
  left?: string | number
  top?: string | number
  color?: string
  setState: any
}): JSX.Element {
  function onClick (event: MouseEvent): void {
    console.log(goto)

    setState((state: any) => {
      const copy = { ...state }
      const sequence = sequences[goto]
      copy.sequence = sequence
      copy.index = 0
      return copy
    })

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
