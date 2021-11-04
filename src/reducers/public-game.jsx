import produce from 'immer'

import {
  SET_GAMES,
  GET_GAMES,
  UNSET_GAMES,
  SET_GAME,
  GET_GAME,
  UNSET_GAME
} from '@/actions/game'

const initialState = {
  games: [],
  isGetGameLoading: false,
  destroyingIDs: [],
  meta: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES: {
      return produce(state, (draft) => {
        draft.games = action.payload.games
      })
    }
    case UNSET_GAMES: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.games = []
      })
    }
    case GET_GAMES: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case SET_GAME: {
      return produce(state, (draft) => {
        draft.games = action.payload.games
      })
    }
    case GET_GAME: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case UNSET_GAME: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.games = []
      })
    }
    default: {
      return state
    }
  }
}
