import produce from 'immer'

import {
  SET_DEV_GAME,
  GET_DEV_GAME,
  UNSET_DEV_GAME,
  SET_DEV_GAME_APPLICATIONS,
  GET_DEV_GAME_APPLICATIONS,
  UNSET_DEV_GAME_APPLICATIONS
} from '@/actions/dev/game'

const initialState = {
  devGame: [],
  isGetGameLoading: false,
  destroyingIDs: [],
  meta: null,
  devGameApplications: [],
  isGetDevGameApplicationsLoading: false,
  destroyingApplicationIDs: []
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
    case GET_DEV_GAME: {
      return produce(state, (draft) => {
        draft.isGetGameLoading = action.payload.loading
      })
    }
    case SET_DEV_GAME_APPLICATIONS: {
      console.log('SET_DEV_GAME_APPLICATIONS', action.payload.applications)
      return produce(state, (draft) => {
        draft.devGameApplications = action.payload.applications
      })
    }
    case UNSET_DEV_GAME_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.meta = null
        draft.devGameApplications = []
      })
    }
    case GET_DEV_GAME_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.isGetDevGameApplicationsLoading = action.payload.loading
      })
    }
    default: {
      return state
    }
  }
}
