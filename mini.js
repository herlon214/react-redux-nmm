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
    state.score = this.isTerminalState(state, player)
    if(depth == 3) {
      return state;
    }

    let scores = []
    let moves = []

    depth += 1;
    let states = this.possibilities(state.state, player)
    if(states.children.length == 0) return states.score;

    states.children = states.children.map((cState) => {
      cState.score = this.isTerminalState(cState, player)
      
      // If has a lower score doesn't see the childrens
      if(newStates.score > state.score) {
        state.score = newStates.score
        state.nextMove = newStates.state
        
        let newStates = this.nextMove(cState, depth, player);
        if(typeof newStates.children !== "undefined") {
          newStates.children.children.map((child) => {
            if(child.score > state.score) {
              state.score = child.score
              state.nextMove = newStates.state
            }
          })
        }
        
        return newStates
      }
    
      return cState;
      
    })

    state.children = states;

    return state
  }
}

module.exports = Minimax;
