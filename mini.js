"use strict";

class Minimax {

  constructor() {
    this.choice = []
    this.total = 0;
  }

  // @return Number that represent who won
  winning(player) {
    return player == 1 ? 10 : -10;
  }

  // Dectect who won the game
  // @return number of the score of who won
  getScore(state) {
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


  minimax(board, player, depth) {
    if(depth == 4) return {score: this.getScore(board, player), board: board}

    depth++;
    let moves = []
    let avaiableMoves = this.possibilities(board, player)

    if(avaiableMoves.length == 0) return {score: this.getScore(board, player), board: board}

    for(let i = 0; i < avaiableMoves.length; i++) {
      let move = {}
      move.board = avaiableMoves[i].board
      let result = this.minimax(move.board, player == 1 ? 0 : 1, depth)
      move.score = result.score;

      moves.push(move)
    }

    // Choose the best move
    let bestMove;
    if(player == 1) { // A.I Player
      let bestScore = -10000
      for(let i = 0; i < moves.length; i++) {
        if(moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }else {
      let bestScore = 10000
      for(let i = 0; i < moves.length; i++) {
        if(moves[i].score < bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }

    return moves[bestMove]

  }

}

module.exports = Minimax;
