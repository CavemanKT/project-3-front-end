import produce from 'immer'

import {
  SET_GAME,
  GET_GAME,
  UNSET_GAME
} from '@/actions/game'

const initialState = {
  game: [],
  isGetGameLoading: false,
  destroyingIDs: [],
  updatingIDs: [],
  meta: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAME: {
      return produce(state, (draft) => {
        draft.game = action.payload.game
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
        draft.game = []
      })
    }
    default: {
      return state
    }
  }
}
