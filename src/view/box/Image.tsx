/* eslint @typescript-eslint/no-var-requires: "off" */

import ImageStyle from '../../style/Image'

export default function ImageBox ({ file, size, top, left }: {
  file: string
  size?: string | number
  top?: string | number
  left?: string | number
}): JSX.Element {
  return (
    <ImageStyle
      src={require(`../../image/${file}.png`).default}
      size={size}
      left={left}
      top={top}
    />
  )
}
