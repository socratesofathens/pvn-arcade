import { useContext, MouseEvent } from 'react'

import context from '../context'

import MainStyle from '../style/Main'

import { Zone } from '../types'

import Content from './Content'

export default function Frame (): JSX.Element {
  const { ref, state, getRealX, getRealY, select } = useContext(context)

  function onMouseDown (event: MouseEvent<HTMLDivElement>): void {
    const frame = document.getElementById('main-frame')

    if (
      getRealX != null &&
      getRealY != null &&
      select != null &&
      frame != null
    ) {
      const frameBounds = frame.getBoundingClientRect()
      const x = event.clientX - frameBounds.left
      const y = event.clientY - frameBounds.top
      console.log('difference x test', x)
      console.log('difference y test', y)

      const found = state?.entities.find(entity => {
        const isZone = entity.type === 'zone'

        if (!isZone) {
          return false
        }

        const zone = entity as Zone

        const { left, top, width, height } = zone

        const realLeft = getRealX(left)
        const realTop = getRealY(top)
        const realWidth = getRealX(width)
        const realHeight = getRealY(height)

        const realRight = realLeft + realWidth
        const realBottom = realTop + realHeight

        const isInLeft = x >= realLeft
        const isInTop = y >= realTop
        const isInRight = x <= realRight
        const isInBottom = y <= realBottom

        const inside = isInLeft && isInTop && isInRight && isInBottom

        return inside
      })

      if (found != null) {
        const zone = found as Zone
        console.log('zone test', zone)

        select?.(zone.sequence)
      }
    }
  }

  return (
    <MainStyle
      ref={ref}
      color='white'
      onMouseDown={onMouseDown}
      id='main-frame'
    >
      <Content />
    </MainStyle>
  )
}
