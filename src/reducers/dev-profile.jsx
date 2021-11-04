import produce from 'immer'

import {
  SET_PROFILE,
  GET_PROFILE,
  EDIT_PROFILE,
  UPDATE_PROFILE
} from '@/actions/dev/profile'

const initialState = {
  devInfo: null,
  isGetProfileLoading: false,
  updatingIDs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return produce(state, (draft) => {
        draft.devInfo = action.payload.developer
      })
    }
    case GET_PROFILE: {
      return produce(state, (draft) => {
        draft.isGetProfileLoading = action.payload.loading
      })
    }
    case EDIT_PROFILE: {
      return produce(state, (draft) => {
        // draft
      })
    }

    default:
      return state
  }
}
