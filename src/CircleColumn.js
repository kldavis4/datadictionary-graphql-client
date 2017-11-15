import React from 'react'
import CircleView from './CircleView'

const WHITE = 'rgb(255,255,255)'
const KUALI = 'rgb(0,181,134)'
const BLACK = 'rgb(0,0,0)'

const HEIGHT = 9

export default class CircleColumn extends React.Component {
  render () {
    const {cellMap, maskHeight} = this.props

    const cells = []
    for (let i = 0; i < HEIGHT; i++) {
      const masked = i >= HEIGHT - maskHeight
      cells.push(masked ? undefined : cellMap[i])
    }

    cells.reverse()

    return (
      <div style={{display: 'flex', flexDirection: 'column', minWidth: '20px'}}>
        {cells.map((cell, idx) => {
          const color = cell === undefined ? BLACK : cell === 1 ? KUALI : WHITE
          return <CircleView key={`cell${idx}`} color={color} />
        })}
      </div>
    )
  }
}
