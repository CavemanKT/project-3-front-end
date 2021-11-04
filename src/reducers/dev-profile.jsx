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
  console.log(action.payload)
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
        const index = draft.devInfo.findIndex((currentUser) => currentUser.id === action.payload.currentUser.id)
        if (index !== -1) draft.devInfo[index] = action.payload.devInfo
      })
    }
    case UPDATE_PROFILE: {
      return produce(state, (draft) => {
        if (action.payload.loading) {
          draft.updatingIDs.push(action.payload.id)
        } else {
          const index = draft.updatingIDs.indexOf(action.payload.id)
          if (index !== -1) draft.updatingIDs.splice(index, 1)
        }
      })
    }
    default:
      return state
  }
}
