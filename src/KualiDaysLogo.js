import React from 'react'
import CircleColumn from './CircleColumn'

export default class KualiDaysLogo extends React.Component {
  state = {
    time: 0
  }

  render () {
    setTimeout(() => {
      this.setState({time: this.state.time + 1})
    }, this.props.updateFrequency)

    const {time} = this.state
    const masks = Array(9).fill().map((val, idx) => {
      return Math.round(3 * Math.sin(idx + time * .3) + 1)
    })

    return (
      <div style={{width: '250px', height: '220px'}}>
        <div style={{display: 'flex', flexDirection: 'row', height: '220px'}}>
          <CircleColumn cellMap={[1, 1, 1, 1, 1, 1, 1]} maskHeight={masks[0]} />
          <CircleColumn cellMap={[1, 1, 1, 1, 1, 1, 1, 1]} maskHeight={masks[1]} />
          <CircleColumn cellMap={[1, 0, 0, 0, 0, 0, 1]} maskHeight={masks[2]} />
          <CircleColumn cellMap={[1, 0, 0, 0, 0, 0]} maskHeight={masks[3]} />
          <CircleColumn cellMap={[1, 0, 0, 0, 0, 0, 1]} maskHeight={masks[4]} />
          <CircleColumn cellMap={[1, 0, 0, 1, 0, 0, 1, 1, 1]} maskHeight={masks[5]} />
          <CircleColumn cellMap={[1, 0, 1, 1, 1, 0, 1, 1]} maskHeight={masks[6]} />
          <CircleColumn cellMap={[1, 1, 1, 1, 1, 1, 1]} maskHeight={masks[7]} />
          <CircleColumn cellMap={[1, 1, 1, 1, 1, 1, 1, 1]} maskHeight={masks[8]} />
        </div>
      </div>
    )
  }
}
