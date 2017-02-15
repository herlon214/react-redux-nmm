"use strict";

class Minimax {

  constructor() {
    this.choice = []
    this.total = 0;
  }

  // @return Number that represent who won
  getScore(player) {
    return player == 1 ? 10 : -10;
  }

  // Dectect who won the game
  // @return number of the score of who won
  isTerminalState(state) {
    throw new Error("Terminal state function not defined")
  }

  /**
   * Must return and object like this
   * { state: state, children: [...childrens] }
   */
  possibilities(state, player) {
    throw new Error("Possibilities function not defined")
  }

  changeTurn(player) {
    throw new Error("Change turn function not defined")
  }


  // minimax algorithm
  nextMove(state, depth = 0, player) {
    if(depth == 3) return -1;


    if(this.isTerminalState(state.state) >= 0) {
      state.score = this.isTerminalState(state.state);

      return state;
    }

    depth += 1;
    let states = this.possibilities(state.state, player)
    states.score = player == 1 ? -9000 : 9000
    if(states.children.length == 0) return states.score;
    states.children = states.children.map((state) => {
      let newStates = this.nextMove(state, depth, this.changeTurn(player));
      if(typeof newStates.score !== "undefined") {
        if(player == 1)  {
          states.score = Math.min(newStates.score, states.score)
        }else {
          states.score = Math.max(newStates.score, states.score)
        }
        states.score = newStates.score
        states.nextMove = newStates.state
      }



      return newStates
    })


    return {
      state: state,
      children: states
    };
  }
}

module.exports = Minimax;
