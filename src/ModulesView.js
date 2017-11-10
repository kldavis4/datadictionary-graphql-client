import React from 'react'

export default class ModulesView extends React.Component {
  renderLoading () {
    return <div>Loading...</div>
  }

  renderError () {
    return <div>Unexpected Error!</div>
  }

  renderModules () {
    const { modules } = this.props
    return (
      <ul style={{width: '200px'}}>{
        modules.map(module =>
          <li key={module.id}>{module.name}</li>
        )}
      </ul>
    )
  }

  render () {
    if (this.props.loading) {
      return this.renderLoading()
    } else if (this.props.modules) {
      return this.renderModules()
    } else {
      return this.renderError()
    }
  }
}
