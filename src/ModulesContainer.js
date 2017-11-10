import React from 'react'
import { request } from 'graphql-request'
import ModulesView from './ModulesView'

const query = `{
      modules {
        id
        name
      }
    }`

export default class ModulesContainer extends React.Component {
  state = { loading: true, modules: null }

  async componentDidMount() {
    this.setState({loading: true})
    try {
      const { modules } = await request('/api/v1/graphql', query)
      this.setState({modules})
    } catch (err) {
      console.error(err)
    }
    this.setState({loading: false})
  }

  render () {
    const { modules, loading } = this.state
    return <ModulesView modules={modules} loading={loading}/>
  }
}
