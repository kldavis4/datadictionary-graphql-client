import React, { Component } from 'react'
import './App.css'
import KualiDaysLogo from './KualiDaysLogo'
import EntitiesSelectorContainer from './EntitiesSelectorContainer'
import EntityContainer from './EntityContainer'

class App extends Component {
  state = {
    selectedEntity: 1
  }

  handleEntityChange = (evt) => {
    this.setState({selectedEntity: evt.target.value})
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header' style={{height: '250px'}}>
          <KualiDaysLogo updateFrequency={1000} />
          <h1 className='App-title'>Data Dictionary Client</h1>
        </header>
        <EntitiesSelectorContainer entitySelected={this.handleEntityChange} />
        <EntityContainer entityId={this.state.selectedEntity}/>
      </div>
    )
  }
}

export default App
