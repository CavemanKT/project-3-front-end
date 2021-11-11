import produce from 'immer'

import {
  SET_TALENT_PROFILE,
  GET_TALENT_PROFILE,
  UPDATE_TALENT_PROFILE
} from '@/actions/talent/profile'

const initialState = {
  meta: null,
  talentInfo: [],
  isGetProfileLoading: false,
  updatingIDs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TALENT_PROFILE: {
      return produce(state, (draft) => {
        draft.talentInfo = action.payload.currentUser
      })
    }
    case GET_TALENT_PROFILE: {
      return produce(state, (draft) => {
        draft.isGetProfileLoading = action.payload.loading
      })
    }

    default:
      return state
  }
}
