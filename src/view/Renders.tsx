import { useContext } from 'react'

import context from '../context'

import FullStyle from '../style/Full'

import Render from './Render'

export default function Renders (): JSX.Element {
  const { advance, state } = useContext(context)

  const renders = state?.entities.map(entity => {
    const render = (
      <Render
        key={entity.name}
        entity={entity}
      />
    )

    return render
  })

  return <FullStyle onClick={advance}>{renders}</FullStyle>
}
