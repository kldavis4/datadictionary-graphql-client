import React, { Component } from 'react'
import './App.css'
import KualiDaysLogo from './KualiDaysLogo'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header' style={{height: '250px'}}>
          <KualiDaysLogo updateFrequency={100} />
          <h1 className='App-title'>Data Dictionary Client</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
