import { Dispatch, SetStateAction } from 'react'

import FullStyle from '../style/Full'

import { Entity, State } from '../types'

import Render from './Render'

export default function Renders ({ entities, ratio, setState, next }: {
  entities: Entity[]
  ratio: number
  setState: Dispatch<SetStateAction<State>>
  next: (result?: any) => any
}): JSX.Element {
  const renders = entities.map(entity => {
    const render = (
      <Render
        key={entity.name}
        entity={entity}
        ratio={ratio}
        setState={setState}
      />
    )

    return render
  })

  function onClick (): void {
    console.log('click test')

    next()
  }

  return <FullStyle onClick={onClick}>{renders}</FullStyle>
}
