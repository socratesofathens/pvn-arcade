import { useContext } from 'react'
import ReadersBlock from 'readers-block-react'
import KitchenDefense from 'kitchen-defense-react'

import context from '../context'

import Renders from './Renders'

export default function Content (): JSX.Element {
  const { advance, state } = useContext(context)

  if (state?.component == null) {
    return <Renders />
  }

  const components: Record<string, any> = {
    'readers-block-react': ReadersBlock,
    'kitchen-defense-react': KitchenDefense
  }

  const Component = components[state.component]

  return <Component next={advance} />
}
