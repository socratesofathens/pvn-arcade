import Div from './Div'
import parseNumber from './parseNumber'

export default function Resize ({
  currentRatio, content, left, top, color, fontFamily, fontWeight, fontSize
}: {
  currentRatio: number
  content: string
  left?: string | number
  top?: string | number
  color?: string
  fontFamily?: string
  fontWeight?: string | number
  fontSize?: string | number
}): JSX.Element {
  function getFontSize (value?: string | number): number | undefined {
    if (value != null) {
      const fontSizeNumber = parseNumber(value)
      const fontSize = fontSizeNumber * currentRatio

      return fontSize
    }
  }

  const resized = getFontSize(fontSize)

  return (
    <Div
      left={left}
      top={top}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={resized}
    >
      {content}
    </Div>
  )
}
