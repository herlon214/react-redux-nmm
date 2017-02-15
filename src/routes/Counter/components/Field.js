import React from 'react'

class Field extends React.Component {
  render() {
    return (
    <div>
      {this.props.positions.map((value, i) => {
        return <button key={i} onClick={() => (this.props.moveAction({key: this.props.id, target: i, player: this.props.player}))}>{value}</button>
      })}

    </div>)
  }
}

export default Field
