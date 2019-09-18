import React from 'react'
import { hot } from 'react-hot-loader'

import './App.css'
import Main from './Main/Main'

function App () {
  return (
    <div className='App'>
      <Main />
    </div>
  )
}

export default hot(module)(App);
