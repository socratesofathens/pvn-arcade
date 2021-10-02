import { ReactNode } from 'react'
import DivStyle from '../../style/Div'
import parseNumber from '../../lib/parseNumber'

export default function TextBox ({
  children, left, top, color, fontFamily, fontWeight, fontSize, ratio
}: {
  children: ReactNode
  left?: string | number
  top?: string | number
  color?: string
  fontFamily?: string
  fontWeight?: string | number
  fontSize?: string | number
  ratio: number
}): JSX.Element {
  function getFontSize (value?: string | number): number | undefined {
    if (value != null) {
      const fontSizeNumber = parseNumber(value)
      const fontSize = fontSizeNumber * ratio

      return fontSize
    }
  }

  const resized = getFontSize(fontSize)

  return (
    <DivStyle
      left={left}
      top={top}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={resized}
    >
      {children}
    </DivStyle>
  )
}
