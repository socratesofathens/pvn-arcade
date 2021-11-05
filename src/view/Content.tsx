import { useContext } from 'react'
import ReadersBlock from 'readers-block-react'
import KitchenDefense from 'kitchen-defense-react'

import context from '../context'

import Renders from './Renders'

export default function Content (): JSX.Element {
  const { advance, state, setValue } = useContext(context)

  if (state?.component == null) {
    return <Renders />
  }

  const components: Record<string, any> = {
    'readers-block-react': ReadersBlock,
    'kitchen-defense-react': KitchenDefense
  }

  const Component = components[state.component]

  function next (value: any): void {
    if (state != null) {
      if (state.value != null) {
        setValue?.(state?.value, value)
      }
    }

    advance?.()
  }

  return <Component next={next} />
}
