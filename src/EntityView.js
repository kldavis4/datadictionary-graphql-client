import React from 'react'

export default class EntityView extends React.Component {
  renderLoading () {
    return <div>Loading...</div>
  }

  renderError () {
    return <div>Unexpected Error!</div>
  }

  renderEntity () {
    const { entity } = this.props
    return (
      <h1>{entity.name}</h1>
    )
  }

  render () {
    if (this.props.loading) {
      return this.renderLoading()
    } else if (this.props.entity) {
      return this.renderEntity()
    } else {
      return this.renderError()
    }
  }
}
