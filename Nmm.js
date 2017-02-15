"use strict";

const Minimax = require('./mini')

class Nmm extends Minimax {

  constructor(turn) {
    super()
    this.turn = turn
  }

  // @Override
  getScore(player) {
    return player == 1 ? 10 : -10;
  }

  // @Override
  changeTurn(player) {
    if(player == 1) return 0

    return 1
  }

  // @Override
  isTerminalState({state}, player) {
    let bestMove = 0;
    let i = 0;

    // Nearest moves
    for(i = 0; i < (state.length - 1); i++) {
      if(player == 0) {
        if(state[i] == `player0` && state[i++] == `player0`) bestMove++
      }else {
        if(state[i] == `player1` && state[i++] == `player1`) bestMove--
      }
    }

    i = player

    // Horizontal wins
    if(
      (state[0] == `player${i}` && state[1] == `player${i}` && state[2] == `player${i}`) ||
      (state[3] == `player${i}` && state[4] == `player${i}` && state[5] == `player${i}`) ||
      (state[6] == `player${i}` && state[7] == `player${i}` && state[8] == `player${i}`) ||
      (state[9] == `player${i}` && state[10] == `player${i}` && state[11] == `player${i}`) ||
      (state[12] == `player${i}` && state[13] == `player${i}` && state[14] == `player${i}`) ||
      (state[15] == `player${i}` && state[16] == `player${i}` && state[17] == `player${i}`) ||
      (state[18] == `player${i}` && state[19] == `player${i}` && state[20] == `player${i}`) ||
      (state[21] == `player${i}` && state[22] == `player${i}` && state[23] == `player${i}`) ||

      // Vertical wins
      (state[0] == `player${i}` && state[9] == `player${i}` && state[22] == `player${i}`) ||
      (state[3] == `player${i}` && state[10] == `player${i}` && state[18] == `player${i}`) ||
      (state[6] == `player${i}` && state[11] == `player${i}` && state[16] == `player${i}`) ||
      (state[1] == `player${i}` && state[4] == `player${i}` && state[7] == `player${i}`) ||
      (state[16] == `player${i}` && state[20] == `player${i}` && state[22] == `player${i}`) ||
      (state[8] == `player${i}` && state[12] == `player${i}` && state[17] == `player${i}`) ||
      (state[5] == `player${i}` && state[13] == `player${i}` && state[20] == `player${i}`) ||
      (state[2] == `player${i}` && state[14] == `player${i}` && state[23] == `player${i}`) ||

      // Cross wins
      (state[0] == `player${i}` && state[3] == `player${i}` && state[6] == `player${i}`) ||
      (state[8] == `player${i}` && state[5] == `player${i}` && state[2] == `player${i}`) ||
      (state[21] == `player${i}` && state[18] == `player${i}` && state[15] == `player${i}`) ||
      (state[23] == `player${i}` && state[20] == `player${i}` && state[17] == `player${i}`)
    ) {

      if(player == 0) {
        bestMove = bestMove * 9000
      }else {
        bestMove = bestMove * -9000
      }
    }


    return bestMove;

  }

  // Array with possibilities
  possibilities(state, player) {
    let possibility = []
    for(let i = 0; i < state.length; i++) {
      if(state[i] == "none") {
        let newPosiblity = state.map((arr) => {
          return arr; // clones the array without reference
        })
        newPosiblity[i] = `player${player}`;
        possibility.push({state: newPosiblity});
      }
    }

    return {
      state: state,
      children: possibility
    }

  }
}

module.exports = Nmm;
