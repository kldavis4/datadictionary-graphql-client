import React from 'react'
import { request } from 'graphql-request'
import EntityView from './EntityView'

const query = (id) => `{
  entity(id: ${id}) {
    id
    name
    code
    children {
      name
      _type
      ... on Field {
        field_type
        short_name
        code
      }
      ... on ChildField {
        field_type
        short_name
        code
      }
    }
  }
}`

export default class EntityContainer extends React.Component {
  state = { loading: true, entity: null }

  async componentWillReceiveProps(nextProps) {
    this.setState({loading: true})
    try {
      const { entity } = await request('/api/v1/graphql', query(nextProps.entityId))
      this.setState({entity})
    } catch (err) {
      console.error(err)
    }
    this.setState({loading: false})
  }

  render () {
    const { entity, loading } = this.state
    const { children = [] } = entity || {}
    const fields = children.filter(
      child => child._type === 'Field' || child._type === 'ChildField')

    return <EntityView
              entity={entity}
              fields={fields}
              loading={loading}/>
  }
}
