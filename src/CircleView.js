import React from 'react'

export default class CircleView extends React.Component {
  render () {
    const {color} = this.props
    return (
      <svg>
        <circle cx={10} cy={10} r={7} stroke={color} strokeWidth='3' fill='none' />
      </svg>
    )
  }
}
