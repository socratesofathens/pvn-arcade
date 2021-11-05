import { useContext } from 'react'

import context from '../context'
import MainStyle from '../style/Main'

import Content from './Content'

export default function Frame (): JSX.Element {
  const { ref } = useContext(context)

  return (
    <MainStyle ref={ref} color='white'>
      <Content />
    </MainStyle>
  )
}
