import React from 'react'
import { request } from 'graphql-request'
import EntitiesSelector from './EntitiesSelector'

const query = `{
  entities {
    id
    name
    code
  }
}`

export default class EntitiesSelectorContainer extends React.Component {
  state = { loading: true, entities: null }

  async componentDidMount() {
    this.setState({loading: true})
    try {
      const { entities } = await request('/api/v1/graphql', query)
      this.setState({entities})
    } catch (err) {
      console.error(err)
    }
    this.setState({loading: false})
  }

  render () {
    const { entities, loading } = this.state
    return <EntitiesSelector
              entities={entities}
              loading={loading} 
              entitySelected={this.props.entitySelected}/>
  }
}
