/* eslint @typescript-eslint/no-var-requires: "off" */

import Image from './Image'

export default function Dynamic ({ name, size, top, left }: {
  name: string
  size?: string | number
  top?: string | number
  left?: string | number
}): JSX.Element {
  return (
    <Image
      src={require(`./${name}.png`).default}
      size={size}
      left={left}
      top={top}
    />
  )
}
