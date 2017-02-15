// ------------------------------------
// Constants
// ------------------------------------
export const DO_MOVEMENT = 'DO_MOVEMENT'
export const VALID_MOVEMENT = 'VALID_MOVEMENT'
export const RESET_BOARD = 'RESET_BOARD'
export const SET_LOADING = 'SET_LOADING'
export const GET_NEXT_MOVEMENT = 'GET_NEXT_MOVEMENT'
export const SET_BOARD = 'SET_BOARD'
export const SHOW_WINNER = 'SHOW_WINNER'
export const SET_WINNER_MODAL = 'SET_WINNER_MODAL'

const initialState = {
  turn: 0,
  winner: -1,
  winnerModal: false,
  loading: false,
  plays: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none']
}

// ------------------------------------
// Actions
// ------------------------------------
export function doMovement (position) {
  return {
    type: DO_MOVEMENT,
    position: position
  }
}

export function resetBoard() {
  return {
    type: RESET_BOARD,
  }
}

export function setBoard(plays, turn) {
  return {
    type: SET_BOARD,
    payload: {
      plays: plays,
      turn: turn
    }
  }
}

export function setWinnerModal(status) {
  return {
    type: SET_WINNER_MODAL,
    payload: status,
  }
}

export function setWinner(turn) {
  return {
    type: SHOW_WINNER,
    payload: turn
  }
}

export function getNextMovement() {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    fetch('/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        turn: getState().game.turn,
        plays: getState().game.plays
      })
    })
    .then((result) => result.json())
    .then((result) => {
      dispatch(setLoading(false))
      if(result.plays) {
        dispatch(setBoard(result.plays, result.turn))
      }else {
        dispatch(setWinner(result.turn))
        dispatch(setWinnerModal(true))
      }
    })
    .catch((err) => {
      dispatch(setLoading(false))
      console.log(err)
    })
  }
}

export function validMovement (position) {
  return (dispatch, getState) => {
    if(getState().game.plays[position] == "none") {
      dispatch(doMovement(position))
      dispatch(getNextMovement())
    }
  }
}

export function setLoading(status) {
  return {
    type: SET_LOADING,
    status: status
  }
}


export const actions = {
  doMovement, validMovement, setLoading, getNextMovement, setWinnerModal
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_WINNER_MODAL] : (state, action) => {
    return {
      ...state,
      winnerModal: action.payload
    }
  },
  [SHOW_WINNER] : (state, action) => {
    return {
      ...state,
      winner: action.payload
    }
  },
  [SET_BOARD] : (state, action) => {
    return {
      ...state,
      plays: action.payload.plays,
      turn: action.payload.turn
    }
  },
  [GET_NEXT_MOVEMENT] : (state, action) => {
    return {
      ...state
    }
  },
  [SET_LOADING] : (state, action) => {
    return {
      ...state,
      loading: action.status
    }
  },
  [RESET_BOARD] : (state, action) => {
    return {
      ...initialState
    }
  },
  [DO_MOVEMENT] : (state, action) => {
    return {
      ...state,
      turn: state.turn == 0 ? 1 : 0,
      plays: state.plays.map((value, index) => {
        if(index == action.position) return 'player' + state.turn

        return value;
      })
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function gameReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
