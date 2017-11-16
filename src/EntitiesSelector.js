import React from 'react'

export default class EntitiesSelector extends React.Component {
  renderLoading () {
    return <div>Loading...</div>
  }

  renderError () {
    return <div>Unexpected Error!</div>
  }

  renderEntities () {
    const { entities } = this.props
    return (
      <select onChange={this.props.entitySelected}>{
        entities.map(entity =>
          <option value={entity.id} key={entity.id}>{entity.name}</option>
        )}
      </select>
    )
  }

  render () {
    if (this.props.loading) {
      return this.renderLoading()
    } else if (this.props.entities) {
      return this.renderEntities()
    } else {
      return this.renderError()
    }
  }
}
