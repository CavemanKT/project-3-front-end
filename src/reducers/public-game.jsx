import produce from 'immer'

import {
  SET_GAME,
  GET_GAME,
  UNSET_GAME
} from '@/actions/game'

import {
  EDIT_IMAGE_IN_GAME
} from '@/actions/dev/image'

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
    case EDIT_IMAGE_IN_GAME: {
      console.log(action.payload)
      return produce(state, (draft) => {
        const index = draft.game.Images.findIndex((image) => image.id === action.payload.image.id)
        if (index !== -1) draft.game.Images[index] = action.payload.image
      })
    }
    default: {
      return state
    }
  }
}
