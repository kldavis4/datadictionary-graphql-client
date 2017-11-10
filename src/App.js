import React, { Component } from 'react'
import './App.css'
import KualiDaysLogo from './KualiDaysLogo'
import Modules from './ModulesContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header' style={{height: '250px'}}>
          <KualiDaysLogo updateFrequency={100} />
          <h1 className='App-title'>Data Dictionary Client</h1>
        </header>
        <Modules />
      </div>
    )
  }
}

export default App
