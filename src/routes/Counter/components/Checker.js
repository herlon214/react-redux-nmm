import React from 'react'

import Field from './Field'


class Checker extends React.Component {

  constructor(opts) {
    super(opts)
    this.checker = new CheckerGame();
  }

  doMove(payload) {
    if(this.props.winner == "") {
      this.props.move(payload)
      setTimeout(() => (this.predictState()), 0)
    }


  }

  predictState() {
    console.log(this.props)
    let move = this.checker.nextMove({state: this.props.game}, 0, this.props.turn)
    if(move.nextMove) {
      this.props.setGame({game: move.nextMove})
      this.props.changeTurn(this.props.turn)
    }else {
      this.props.setWinner(this.props.turn)
      alert(`Winner ${this.props.turn}`)
    }

  }

  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        {this.props.game.map((field, i) => {
          return <Field key={i} id={i} positions={field} moveAction={(payload) => (this.doMove(payload))} player={this.props.turn} />
        })}

        <br />

        <button onClick={this.props.resetGame}>Reset</button>
      </div>
    )
  }
}

// Counter.propTypes = {
//   // counter     : React.PropTypes.number.isRequired,
//   // doubleAsync : React.PropTypes.func.isRequired,
//   // increment   : React.PropTypes.func.isRequired
// }

export default Checker
