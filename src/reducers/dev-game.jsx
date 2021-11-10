import produce from 'immer'

import {
  SET_DEV_GAME,
  GET_DEV_GAME,
  UNSET_DEV_GAME,
  SET_DEV_GAME_APPLICATIONS,
  GET_DEV_GAME_APPLICATIONS,
  UNSET_DEV_GAME_APPLICATIONS
} from '@/actions/dev/game'

import {
  ADD_IMAGE_IN_DEV_GAME,
  EDIT_IMAGE_IN_DEV_GAME,
  UPDATE_IMAGE,
  REMOVE_IMAGE_IN_DEV_GAME,
  DESTROY_IMAGE
} from '@/actions/dev/image'

// TODO this should be an object not an array
const initialState = {
  devGame: [],
  isGetGameLoading: false,
  updatingIDs: [],
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
    case ADD_IMAGE_IN_DEV_GAME: {
      return produce(state, (draft) => {
        draft.devGame.Images.push(action.payload.image)
      })
    }
    case EDIT_IMAGE_IN_DEV_GAME: {
      return produce(state, (draft) => {
        const index = draft.devGame.Images.findIndex((image) => image.id === action.payload.image.id)
        if (index !== -1) draft.devGame.Images[index] = action.payload.image
      })
    }
    case UPDATE_IMAGE: {
      return produce(state, (draft) => {
        if (action.payload.loading) {
          draft.updatingIDs.push(action.payload.id)
        } else {
          const index = draft.updatingIDs.indexOf(action.payload.id)
          if (index !== -1) draft.updatingIDs.splice(index, 1)
        }
      })
    }
    case REMOVE_IMAGE_IN_DEV_GAME: {
      return produce(state, (draft) => {
        const index = draft.devGame.Images.findIndex((image) => image.id === action.payload)
        if (index !== -1) draft.devGame.Images.splice(index, 1)
      })
    }
    case DESTROY_IMAGE: {
      return produce(state, (draft) => {
        if (action.payload.loading) {
          draft.destroyingIDs.push(action.payload.id)
        } else {
          const index = draft.destroyingIDs.indexOf(action.payload.id)
          if (index !== -1) draft.destroyingIDs.splice(index, 1)
        }
      })
    }
  }
}
