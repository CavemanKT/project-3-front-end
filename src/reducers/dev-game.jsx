import produce from 'immer'

import {
  SET_DEV_GAME,
  GET_GAME,
  UNSET_DEV_GAME
} from '@/actions/dev/game'

const initialState = {
  devGame: [],
  isGetGameLoading: false,
  destroyingIDs: [],
  meta: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEV_GAME: {
      return produce(state, (draft) => {
        draft.devGame = action.payload.game
      })
    }
    case UNSET_DEV_GAME: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.devGame = []
      })
    }
    case GET_GAME: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
