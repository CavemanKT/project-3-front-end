import produce from 'immer'

import {
  SET_GAME,
  GET_GAME,
  UNSET_GAME
} from '@/actions/game'

const initialState = {
  game: null,
  isGetGameLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case SET_GAME: {
      return produce(state, (draft) => {
        draft.game = action.payload.game
      })
    }
    case UNSET_GAME: {
      return produce(state, (draft) => {
        draft.game = null
      })
    }
    default: {
      return state
    }
  }
}
