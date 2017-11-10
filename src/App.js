import React, { Component } from 'react'
import logo from './kuali.png'
import './App.css'
import Modules from './ModulesContainer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Data Dictionary Client</h1>
        </header>
        <Modules />
      </div>
    )
  }
}

export default App
