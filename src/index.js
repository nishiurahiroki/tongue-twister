import React, {useContext, useEffect} from 'react'
import { render } from 'react-dom'

import { Provider, Store } from './store'

import TongueTwister from './containers/TongueTwister.jsx'

const App = () => (
  <Provider>
    <span style={{marginTop:'2vh', marginLeft:'1.5vw'}} className="siimple-h3">早口言葉</span>
    <TongueTwister />
  </Provider>
)

render(
  <App />,
  document.getElementById('root')
)
