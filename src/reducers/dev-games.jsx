import produce from 'immer'

import {
  SET_DEV_GAMES,
  UNSET_DEV_GAMES,
  GET_DEV_GAMES
} from '@/actions/dev/games'

const initialState = {
  meta: null,
  devGames: [],
  isGetDevGamesLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEV_GAMES: {
      return produce(state, (draft) => {
        draft.devGames = action.payload.games
      })
    }
    case UNSET_DEV_GAMES: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.devGames = []
      })
    }
    case GET_DEV_GAMES: {
      return produce(state, (draft) => {
        draft.isGetDevGamesLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
