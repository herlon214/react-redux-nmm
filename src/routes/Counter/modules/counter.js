// ------------------------------------
// Constants
// ------------------------------------
export const DO_MOVEMENT = 'DO_MOVEMENT'
export const RESET_GAME = 'RESET'
export const SET_GAME = 'SET_GAME'
export const CHANGE_TURN = 'CHANGE_TURN'
export const SET_WINNER = 'SET_WINNER'

const initialState = {
  playerCanMove: true,
  bestPos: 0,
  board: new Array(1600),
  displayBoard: new Array(100)
}

// ------------------------------------
// Actions
// ------------------------------------
export function move (payload) {
  return {
    type: DO_MOVEMENT,
    payload: payload
  }
}

export function setGame(payload) {
  return {
    type: SET_GAME,
    payload: payload
  }
}

export function resetGame () {
  return {
    type: RESET_GAME
  }
}

export function changeTurn(actualPlayer) {
  return {
    type: CHANGE_TURN,
    payload: actualPlayer
  }
}

export function setWinner(player) {
  return {
    type: SET_WINNER,
    payload: player
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  move,
  setGame,
  changeTurn,
  resetGame,
  setWinner
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_WINNER] : (state, action) => {
    return {
      ...state,
      winner: action.payload
    }
  },
  [RESET_GAME] : (state) => {
    console.log(initialState)
    return {
      ...initialState
    }
  },
  [CHANGE_TURN]: (state, action) => {
    return {
      ...state,
      turn: action.payload == "X" ? "O" : "X"
    }
  },
  [SET_GAME] : (state, action) => {
    return {
      ...state,
      game: action.payload.game
    }
  },
  [DO_MOVEMENT]    : (state, action) => {
    let game = state.game.slice()
    // Check if is a valid movement

    if(game[action.payload.key][action.payload.target] == "") {
      game[action.payload.key][action.payload.target] = action.payload.player
      return {
        ...state,
        turn: state.turn == 'X' ? 'O' : 'X',
        game: game
      }
    }else {
      return {
        ...state
      }
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
