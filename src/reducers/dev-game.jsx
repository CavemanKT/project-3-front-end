import produce from 'immer'

import {
  GET_DEV_GAME,
  SET_DEV_GAME,
  UNSET_DEV_GAME,
  GET_DEV_GAME_APPLICATIONS,
  SET_DEV_GAME_APPLICATIONS,
  UNSET_DEV_GAME_APPLICATIONS
} from '@/actions/dev/games'

import {
  CHANGE_BTN_TO_APPROVED,
  CHANGE_BTN_TO_APPROVE
} from '@/actions/dev/approval'

// TODO this should be an object not an array
const initialState = {
  devGame: null,
  isGetDevGameLoading: false,

  devGameApplications: [],
  isGetDevGameApplicationsLoading: false,

  applicationsApprovals: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEV_GAME: {
      return produce(state, (draft) => {
        draft.isGetDevGameLoading = action.payload.loading
      })
    }
    case SET_DEV_GAME: {
      return produce(state, (draft) => {
        draft.devGame = action.payload.game
      })
    }
    case UNSET_DEV_GAME: {
      return produce(state, (draft) => {
        draft.devGame = null
      })
    }
    case GET_DEV_GAME_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.isGetDevGameApplicationsLoading = action.payload.loading
      })
    }
    case SET_DEV_GAME_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.devGameApplications = action.payload.applications
      })
    }
    case UNSET_DEV_GAME_APPLICATIONS: {
      return produce(state, (draft) => {
        draft.devGameApplications = []
      })
    }
    case CHANGE_BTN_TO_APPROVED: {
      return produce(state, (draft) => {
        const index = draft.devGameApplications.findIndex((application) => application.TalentId === action.payload.application.TalentId)
        if (index !== -1) draft.devGameApplications[index].approved = true
      })
    }
    case CHANGE_BTN_TO_APPROVE: {
      return produce(state, (draft) => {
        const index = draft.devGameApplications.findIndex((application) => application.TalentId === action.payload.application.TalentId)
        if (index !== -1) draft.devGameApplications[index].approved = false
      })
    }
    default: {
      return state
    }
  }
}
