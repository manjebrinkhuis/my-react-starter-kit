import React from 'react'
import PropTypes from 'prop-types'

import './App.css'

function App (props) {
  return (
    <div className='App'>
      <h1>{`Your ${props.name} is working!`}</h1>
      <p>Time to do something useful.</p>
    </div>
  )
}

App.propTypes = {
  name: PropTypes.string
}

export default App
