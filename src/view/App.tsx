import Provider from '../context/Provider'

import GlobalStyle from '../style/Global'

import Frame from './Frame'

export default function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />

      <Provider>
        <Frame />
      </Provider>
    </>
  )
}
