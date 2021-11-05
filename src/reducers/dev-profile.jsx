import produce from 'immer'

import {
  SET_PROFILE,
  GET_PROFILE,
  EDIT_PROFILE,
  UPDATE_PROFILE
} from '@/actions/dev/profile'

const initialState = {
  meta: null,
  devInfo: [],
  isGetProfileLoading: false,
  updatingIDs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      console.log(action.type, action.payload)
      return produce(state, (draft) => {
        draft.devInfo = action.payload.currentUser
      })
    }
    case GET_PROFILE: {
      console.log(action.type, action.payload)
      return produce(state, (draft) => {
        draft.isGetProfileLoading = action.payload.loading
      })
    }
    case EDIT_PROFILE: {
      console.log(action.type, action.payload)
      return produce(state, (draft) => {
        // in need of a fix
        const index = draft.devInfo.find((currentUser) => currentUser.id === action.payload.currentUser.id)
        // issue: if I don't use findIndex or find ,what can I use
        if (index !== -1) {
          draft.devInfo[index] = action.payload.currentUser
        }
        console.log(index)
      })
    }
    case UPDATE_PROFILE: {
      console.log(action.type, action.payload)
      return produce(state, (draft) => {
        console.log(action.payload)
        if (action.payload.loading) {
          draft.updatingIDs.push(action.payload.id)
          console.log(action.payload.id)
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
